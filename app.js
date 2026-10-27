(function () {
  const STORAGE_KEY = "socw552-diagnostic-detective-v1";
  const state = {
    mode: "quick",
    session: [],
    index: 0,
    correct: 0,
    streak: 0,
    bestSessionStreak: 0,
    answered: false,
    progress: loadProgress()
  };

  const views = {
    home: document.getElementById("home-view"),
    quiz: document.getElementById("quiz-view"),
    results: document.getElementById("results-view")
  };

  const els = {
    accuracy: document.getElementById("accuracy-stat"),
    mastered: document.getElementById("mastered-stat"),
    streak: document.getElementById("streak-stat"),
    reviewCount: document.getElementById("review-count"),
    reviewMode: document.getElementById("review-mode"),
    modeLabel: document.getElementById("mode-label"),
    questionCount: document.getElementById("question-count"),
    progressBar: document.getElementById("progress-bar"),
    weekBadge: document.getElementById("week-badge"),
    category: document.getElementById("category-label"),
    question: document.getElementById("question-title"),
    options: document.getElementById("answer-options"),
    feedback: document.getElementById("feedback"),
    feedbackIcon: document.getElementById("feedback-icon"),
    feedbackTitle: document.getElementById("feedback-title"),
    feedbackCopy: document.getElementById("feedback-copy"),
    memoryCue: document.getElementById("memory-cue"),
    next: document.getElementById("next-question"),
    resultRing: document.getElementById("result-ring"),
    resultPercent: document.getElementById("result-percent"),
    resultMessage: document.getElementById("result-message"),
    correctResult: document.getElementById("correct-result"),
    streakResult: document.getElementById("streak-result"),
    missedResult: document.getElementById("missed-result")
  };

  function defaultProgress() {
    return { attempts: 0, correct: 0, bestStreak: 0, missed: [], questionStats: {} };
  }

  function loadProgress() {
    try {
      return { ...defaultProgress(), ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") };
    } catch (_) {
      return defaultProgress();
    }
  }

  function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
    updateDashboard();
  }

  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function showView(name) {
    Object.entries(views).forEach(([key, view]) => view.classList.toggle("active", key === name));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateDashboard() {
    const p = state.progress;
    const accuracy = p.attempts ? Math.round((p.correct / p.attempts) * 100) + "%" : "—";
    const mastered = Object.values(p.questionStats || {}).filter(q => q.correct >= 2 && q.correct > q.incorrect).length;
    els.accuracy.textContent = accuracy;
    els.mastered.textContent = mastered;
    els.streak.textContent = p.bestStreak || 0;
    els.reviewCount.textContent = `${p.missed.length} question${p.missed.length === 1 ? "" : "s"} waiting`;
    els.reviewMode.disabled = p.missed.length === 0;
  }

  function getPool(mode) {
    if (mode === "review") {
      const missed = new Set(state.progress.missed);
      return window.QUESTIONS.filter(q => missed.has(q.id));
    }
    if (mode === "duration") return window.QUESTIONS.filter(q => q.type === "duration");
    if (mode === "case") return window.QUESTIONS.filter(q => q.type === "case");
    return window.QUESTIONS;
  }

  function startSession(mode) {
    const pool = shuffle(getPool(mode));
    if (!pool.length) return;
    state.mode = mode;
    state.session = mode === "quick" ? pool.slice(0, Math.min(10, pool.length)) : pool;
    state.index = 0;
    state.correct = 0;
    state.streak = 0;
    state.bestSessionStreak = 0;
    state.answered = false;
    els.modeLabel.textContent = ({ quick: "QUICK QUIZ", case: "CASE CHALLENGE", duration: "DURATION SPRINT", review: "REVIEW MISSED" })[mode];
    showView("quiz");
    renderQuestion();
  }

  function renderQuestion() {
    state.answered = false;
    const q = state.session[state.index];
    els.questionCount.textContent = `${state.index + 1} / ${state.session.length}`;
    els.progressBar.style.width = `${(state.index / state.session.length) * 100}%`;
    els.weekBadge.textContent = `Week ${q.week}`;
    els.category.textContent = q.category;
    els.question.textContent = q.prompt;
    els.options.replaceChildren();
    els.feedback.hidden = true;
    els.feedback.className = "feedback";
    els.next.hidden = true;

    q.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "answer-option";
      button.dataset.index = index;
      button.innerHTML = `<span class="answer-letter">${String.fromCharCode(65 + index)}</span><span>${choice}</span>`;
      button.addEventListener("click", () => answerQuestion(index));
      els.options.appendChild(button);
    });

    const first = els.options.querySelector("button");
    if (first) first.focus({ preventScroll: true });
  }

  function answerQuestion(selected) {
    if (state.answered) return;
    state.answered = true;
    const q = state.session[state.index];
    const isCorrect = selected === q.answer;
    const buttons = [...els.options.querySelectorAll("button")];
    buttons.forEach((button, index) => {
      button.disabled = true;
      if (index === q.answer) button.classList.add("correct");
      if (index === selected && !isCorrect) button.classList.add("incorrect");
    });

    state.progress.attempts += 1;
    const stats = state.progress.questionStats[q.id] || { correct: 0, incorrect: 0 };

    if (isCorrect) {
      state.correct += 1;
      state.streak += 1;
      state.bestSessionStreak = Math.max(state.bestSessionStreak, state.streak);
      state.progress.correct += 1;
      stats.correct += 1;
      state.progress.missed = state.progress.missed.filter(id => id !== q.id);
      els.feedback.classList.add("correct");
      els.feedbackIcon.textContent = "✓";
      els.feedbackTitle.textContent = "Correct";
    } else {
      state.streak = 0;
      stats.incorrect += 1;
      if (!state.progress.missed.includes(q.id)) state.progress.missed.push(q.id);
      els.feedback.classList.add("incorrect");
      els.feedbackIcon.textContent = "×";
      els.feedbackTitle.textContent = `Not quite — ${q.choices[q.answer]}`;
    }

    state.progress.questionStats[q.id] = stats;
    state.progress.bestStreak = Math.max(state.progress.bestStreak || 0, state.bestSessionStreak);
    els.feedbackCopy.textContent = q.explanation;
    els.memoryCue.textContent = `Memory cue: ${q.memory}`;
    els.feedback.hidden = false;
    els.next.hidden = false;
    els.next.textContent = state.index === state.session.length - 1 ? "See results →" : "Next question →";
    saveProgress();
    els.next.focus({ preventScroll: true });
  }

  function nextQuestion() {
    if (!state.answered) return;
    if (state.index < state.session.length - 1) {
      state.index += 1;
      renderQuestion();
    } else {
      showResults();
    }
  }

  function showResults() {
    const percent = Math.round((state.correct / state.session.length) * 100);
    const messages = percent >= 90
      ? "Excellent diagnostic reasoning. Your pattern recognition is sharp."
      : percent >= 70
        ? "Strong work. Review the misses and run the set once more."
        : "Good first pass. Use the explanations, then try Review Missed.";
    els.resultPercent.textContent = `${percent}%`;
    els.resultRing.style.setProperty("--result-angle", `${percent * 3.6}deg`);
    els.resultMessage.textContent = messages;
    els.correctResult.textContent = `${state.correct}/${state.session.length}`;
    els.streakResult.textContent = state.bestSessionStreak;
    els.missedResult.textContent = state.progress.missed.length;
    els.progressBar.style.width = "100%";
    showView("results");
  }

  document.querySelectorAll("[data-mode]").forEach(button => {
    button.addEventListener("click", () => startSession(button.dataset.mode));
  });

  document.getElementById("next-question").addEventListener("click", nextQuestion);
  document.getElementById("exit-quiz").addEventListener("click", () => showView("home"));
  document.getElementById("return-home").addEventListener("click", () => showView("home"));
  document.getElementById("play-again").addEventListener("click", () => startSession(state.mode));
  document.getElementById("reset-progress").addEventListener("click", () => {
    if (!window.confirm("Reset all saved scores and missed questions on this device?")) return;
    state.progress = defaultProgress();
    saveProgress();
  });

  document.addEventListener("keydown", event => {
    if (!views.quiz.classList.contains("active")) return;
    if (state.answered && event.key === "Enter") {
      event.preventDefault();
      nextQuestion();
      return;
    }
    const number = Number(event.key);
    if (!state.answered && number >= 1 && number <= 4) {
      const option = els.options.querySelector(`[data-index="${number - 1}"]`);
      if (option) option.click();
    }
  });

  updateDashboard();
})();
