window.QUESTIONS = [
  {
    id: "dsm-purpose", week: 1, category: "DSM Foundations", type: "quick",
    prompt: "What is the DSM primarily used to determine?",
    choices: ["The cause of a disorder", "An individual's diagnosis", "The one required treatment", "Protective factors"],
    answer: 1,
    explanation: "The DSM provides standardized diagnostic categories and criteria. It does not independently establish etiology or prescribe one treatment.",
    memory: "DSM = diagnostic classification, not a treatment manual."
  },
  {
    id: "dsm-general", week: 1, category: "DSM Foundations", type: "quick",
    prompt: "Which statement best reflects a general feature of DSM diagnosis?",
    choices: ["Every disorder lasts at least six months", "Every disorder has a biological marker", "Comorbidity is prohibited", "Clinically significant distress, impairment, or dysfunction is central"],
    answer: 3,
    explanation: "Duration rules differ by disorder, biological markers are not universally required, and multiple diagnoses may coexist.",
    memory: "Pattern + impairment + disorder-specific criteria."
  },
  {
    id: "adhd-settings", week: 1, category: "Neurodevelopmental", type: "quick",
    prompt: "A child shows six inattentive symptoms at school but none at home or elsewhere. Which ADHD requirement is missing?",
    choices: ["Onset before age 12", "Symptoms in two or more settings", "A manic episode", "A traumatic event"],
    answer: 1,
    explanation: "Several ADHD symptoms must be present in at least two settings, such as home and school.",
    memory: "ADHD travels: look for symptoms across settings."
  },
  {
    id: "odd-severity", week: 1, category: "Disruptive Disorders", type: "case",
    prompt: "ODD symptoms occur consistently at home and at school. Which severity specifier fits best?",
    choices: ["Mild", "Moderate", "Severe", "In remission"],
    answer: 1,
    explanation: "For ODD, one setting is mild, at least two settings is moderate, and three or more settings is severe.",
    memory: "ODD severity counts settings: 1 mild, 2 moderate, 3+ severe."
  },
  {
    id: "odd-case", week: 1, category: "Disruptive Disorders", type: "case",
    prompt: "A five-year-old has frequent tantrums, is easily annoyed, refuses adult requests, deliberately annoys others, blames others, and has acted vindictively for a year at home and school. Best diagnosis?",
    choices: ["Conduct Disorder", "Oppositional Defiant Disorder, moderate", "ADHD, inattentive presentation", "Disruptive Mood Dysregulation Disorder"],
    answer: 1,
    explanation: "The vignette gives at least four ODD symptoms for more than six months, impairment, and two settings.",
    memory: "ODD = angry/irritable + defiant + vindictive pattern."
  },
  {
    id: "gad-case", week: 2, category: "Anxiety Disorders", type: "case",
    prompt: "An adult worries uncontrollably about work, bills, and family for seven months and has fatigue, irritability, poor concentration, and sleep problems. Best diagnosis?",
    choices: ["Specific Phobia", "Generalized Anxiety Disorder", "Panic Disorder", "Social Anxiety Disorder"],
    answer: 1,
    explanation: "The worry spans multiple domains, is difficult to control, lasts more than six months, and includes at least three associated symptoms.",
    memory: "GAD = many worries + hard to control + 6 months."
  },
  {
    id: "panic-attack", week: 2, category: "Anxiety Disorders", type: "quick",
    prompt: "One sudden episode includes nausea, shaking, dizziness, and shortness of breath. With no other information, what is being described?",
    choices: ["Panic attack", "Panic Disorder", "GAD", "Acute Stress Disorder"],
    answer: 0,
    explanation: "A single abrupt episode can be identified as a panic attack. Panic Disorder requires recurrent unexpected attacks plus persistent concern or behavior change.",
    memory: "Attack = event. Disorder = recurrent pattern plus aftermath."
  },
  {
    id: "panic-disorder", week: 2, category: "Anxiety Disorders", type: "case",
    prompt: "A woman has recurrent unexpected attacks with palpitations, breathlessness, dizziness, and fear of dying. For six weeks, she has feared additional attacks. Best diagnosis?",
    choices: ["Specific Phobia", "Panic Disorder", "Illness Anxiety Disorder", "Adjustment Disorder"],
    answer: 1,
    explanation: "Recurrent unexpected panic attacks followed by more than one month of concern support Panic Disorder.",
    memory: "Unexpected attacks + 1 month of worry or change."
  },
  {
    id: "social-anxiety", week: 2, category: "Anxiety Disorders", type: "case",
    prompt: "A student avoids several classes because she fears looking foolish and being judged. This has lasted eight months and is harming her education. Best diagnosis?",
    choices: ["GAD", "Social Anxiety Disorder", "Agoraphobia", "Specific Phobia"],
    answer: 1,
    explanation: "The central fear is negative evaluation in social-performance settings, with avoidance, six-month duration, and impairment.",
    memory: "Social anxiety = scrutiny and negative evaluation."
  },
  {
    id: "flying-phobia", week: 2, category: "Anxiety Disorders", type: "case",
    prompt: "A man has avoided flying for three years after a frightening landing. Flight thoughts cause intense anxiety, and avoidance prevents family travel. Best diagnosis?",
    choices: ["Panic Disorder", "Specific Phobia, situational type", "PTSD", "GAD"],
    answer: 1,
    explanation: "The fear is tied to one circumscribed situation, is persistent, causes avoidance, and interferes with family life.",
    memory: "Flying, elevators, and enclosed spaces can be situational phobias."
  },
  {
    id: "agoraphobia-count", week: 2, category: "Anxiety Disorders", type: "quick",
    prompt: "Agoraphobia requires marked fear or anxiety involving how many situation categories?",
    choices: ["One", "At least two", "At least four", "All five"],
    answer: 1,
    explanation: "The DSM pattern requires fear or anxiety about at least two of the listed agoraphobic situation categories.",
    memory: "Agoraphobia = 2+ situation categories."
  },
  {
    id: "trauma-media", week: 4, category: "Trauma & Stressors", type: "quick",
    prompt: "Which normally does not qualify as trauma exposure for ASD or PTSD?",
    choices: ["Surviving a shooting", "Witnessing a fatal crash in person", "Watching a fatal crash on ordinary television news", "Repeated work exposure to traumatic details"],
    answer: 2,
    explanation: "Electronic-media exposure normally does not qualify unless it occurs through work duties.",
    memory: "Media exposure counts only when work-related."
  },
  {
    id: "asd-duration", week: 4, category: "Trauma & Stressors", type: "duration",
    prompt: "What is the DSM duration window for Acute Stress Disorder?",
    choices: ["Less than 24 hours", "3 days to 1 month", "More than 1 month", "At least 6 months"],
    answer: 1,
    explanation: "ASD symptoms last from three days through one month after the traumatic event.",
    memory: "ASD = 3 days to 1 month."
  },
  {
    id: "asd-count", week: 4, category: "Trauma & Stressors", type: "quick",
    prompt: "How many symptoms are required for Acute Stress Disorder?",
    choices: ["Four arousal symptoms", "Five intrusion symptoms", "Nine symptoms from any of five categories", "Twelve symptoms from every category"],
    answer: 2,
    explanation: "ASD requires nine or more symptoms drawn from intrusion, negative mood, dissociation, avoidance, and arousal.",
    memory: "ASD = 9 symptoms across 5 possible categories."
  },
  {
    id: "dylan-case", week: 4, category: "Trauma & Stressors", type: "case",
    prompt: "Two weeks after a rollover crash, a teen has nine trauma symptoms, driving avoidance, sleep and concentration problems, and academic impairment. Best diagnosis?",
    choices: ["PTSD", "Acute Stress Disorder", "Adjustment Disorder", "Specific Phobia"],
    answer: 1,
    explanation: "The event qualifies as trauma, the symptom count reaches nine, and the two-week duration falls within the ASD window.",
    memory: "Under one month after trauma: test ASD before PTSD."
  },
  {
    id: "ptsd-duration", week: 4, category: "Trauma & Stressors", type: "duration",
    prompt: "PTSD requires the disturbance to last:",
    choices: ["More than 3 days", "More than 2 weeks", "More than 1 month", "More than 6 months"],
    answer: 2,
    explanation: "PTSD requires symptoms to persist for longer than one month.",
    memory: "PTSD crosses the one-month line."
  },
  {
    id: "adjustment-onset", week: 4, category: "Trauma & Stressors", type: "duration",
    prompt: "Adjustment Disorder symptoms begin within what period after an identifiable stressor?",
    choices: ["24 hours", "1 month", "3 months", "1 year"],
    answer: 2,
    explanation: "The emotional or behavioral symptoms begin within three months of the stressor.",
    memory: "Adjustment: onset within 3 months."
  },
  {
    id: "child-adjustment", week: 4, category: "Trauma & Stressors", type: "case",
    prompt: "A child becomes clingy and anxious two weeks after a parent moves out. There is no severe-neglect history. Best diagnosis?",
    choices: ["Reactive Attachment Disorder", "Adjustment Disorder with anxiety", "Conduct Disorder", "PTSD"],
    answer: 1,
    explanation: "The symptoms follow an identifiable stressor and do not show the severe neglect required for Reactive Attachment Disorder.",
    memory: "Recent stressor without qualifying trauma can point to Adjustment Disorder."
  },
  {
    id: "somatic-medical", week: 5, category: "Somatic Disorders", type: "quick",
    prompt: "Which statement about Somatic Symptom Disorder is correct?",
    choices: ["It requires no medical condition", "It requires intentional deception", "A genuine medical condition may coexist with disproportionate thoughts or behaviors", "It requires neurological incompatibility"],
    answer: 2,
    explanation: "The diagnosis focuses on excessive symptom-related thoughts, feelings, and behaviors. A medical explanation may be present.",
    memory: "Real symptom and disproportionate response can coexist."
  },
  {
    id: "illness-anxiety", week: 5, category: "Somatic Disorders", type: "case",
    prompt: "A person has no significant symptoms but has feared cancer for over a year and checks for lumps several times daily. Best diagnosis?",
    choices: ["Somatic Symptom Disorder", "Illness Anxiety Disorder", "Factitious Disorder", "Conversion Disorder"],
    answer: 1,
    explanation: "Illness preoccupation is prominent, physical symptoms are absent or mild, checking is excessive, and duration exceeds six months.",
    memory: "Illness anxiety = disease fear with little or no symptom burden."
  },
  {
    id: "illness-duration", week: 5, category: "Somatic Disorders", type: "duration",
    prompt: "How long must illness preoccupation persist for Illness Anxiety Disorder?",
    choices: ["2 weeks", "1 month", "6 months", "2 years"],
    answer: 2,
    explanation: "The illness preoccupation must persist for at least six months, although the feared illness may change.",
    memory: "Illness anxiety = 6 months."
  },
  {
    id: "functional-neuro", week: 5, category: "Somatic Disorders", type: "quick",
    prompt: "Which feature is central to Functional Neurological Symptom Disorder?",
    choices: ["External financial gain", "Clinical evidence of incompatibility with recognized neurological disease", "No physical symptom", "A six-month fear of illness"],
    answer: 1,
    explanation: "The diagnosis requires positive clinical evidence that the altered motor or sensory symptom is incompatible with recognized neurological or medical conditions.",
    memory: "Conversion disorder needs positive incompatibility—not merely a negative test."
  },
  {
    id: "malingering", week: 5, category: "Somatic Disorders", type: "quick",
    prompt: "Intentional symptom production to obtain money or avoid legal consequences is best described as:",
    choices: ["Factitious Disorder", "Malingering", "Illness Anxiety Disorder", "Somatic Symptom Disorder"],
    answer: 1,
    explanation: "An obvious external incentive distinguishes malingering from Factitious Disorder's sick-role motivation.",
    memory: "External reward = malingering. Sick role = factitious."
  },
  {
    id: "mental-compulsion", week: 6, category: "OCD-Related", type: "quick",
    prompt: "Which is an example of a mental compulsion?",
    choices: ["An unwanted intrusive image", "Silently repeating a phrase to neutralize anxiety", "Feeling detached from the body", "Forgetting autobiographical information"],
    answer: 1,
    explanation: "Compulsions may be observable behaviors or internal mental acts such as counting, praying, or repeating words.",
    memory: "Compulsions can be invisible."
  },
  {
    id: "ocd-time", week: 6, category: "OCD-Related", type: "case",
    prompt: "OCD symptoms occupy only 40 minutes daily but repeatedly prevent essential activities. Does the time automatically rule out OCD?",
    choices: ["Yes, more than one hour is always required", "Yes, unless psychosis is present", "No, significant distress or impairment can satisfy the criterion", "No, because time never matters"],
    answer: 2,
    explanation: "The criterion is time-consuming—often more than one hour—or causes clinically significant distress or impairment.",
    memory: "OCD: more than 1 hour OR distress/impairment."
  },
  {
    id: "ocd-insight", week: 6, category: "OCD-Related", type: "case",
    prompt: "A client says, “I know my compulsions are irrational, but I cannot stop.” Which specifier fits?",
    choices: ["With good or fair insight", "With poor insight", "With absent insight/delusional beliefs", "Tic-related"],
    answer: 0,
    explanation: "The client recognizes that the OCD-related belief or behavior is probably or definitely unrealistic.",
    memory: "Recognition of irrationality = good or fair insight."
  },
  {
    id: "bdd-case", week: 6, category: "OCD-Related", type: "case",
    prompt: "A person is preoccupied with a slight skin flaw, checks mirrors repeatedly, compares appearance with others, and uses heavy makeup to conceal it. Best diagnosis?",
    choices: ["OCD", "Body Dysmorphic Disorder", "GAD", "Illness Anxiety Disorder"],
    answer: 1,
    explanation: "The central concern is a perceived appearance defect, accompanied by repetitive checking, comparing, and concealing.",
    memory: "BDD = perceived appearance flaw + repetitive response."
  },
  {
    id: "depersonalization", week: 6, category: "Dissociative Disorders", type: "quick",
    prompt: "“I feel as though I am observing myself from outside, but I know I am still here” describes:",
    choices: ["Derealization", "Depersonalization", "Dissociative Amnesia", "Delusion"],
    answer: 1,
    explanation: "Depersonalization involves detachment from oneself. The recognition that the experience is not literal shows intact reality testing.",
    memory: "Depersonalization = self."
  },
  {
    id: "derealization", week: 6, category: "Dissociative Disorders", type: "quick",
    prompt: "“The room feels dreamlike, but I know it is real” describes:",
    choices: ["Derealization with intact reality testing", "Depersonalization with psychosis", "Dissociative Amnesia", "Mania"],
    answer: 0,
    explanation: "Derealization concerns the surroundings. Knowing the room is real demonstrates preserved reality testing.",
    memory: "Derealization = surroundings."
  },
  {
    id: "mde-count", week: 7, category: "Depressive Disorders", type: "quick",
    prompt: "A major depressive episode requires at least how many symptoms during the same two-week period?",
    choices: ["Three", "Four", "Five", "Nine"],
    answer: 2,
    explanation: "At least five symptoms are required, and one must be depressed mood or diminished interest/pleasure.",
    memory: "MDE = 5 symptoms, 2 weeks, mood or interest required."
  },
  {
    id: "mde-duration", week: 7, category: "Depressive Disorders", type: "duration",
    prompt: "What is the minimum duration of the symptom period for a major depressive episode?",
    choices: ["4 days", "1 week", "2 weeks", "2 months"],
    answer: 2,
    explanation: "The qualifying symptoms must occur during the same two-week period.",
    memory: "Major depression = 2 weeks."
  },
  {
    id: "pdd-case", week: 7, category: "Depressive Disorders", type: "case",
    prompt: "An adult has depressed mood, insomnia, low self-esteem, poor concentration, and hopelessness for three years without a long symptom-free interval. Best diagnosis?",
    choices: ["Adjustment Disorder", "Persistent Depressive Disorder", "Bipolar I Disorder", "Panic Disorder"],
    answer: 1,
    explanation: "Chronic depressed mood for at least two years plus at least two associated symptoms supports Persistent Depressive Disorder.",
    memory: "PDD = depressed more days than not for 2 years in adults."
  },
  {
    id: "pdd-duration", week: 7, category: "Depressive Disorders", type: "duration",
    prompt: "Persistent Depressive Disorder requires depressed mood for at least how long in adults?",
    choices: ["2 weeks", "6 months", "1 year", "2 years"],
    answer: 3,
    explanation: "Adults require a chronic depressed-mood pattern lasting at least two years.",
    memory: "Adult PDD = 2 years."
  },
  {
    id: "bipolar-one", week: 7, category: "Bipolar Disorders", type: "quick",
    prompt: "Which episode alone can establish Bipolar I Disorder?",
    choices: ["Major depressive episode", "Hypomanic episode", "Manic episode", "Panic attack"],
    answer: 2,
    explanation: "One manic episode is sufficient for Bipolar I Disorder. A major depressive episode is common but not required.",
    memory: "Bipolar I = mania."
  },
  {
    id: "mania-duration", week: 7, category: "Bipolar Disorders", type: "duration",
    prompt: "A manic episode normally lasts at least:",
    choices: ["4 days", "1 week, or any duration if hospitalization is needed", "2 weeks", "6 months"],
    answer: 1,
    explanation: "Mania normally lasts at least one week, but any duration qualifies when hospitalization is necessary.",
    memory: "Mania = 1 week or hospitalization."
  },
  {
    id: "hypomania-duration", week: 7, category: "Bipolar Disorders", type: "duration",
    prompt: "A hypomanic episode lasts at least:",
    choices: ["24 hours", "4 consecutive days", "1 week", "2 weeks"],
    answer: 1,
    explanation: "Hypomania requires at least four consecutive days of elevated, expansive, or irritable mood plus increased energy/activity.",
    memory: "Hypomania = 4 days."
  },
  {
    id: "bipolar-two", week: 7, category: "Bipolar Disorders", type: "case",
    prompt: "A person has experienced a hypomanic episode and a major depressive episode but has never experienced mania. Best diagnosis?",
    choices: ["Bipolar I Disorder", "Bipolar II Disorder", "Persistent Depressive Disorder", "Cyclothymic Disorder"],
    answer: 1,
    explanation: "Bipolar II requires at least one hypomanic episode and one major depressive episode, with no history of mania.",
    memory: "Bipolar II = hypomania + major depression, never mania."
  }
];
