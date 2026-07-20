/* ============================================================
   Mu Alpha Theta Trainer
   Static competition-math quiz. No backend, no dependencies.
   ============================================================ */

// --- Question Database ---
// `answer` is the index of the correct option in `options`.
const questionsDatabase = {
  "Algebra 1": [
    {
      question: "If 2x + 3y = 12 and 4x − y = 10, what is the value of x + y?",
      options: ["4", "5", "6", "7"],
      answer: 1,
      explanation: "From the second equation, y = 4x − 10. Substituting into the first: 2x + 3(4x − 10) = 12 → 14x = 42 → x = 3, so y = 2. Therefore x + y = 5."
    },
    {
      question: "Simplify: (2x³y²)³ / (4x⁴y⁵)",
      options: ["2x⁵y", "2x²y", "4x⁵y", "x⁵y"],
      answer: 0,
      explanation: "Cube the numerator: 2³(x³)³(y²)³ = 8x⁹y⁶. Divide by the denominator: (8/4)·x^(9−4)·y^(6−5) = 2x⁵y."
    },
    {
      question: "Find the sum of the roots of 3x² − 12x + 7 = 0.",
      options: ["4", "−4", "7/3", "−7/3"],
      answer: 0,
      explanation: "By Vieta's formulas, the sum of the roots of ax² + bx + c = 0 is −b/a. Here −(−12)/3 = 4."
    },
    {
      question: "What is the slope of any line perpendicular to 3x + 4y = 8?",
      options: ["4/3", "−4/3", "3/4", "−3/4"],
      answer: 0,
      explanation: "Rewrite as y = −(3/4)x + 2, so the slope is −3/4. A perpendicular line has the negative reciprocal: 4/3."
    },
    {
      question: "If f(x) = 2x − 5, what is f(f(3))?",
      options: ["−3", "1", "3", "−5"],
      answer: 0,
      explanation: "f(3) = 2(3) − 5 = 1, then f(1) = 2(1) − 5 = −3."
    }
  ],
  "Geometry": [
    {
      question: "A right triangle has legs of length 5 and 12. What is the radius of its inscribed circle?",
      options: ["2", "2.5", "3", "4"],
      answer: 0,
      explanation: "The hypotenuse is √(5² + 12²) = 13. Area = ½·5·12 = 30 and semiperimeter s = (5+12+13)/2 = 15. The inradius r = A/s = 30/15 = 2."
    },
    {
      question: "Two similar solid cones have surface areas in the ratio 4 : 9. What is the ratio of their volumes?",
      options: ["8 : 27", "2 : 3", "16 : 81", "4 : 9"],
      answer: 0,
      explanation: "The linear scale factor is √4 : √9 = 2 : 3. Volumes scale as the cube: 2³ : 3³ = 8 : 27."
    },
    {
      question: "In △ABC, AB = 8, AC = 12, and BC = 10. If AD bisects ∠A and meets BC at D, find BD.",
      options: ["4", "4.5", "5", "10/3"],
      answer: 0,
      explanation: "By the Angle Bisector Theorem, BD/DC = AB/AC = 8/12 = 2/3. Since BD + DC = 10, BD = 10 · 2/5 = 4."
    },
    {
      question: "What is the measure of each interior angle of a regular hexagon?",
      options: ["120°", "108°", "135°", "144°"],
      answer: 0,
      explanation: "Each interior angle of a regular n-gon is (n − 2)·180° / n. For n = 6: 4·180°/6 = 120°."
    },
    {
      question: "A circle has area 36π. What is its circumference?",
      options: ["12π", "6π", "18π", "36π"],
      answer: 0,
      explanation: "Area πr² = 36π gives r = 6. Circumference = 2πr = 12π."
    }
  ],
  "Algebra 2": [
    {
      question: "If log₂(x) + log₂(x − 3) = 2, find x.",
      options: ["4", "−1", "4 and −1", "No solution"],
      answer: 0,
      explanation: "Combine: log₂(x(x − 3)) = 2 → x² − 3x = 4 → (x − 4)(x + 1) = 0. x = −1 is extraneous (log of a negative), so x = 4."
    },
    {
      question: "What is the modulus of the complex number 3 − 4i?",
      options: ["5", "7", "1", "25"],
      answer: 0,
      explanation: "|a + bi| = √(a² + b²) = √(3² + (−4)²) = √25 = 5."
    },
    {
      question: "Find the center of the circle x² + y² − 6x + 8y + 9 = 0.",
      options: ["(3, −4)", "(−3, 4)", "(6, −8)", "(−6, 8)"],
      answer: 0,
      explanation: "Complete the square: (x − 3)² + (y + 4)² = 16. The center is (3, −4)."
    },
    {
      question: "What is the sum of the infinite geometric series 8 + 4 + 2 + 1 + …?",
      options: ["16", "12", "15", "∞"],
      answer: 0,
      explanation: "With first term a = 8 and ratio r = ½, the sum is a/(1 − r) = 8/(1 − ½) = 16."
    },
    {
      question: "How many real solutions does x² + 2x + 5 = 0 have?",
      options: ["0", "1", "2", "Infinitely many"],
      answer: 0,
      explanation: "The discriminant is b² − 4ac = 4 − 20 = −16 < 0, so there are no real solutions."
    }
  ],
  "Precalculus": [
    {
      question: "What is the exact value of sin(75°)?",
      options: ["(√6 + √2)/4", "(√6 − √2)/4", "√3/2", "1/2"],
      answer: 0,
      explanation: "sin(45° + 30°) = sin45°cos30° + cos45°sin30° = (√2/2)(√3/2) + (√2/2)(1/2) = (√6 + √2)/4."
    },
    {
      question: "Convert the polar coordinates (4, 5π/6) to rectangular form.",
      options: ["(−2√3, 2)", "(2, −2√3)", "(−2, 2√3)", "(2√3, −2)"],
      answer: 0,
      explanation: "x = 4cos(5π/6) = 4(−√3/2) = −2√3; y = 4sin(5π/6) = 4(1/2) = 2. The point is (−2√3, 2)."
    },
    {
      question: "Evaluate the dot product of u = ⟨3, −2, 5⟩ and v = ⟨1, 4, −2⟩.",
      options: ["−15", "−5", "5", "15"],
      answer: 0,
      explanation: "(3)(1) + (−2)(4) + (5)(−2) = 3 − 8 − 10 = −15."
    },
    {
      question: "What is the period of y = 3 sin(2x)?",
      options: ["π", "2π", "π/2", "4π"],
      answer: 0,
      explanation: "For sin(bx), the period is 2π/|b|. Here b = 2, so the period is 2π/2 = π."
    },
    {
      question: "Evaluate cos(π/3).",
      options: ["1/2", "√3/2", "√2/2", "1"],
      answer: 0,
      explanation: "cos(π/3) = cos(60°) = 1/2."
    }
  ],
  "Calculus": [
    {
      question: "Evaluate the limit: lim(x→0) [ sin(3x) / (5x) ].",
      options: ["3/5", "5/3", "0", "Undefined"],
      answer: 0,
      explanation: "Rewrite as (3/5)·[sin(3x)/(3x)]. Since sin(u)/u → 1, the limit is 3/5."
    },
    {
      question: "Find the derivative of f(x) = x²·eˣ.",
      options: ["x·eˣ·(x + 2)", "2x·eˣ", "x²·eˣ", "eˣ·(x² + 1)"],
      answer: 0,
      explanation: "Product rule: f′(x) = 2x·eˣ + x²·eˣ = x·eˣ(x + 2)."
    },
    {
      question: "Evaluate ∫₁³ 3x² dx.",
      options: ["26", "27", "28", "8"],
      answer: 0,
      explanation: "The antiderivative of 3x² is x³. By the Fundamental Theorem: 3³ − 1³ = 27 − 1 = 26."
    },
    {
      question: "What is the derivative of ln(x²)?",
      options: ["2/x", "1/x²", "2x", "1/(2x)"],
      answer: 0,
      explanation: "d/dx ln(x²) = (1/x²)·2x = 2/x. (Equivalently, ln(x²) = 2ln x, whose derivative is 2/x.)"
    },
    {
      question: "Find the slope of the tangent line to y = x³ at x = 2.",
      options: ["12", "8", "6", "3"],
      answer: 0,
      explanation: "y′ = 3x². At x = 2, y′ = 3(4) = 12."
    }
  ],
  "Statistics": [
    {
      question: "A fair six-sided die is rolled twice. What is the probability the sum is 8?",
      options: ["5/36", "1/6", "1/9", "7/36"],
      answer: 0,
      explanation: "Favorable rolls: (2,6), (3,5), (4,4), (5,3), (6,2) — 5 out of 36 outcomes, so 5/36."
    },
    {
      question: "In a normal distribution, roughly what percentage of data falls within two standard deviations of the mean?",
      options: ["95%", "68%", "99.7%", "50%"],
      answer: 0,
      explanation: "By the empirical (68–95–99.7) rule, about 95% of data lies within two standard deviations of the mean."
    },
    {
      question: "How many distinct arrangements are there of the letters in 'MATHEMATICS'?",
      options: ["11! / (2!·2!·2!)", "11!", "11! / 2!", "11! / 6!"],
      answer: 0,
      explanation: "There are 11 letters, with M, A, and T each repeated twice. Arrangements = 11! / (2!·2!·2!)."
    },
    {
      question: "What is the median of the data set 3, 7, 8, 5, 12, 14, 21?",
      options: ["8", "7", "10", "12"],
      answer: 0,
      explanation: "Sorted: 3, 5, 7, 8, 12, 14, 21. The middle (4th) value is 8."
    },
    {
      question: "In how many ways can 3 books be chosen from 7 (order doesn't matter)?",
      options: ["35", "21", "210", "42"],
      answer: 0,
      explanation: "This is a combination: C(7, 3) = 7! / (3!·4!) = 35."
    }
  ]
};

// --- App State ---
let currentDivision = "";
let timerEnabled = false;
let currentQuestions = [];   // shuffled copy for this attempt
let currentOptions = [];     // shuffled options for the active question
let questionIndex = 0;
let score = 0;
let selectedOptionIndex = null;
let answered = false;
let missed = [];             // review log of wrong answers
let timeRemaining = 120;
let timerInterval = null;
const TIME_LIMIT = 120;

// --- DOM Elements ---
const views = {
  home:    document.getElementById("home-sec"),
  setup:   document.getElementById("setup-sec"),
  quiz:    document.getElementById("quiz-sec"),
  results: document.getElementById("results-sec")
};

const el = (id) => document.getElementById(id);

// --- Utilities ---
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Best scores persist locally on the deployed site (GitHub Pages).
function getBestScore(division) {
  try {
    const raw = localStorage.getItem("mat-best");
    const data = raw ? JSON.parse(raw) : {};
    return data[division] ?? null;
  } catch { return null; }
}
function saveBestScore(division, pct) {
  try {
    const raw = localStorage.getItem("mat-best");
    const data = raw ? JSON.parse(raw) : {};
    if (data[division] == null || pct > data[division]) {
      data[division] = pct;
      localStorage.setItem("mat-best", JSON.stringify(data));
      return true; // new record
    }
  } catch { /* storage unavailable — fine, feature is optional */ }
  return false;
}

// --- Navigation ---
function navigateTo(viewName) {
  Object.values(views).forEach(v => { v.classList.add("hidden"); v.classList.remove("active"); });
  const target = views[viewName];
  target.classList.remove("hidden");
  requestAnimationFrame(() => target.classList.add("active"));
}

// --- Event Listeners ---
el("btn-to-setup").addEventListener("click", () => navigateTo("setup"));
el("btn-home").addEventListener("click", () => navigateTo("home"));
el("btn-retry").addEventListener("click", () => navigateTo("setup"));

el("btn-start-quiz").addEventListener("click", () => {
  currentDivision = el("division-select").value;
  timerEnabled = el("timer-toggle").checked;
  startQuiz();
});

el("btn-submit").addEventListener("click", handleSubmission);

// Keyboard: 1–4 selects an option, Enter submits / advances.
document.addEventListener("keydown", (e) => {
  if (!views.quiz.classList.contains("active")) return;
  if (["1", "2", "3", "4"].includes(e.key) && !answered) {
    const idx = Number(e.key) - 1;
    const btns = document.querySelectorAll(".option-btn");
    if (btns[idx]) selectOption(idx, btns[idx]);
  } else if (e.key === "Enter") {
    const submit = el("btn-submit");
    if (!submit.disabled) { e.preventDefault(); handleSubmission(); }
  }
});

// --- Core Logic ---
function startQuiz() {
  currentQuestions = shuffle(questionsDatabase[currentDivision]);
  questionIndex = 0;
  score = 0;
  missed = [];

  el("quiz-division-label").textContent = currentDivision;

  const timerEl = el("quiz-timer");
  timerEl.classList.toggle("hidden", !timerEnabled);

  buildProgress();
  navigateTo("quiz");
  loadQuestion();
}

function buildProgress() {
  const track = el("progress-track");
  track.innerHTML = "";
  currentQuestions.forEach(() => {
    const dot = document.createElement("span");
    dot.className = "dot";
    track.appendChild(dot);
  });
}

function updateProgress(state) {
  const dots = document.querySelectorAll("#progress-track .dot");
  dots.forEach((dot, i) => {
    dot.classList.remove("current", "correct", "wrong");
    if (i < questionIndex) dot.classList.add(state[i]);   // 'correct' | 'wrong'
    else if (i === questionIndex) dot.classList.add("current");
  });
}

const progressState = [];

function loadQuestion() {
  selectedOptionIndex = null;
  answered = false;

  const submit = el("btn-submit");
  submit.textContent = "Check answer";
  submit.disabled = true;

  el("feedback-container").classList.add("hidden");
  el("feedback-container").classList.remove("success", "error");

  const q = currentQuestions[questionIndex];
  el("question-number").textContent = `Question ${questionIndex + 1} of ${currentQuestions.length}`;
  el("question-text").textContent = q.question;

  // Shuffle answer choices, remembering which is correct.
  const correctText = q.options[q.answer];
  currentOptions = shuffle(q.options.map(text => ({ text, correct: text === correctText })));

  const container = el("options-container");
  container.innerHTML = "";
  const letters = ["A", "B", "C", "D", "E", "F"];
  currentOptions.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt.text;
    btn.setAttribute("data-letter", letters[index]);
    btn.setAttribute("aria-label", `Option ${letters[index]}: ${opt.text}`);
    btn.addEventListener("click", () => selectOption(index, btn));
    container.appendChild(btn);
  });

  updateProgress(progressState);

  if (timerEnabled) startTimer();
}

function selectOption(index, btnElement) {
  if (answered) return;
  selectedOptionIndex = index;
  el("btn-submit").disabled = false;
  document.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
  btnElement.classList.add("selected");
}

function handleSubmission() {
  if (!answered) {
    checkAnswer();
    const last = questionIndex === currentQuestions.length - 1;
    el("btn-submit").textContent = last ? "See results" : "Next question";
  } else {
    questionIndex++;
    if (questionIndex < currentQuestions.length) loadQuestion();
    else showResults();
  }
}

function checkAnswer() {
  clearInterval(timerInterval);
  answered = true;

  const q = currentQuestions[questionIndex];
  const correctText = q.options[q.answer];
  const optionBtns = document.querySelectorAll(".option-btn");
  optionBtns.forEach(b => (b.disabled = true));

  const chosen = selectedOptionIndex === null ? null : currentOptions[selectedOptionIndex];
  const isCorrect = chosen !== null && chosen.correct;

  const box = el("feedback-container");
  box.classList.remove("hidden");
  el("feedback-explanation").textContent = q.explanation;
  el("feedback-correct-ans").innerHTML = `<strong>Correct answer:</strong> ${correctText}`;

  if (isCorrect) {
    score++;
    el("feedback-title").textContent = "Correct";
    box.classList.add("success");
    optionBtns[selectedOptionIndex].classList.add("correct");
    progressState[questionIndex] = "correct";
  } else {
    el("feedback-title").textContent = selectedOptionIndex === null ? "Time's up" : "Not quite";
    box.classList.add("error");
    if (selectedOptionIndex !== null) optionBtns[selectedOptionIndex].classList.add("incorrect");
    // highlight the correct choice
    currentOptions.forEach((o, i) => { if (o.correct) optionBtns[i].classList.add("correct"); });
    progressState[questionIndex] = "wrong";
    missed.push({
      question: q.question,
      correct: correctText,
      chosen: chosen ? chosen.text : "No answer"
    });
  }

  updateProgress(progressState);
}

// --- Timer ---
function startTimer() {
  clearInterval(timerInterval);
  timeRemaining = TIME_LIMIT;
  updateTimerUI();
  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimerUI();
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      selectedOptionIndex = null;
      checkAnswer();
      const submit = el("btn-submit");
      submit.disabled = false;
      submit.textContent = questionIndex === currentQuestions.length - 1 ? "See results" : "Next question";
    }
  }, 1000);
}

function updateTimerUI() {
  const timerEl = el("quiz-timer");
  const m = Math.floor(timeRemaining / 60);
  const s = timeRemaining % 60;
  timerEl.textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  timerEl.classList.toggle("danger", timeRemaining <= 30);
}

// --- Results ---
function showResults() {
  navigateTo("results");
  const total = currentQuestions.length;
  const pct = Math.round((score / total) * 100);

  el("final-score").textContent = `${score} / ${total}`;
  el("final-accuracy").textContent = `${pct}% accuracy`;

  const isRecord = saveBestScore(currentDivision, pct);
  const best = getBestScore(currentDivision);
  const bestNote = el("best-note");
  if (isRecord) {
    bestNote.innerHTML = `<strong>New personal best</strong> for ${currentDivision}!`;
  } else if (best != null) {
    bestNote.innerHTML = `Your best in ${currentDivision}: <strong>${best}%</strong>`;
  } else {
    bestNote.textContent = "";
  }

  renderReview();
}

function renderReview() {
  const wrap = el("review");
  wrap.innerHTML = "";
  if (missed.length === 0) {
    wrap.innerHTML = `<p class="review-perfect">Clean sweep — every question correct.</p>`;
    return;
  }
  const heading = document.createElement("h3");
  heading.textContent = `Review — ${missed.length} to revisit`;
  wrap.appendChild(heading);

  missed.forEach(m => {
    const item = document.createElement("div");
    item.className = "review-item";
    const q = document.createElement("p");
    q.className = "rq";
    q.textContent = m.question;
    const a = document.createElement("p");
    a.className = "ra";
    a.innerHTML = `You chose <span class="bad">${m.chosen}</span> · Correct: <span class="good">${m.correct}</span>`;
    item.appendChild(q);
    item.appendChild(a);
    wrap.appendChild(item);
  });
}
