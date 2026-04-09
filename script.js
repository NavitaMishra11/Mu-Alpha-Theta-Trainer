// --- Question Database ---
const questionsDatabase = {
    "Algebra 1": [
        {
            question: "If 2x + 3y = 12 and 4x - y = 10, what is the value of x + y?",
            options: ["4", "5", "6", "7"],
            answer: 1, // index of "5"
            explanation: "Multiply the second equation by 3 to get 12x - 3y = 30. Adding this to the first equation gives 14x = 42, so x = 3. Substituting x back into 4(3) - y = 10 gives y = 2. Therefore, x + y = 3 + 2 = 5."
        },
        {
            question: "Simplify the expression: (2x³y²)³ / (4x⁴y⁵)",
            options: ["2x⁵y", "2x²y", "4x⁵y", "x⁵y"],
            answer: 0,
            explanation: "First, apply the power rule to the numerator: 2³(x³)³(y²)³ = 8x⁹y⁶. Then divide by the denominator: (8/4) * x^(9-4) * y^(6-5) = 2x⁵y¹ = 2x⁵y."
        },
        {
            question: "Find the sum of the roots of the quadratic equation: 3x² - 12x + 7 = 0",
            options: ["4", "-4", "7/3", "-7/3"],
            answer: 0,
            explanation: "By Vieta's formulas, the sum of the roots of ax² + bx + c = 0 is equal to -b/a. Here, a = 3 and b = -12. So, sum = -(-12) / 3 = 12 / 3 = 4."
        }
    ],
    "Geometry": [
        {
            question: "A right triangle has legs of length 5 and 12. What is the radius of its inscribed circle?",
            options: ["2", "2.5", "3", "4"],
            answer: 0,
            explanation: "The hypotenuse is √(5² + 12²) = 13. The area (A) is (1/2)bh = (1/2)(5)(12) = 30. The semiperimeter (s) is (5+12+13)/2 = 15. The inradius (r) = A/s = 30/15 = 2."
        },
        {
            question: "Two similar solid cones have surface areas in the ratio 4:9. What is the ratio of their volumes?",
            options: ["8:27", "2:3", "16:81", "4:9"],
            answer: 0,
            explanation: "If the ratio of surface areas is 4:9, the ratio of their linear dimensions (scale factor) is √4:√9 = 2:3. The ratio of their volumes is the cube of the scale factor: 2³:3³ = 8:27."
        },
        {
            question: "In ∆ABC, AB = 8, BC = 10, and AC = 12. If AD bisects ∠A and intersects BC at D, find the length of BD.",
            options: ["4", "4.5", "5", "10/3"],
            answer: 3,
            explanation: "By the Angle Bisector Theorem, AB/AC = BD/DC. Let BD = x, then DC = 10 - x. So, 8/12 = x/(10 - x). Cross-multiplying: 80 - 8x = 12x => 20x = 80 => x = 4. Wait, AB=8, AC=12 -> 8/12 = 2/3. x/(10-x) = 2/3 -> 3x = 20 - 2x -> 5x = 20 -> x = 4. My options included '4'. (Correct option is '4', index 0)."
        }
    ],
    "Algebra 2": [
        {
            question: "If log₂(x) + log₂(x - 3) = 2, find the value of x.",
            options: ["4", "-1", "4 and -1", "No solution"],
            answer: 0,
            explanation: "Combine the logarithms: log₂(x(x - 3)) = 2. Convert to exponential form: x(x - 3) = 2² = 4. x² - 3x - 4 = 0, which factors to (x-4)(x+1)=0. x=4 or x=-1. Since log of a negative is undefined, x=-1 is extraneous. The only solution is x=4."
        },
        {
            question: "What is the absolute value (modulus) of the complex number 3 - 4i?",
            options: ["5", "7", "1", "25"],
            answer: 0,
            explanation: "The modulus of a complex number a + bi is √(a² + b²). For 3 - 4i, this is √(3² + (-4)²) = √(9 + 16) = √25 = 5."
        },
        {
            question: "Find the center of the circle given by the equation: x² + y² - 6x + 8y + 9 = 0",
            options: ["(3, -4)", "(-3, 4)", "(6, -8)", "(-6, 8)"],
            answer: 0,
            explanation: "Complete the square for x and y: (x² - 6x + 9) + (y² + 8y + 16) = -9 + 9 + 16. This simplifies to (x - 3)² + (y + 4)² = 16. The center is (h, k) = (3, -4)."
        }
    ],
    "Precalculus": [
        {
            question: "What is the exact value of sin(75°)?",
            options: ["(√6 + √2)/4", "(√6 - √2)/4", "√3/2", "1/2"],
            answer: 0,
            explanation: "Use the angle addition formula: sin(45° + 30°) = sin(45°)cos(30°) + cos(45°)sin(30°). This equals (√2/2)(√3/2) + (√2/2)(1/2) = √6/4 + √2/4 = (√6 + √2)/4."
        },
        {
            question: "Convert the polar coordinates (4, 5π/6) to rectangular (Cartesian) coordinates.",
            options: ["(-2√3, 2)", "(2, -2√3)", "(-2, 2√3)", "(2√3, -2)"],
            answer: 0,
            explanation: "x = r*cos(θ) = 4*cos(5π/6) = 4*(-√3/2) = -2√3. y = r*sin(θ) = 4*sin(5π/6) = 4*(1/2) = 2. The point is (-2√3, 2)."
        },
        {
            question: "Evaluate the dot product of vectors u = <3, -2, 5> and v = <1, 4, -2>.",
            options: ["-15", "-5", "5", "15"],
            answer: 0,
            explanation: "The dot product is the sum of the products of the corresponding components: (3)(1) + (-2)(4) + (5)(-2) = 3 - 8 - 10 = -15."
        }
    ],
    "Calculus": [
        {
            question: "Evaluate the limit: lim(x→0) [sin(3x) / (5x)]",
            options: ["3/5", "5/3", "0", "Undefined"],
            answer: 0,
            explanation: "Using the fact that lim(u→0) [sin(u)/u] = 1, we can rewrite the expression as (3/5) * [sin(3x)/(3x)]. As x approaches 0, sin(3x)/(3x) approaches 1, leaving 3/5 * 1 = 3/5."
        },
        {
            question: "Find the derivative of f(x) = x² * e^x",
            options: ["x*e^x * (x + 2)", "2x * e^x", "x² * e^x", "e^x * (x² + 1)"],
            answer: 0,
            explanation: "Apply the product rule: d/dx [u*v] = u'*v + u*v'. Here, u = x², v = e^x. f'(x) = 2x*e^x + x²*e^x. Factoring out x*e^x yields x*e^x * (2 + x)."
        },
        {
            question: "Evaluate the definite integral of f(x) = 3x² from x = 1 to x = 3.",
            options: ["26", "27", "28", "8"],
            answer: 0,
            explanation: "The antiderivative of 3x² is x³. Evaluating from 1 to 3 using the Fundamental Theorem of Calculus: (3³) - (1³) = 27 - 1 = 26."
        }
    ],
    "Statistics": [
        {
            question: "If a fair six-sided die is rolled twice, what is the probability that the sum of the rolls is 8?",
            options: ["5/36", "1/6", "1/9", "7/36"],
            answer: 0,
            explanation: "The combinations that sum to 8 are (2,6), (3,5), (4,4), (5,3), and (6,2). That is 5 successful outcomes out of a total of 6 * 6 = 36 possible outcomes. Probability = 5/36."
        },
        {
            question: "In a normal distribution, approximately what percentage of data falls within two standard deviations of the mean?",
            options: ["95%", "68%", "99.7%", "50%"],
            answer: 0,
            explanation: "According to the Empirical Rule (68-95-99.7 rule) for a normal distribution, roughly 68% of data lies within 1 standard deviation, 95% within 2 standard deviations, and 99.7% within 3 standard deviations."
        },
        {
            question: "How many distinct ways can the letters of the word 'MATHEMATICS' be arranged?",
            options: ["11! / (2!2!2!)", "11!", "11! / 2!", "11! / 6!"],
            answer: 0,
            explanation: "There are 11 letters in total. The letters M, A, and T each repeat 2 times. The formula for permutations with indistinguishable items is n! / (p!q!r!...). Here, it is 11! / (2! * 2! * 2!)."
        }
    ]
};

// Fixed Geometry Question 3 answer map in JS layer (Option 0 is '4', which is correct)
questionsDatabase["Geometry"][2].answer = 0; 

// --- App State ---
let currentDivision = "";
let timerEnabled = false;
let currentQuestions = [];
let questionIndex = 0;
let score = 0;
let selectedOptionIndex = null;
let timeRemaining = 120; // 2 minutes in seconds
let timerInterval;

// --- DOM Elements ---
const views = {
    home: document.getElementById("home-sec"),
    setup: document.getElementById("setup-sec"),
    quiz: document.getElementById("quiz-sec"),
    results: document.getElementById("results-sec")
};

// Navigation
function navigateTo(viewName) {
    Object.values(views).forEach(view => view.classList.add("hidden"));
    Object.values(views).forEach(view => view.classList.remove("active"));
    views[viewName].classList.remove("hidden");
    // Small delay to trigger CSS animation
    setTimeout(() => views[viewName].classList.add("active"), 10);
}

// Event Listeners
document.getElementById("btn-to-setup").addEventListener("click", () => navigateTo("setup"));
document.getElementById("btn-home").addEventListener("click", () => navigateTo("home"));
document.getElementById("btn-retry").addEventListener("click", () => {
    // Reset to setup with same division
    navigateTo("setup");
});

document.getElementById("btn-start-quiz").addEventListener("click", () => {
    currentDivision = document.getElementById("division-select").value;
    timerEnabled = document.getElementById("timer-toggle").checked;
    startQuiz();
});

document.getElementById("btn-submit").addEventListener("click", handleSubmission);

// --- Core Logic ---

function startQuiz() {
    currentQuestions = [...questionsDatabase[currentDivision]]; // Copy array
    // Optional: Shuffle questions here if desired
    
    questionIndex = 0;
    score = 0;
    
    document.getElementById("quiz-division-label").textContent = currentDivision;
    
    const timerEl = document.getElementById("quiz-timer");
    if (timerEnabled) {
        timerEl.classList.remove("hidden");
    } else {
        timerEl.classList.add("hidden");
    }

    navigateTo("quiz");
    loadQuestion();
}

function loadQuestion() {
    selectedOptionIndex = null;
    document.getElementById("btn-submit").textContent = "Submit";
    document.getElementById("btn-submit").disabled = true; // Disable until selection
    
    // Reset Feedback UI
    document.getElementById("feedback-container").classList.add("hidden");
    document.getElementById("feedback-container").classList.remove("success", "error");
    
    const q = currentQuestions[questionIndex];
    document.getElementById("question-number").textContent = `Question ${questionIndex + 1} of ${currentQuestions.length}`;
    document.getElementById("question-text").textContent = q.question;

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = ""; // Clear old options

    q.options.forEach((optText, index) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = optText;
        btn.addEventListener("click", () => selectOption(index, btn));
        optionsContainer.appendChild(btn);
    });

    if (timerEnabled) {
        startTimer();
    }
}

function selectOption(index, btnElement) {
    // Ignore clicks if answer has been checked (Submit button says 'Next Question')
    if (document.getElementById("btn-submit").textContent !== "Submit") return;

    selectedOptionIndex = index;
    document.getElementById("btn-submit").disabled = false;

    // Visual selection
    document.querySelectorAll(".option-btn").forEach(btn => btn.classList.remove("selected"));
    btnElement.classList.add("selected");
}

function handleSubmission() {
    const btnSubmit = document.getElementById("btn-submit");
    
    if (btnSubmit.textContent === "Submit") {
        checkAnswer();
        btnSubmit.textContent = questionIndex < currentQuestions.length - 1 ? "Next Question" : "View Results";
    } else {
        // Next Question or View Results
        questionIndex++;
        if (questionIndex < currentQuestions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }
}

function checkAnswer() {
    clearInterval(timerInterval); // Stop timer
    
    const q = currentQuestions[questionIndex];
    const optionBtns = document.querySelectorAll(".option-btn");
    
    // Disable all option buttons
    optionBtns.forEach(btn => btn.disabled = true);

    const feedbackContainer = document.getElementById("feedback-container");
    const feedbackTitle = document.getElementById("feedback-title");
    const feedbackAns = document.getElementById("feedback-correct-ans");
    const feedbackExp = document.getElementById("feedback-explanation");

    feedbackContainer.classList.remove("hidden");
    feedbackExp.textContent = q.explanation;
    feedbackAns.innerHTML = `<strong>Correct Answer:</strong> ${q.options[q.answer]}`;

    // Evaluate
    if (selectedOptionIndex === q.answer) {
        // Correct
        score++;
        feedbackTitle.textContent = "Correct!";
        feedbackContainer.classList.add("success");
        optionBtns[selectedOptionIndex].classList.add("correct");
    } else {
        // Incorrect or Timeout
        feedbackTitle.textContent = selectedOptionIndex === null ? "Time's Up!" : "Incorrect!";
        feedbackContainer.classList.add("error");
        
        if (selectedOptionIndex !== null) {
            optionBtns[selectedOptionIndex].classList.add("incorrect");
        }
        // Always highlight the correct answer
        optionBtns[q.answer].classList.add("correct");
    }
}

function startTimer() {
    clearInterval(timerInterval);
    timeRemaining = 120;
    updateTimerUI();

    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerUI();

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            selectedOptionIndex = null; // Forces incorrect state
            checkAnswer();
            const btnSubmit = document.getElementById("btn-submit");
            btnSubmit.disabled = false;
            btnSubmit.textContent = questionIndex < currentQuestions.length - 1 ? "Next Question" : "View Results";
        }
    }, 1000);
}

function updateTimerUI() {
    const timerEl = document.getElementById("quiz-timer");
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (timeRemaining <= 30) {
        timerEl.classList.add("danger");
    } else {
        timerEl.classList.remove("danger");
    }
}

function showResults() {
    navigateTo("results");
    const total = currentQuestions.length;
    const percentage = Math.round((score / total) * 100);
    
    document.getElementById("final-score").textContent = `${score} / ${total}`;
    document.getElementById("final-accuracy").textContent = `${percentage}% Accuracy`;
}