const questions = [
    {
        question: "Let's start with 'simple' questions, shall we?!",
        answers: [
            { text: "YESS", correct: true },
            { text: "NOOO", correct: false },
        ]
    },
    {
        question: "What should you do when you are hungry??",
        answers: [
            { text: "Make your own food and eat", correct: false },
            { text: "Order something and eat", correct: false },
            { text: "Ask Anish to cook food and deliver to you within 30min.", correct: true },
            { text: "stay hungry", correct: false },
        ]
    },
    {
        question: "If I were a vegetable, which one would I be?",
        answers: [
            { text: "Potato (soft and comforting)", correct: false },
            { text: "Onion (makes you cry)", correct: false },
            { text: "Broccoli (an acquired taste)", correct: false },
            { text: "Chili (spicy but irresistible)", correct: true },
        ]
    },
    {
        question: "Which term accurately describes me",
        answers: [
            { text: "Mr Poopy no pants Anish", correct: true },
            { text: "Mr Kitty Anish meow", correct: true },
            { text: "Darpok Anish", correct: true },
            { text: "Your Anish", correct: true },
        ]
    },
    {
        question: "Who is your best friend??! (Dont get this one wrong!)",
        answers: [
            { text: "Is it Ria", correct: false },
            { text: "Is it Lahar", correct: false },
            { text: "Is it Anish", correct: true },
            { text: "Is it Siddhu", correct: false },
        ]
    },
    {
        question: "IKIKKK ITS WRONG But im just kidding bebu. These guys are litreally your day ones and they make you soo happy. It makes me very happy knowing that you have your gang all around you who are ready to just throw hands if anything lol. It was lowkey mean to make you choose this but yk im just pulling your legggg! Now you are only left with the most imp question! You ready?! ",
        answers: [
            { text: "YESSSSSSSSSSSSSSSIIIIIIIIRRRRRRRRR", correct: true },
          
        ]
    },
    {
        question: "Who loves you more",
        answers: [
            { text: "Uncle ji", correct: false },
            { text: "Aunty ji", correct: false },
            { text: "Snehal di", correct: false },
            { text: "Your Anish", correct: true },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const startQuizButton = document.getElementById("start-quiz-btn");
const termsCheckbox = document.getElementById("terms-checkbox");
const headingElement = document.querySelector(".app h1"); // Select the h1 element
const startOverButton = document.getElementById("start-over-btn"); // The new "Start from the Beginning" button

let currentQuestionIndex = 0;
let score = 0;
let quizStarted = false;

// Enable or disable the start quiz button based on the terms checkbox
termsCheckbox.addEventListener("change", () => {
    if (termsCheckbox.checked) {
        startQuizButton.disabled = false;
        startQuizButton.classList.add("enabled"); // Add enabled class
    } else {
        startQuizButton.disabled = true;
        startQuizButton.classList.remove("enabled"); // Remove enabled class
    }
});

// Start the quiz when the start button is clicked
startQuizButton.addEventListener("click", () => {
    headingElement.textContent = "Simple Quiz"; // Change the heading text
    document.getElementById("terms-section").style.display = "none"; // Hide terms section
    document.querySelector(".quiz").style.display = "block"; // Show quiz section
    document.body.classList.add('quiz-started'); // Add the new background color class
    startQuiz();
});

// Reset background color when starting over
startOverButton.addEventListener("click", () => {
    document.body.classList.remove('quiz-started'); // Remove the background color class
    startQuiz(); // Start the quiz normally
});

// Function to start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
    startOverButton.style.display = "none"; // Hide the start-over button at the beginning
}

// Function to display the current question
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// Function to reset the state of the quiz
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Function to handle answer selection
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    // Only trigger the alert for question 7 (index 6)
    if (currentQuestionIndex === 6) {
        if (isCorrect) {
            alert("WELL WELL WELLL CORRECT AND THE ONLY RIGHT ANSWER🔥");
        } else {
            alert(`Incorrect! HAWwwww how dare you say this... ${selectedBtn.innerHTML}?! 😤`);

        }
    }

    if (currentQuestionIndex === 3) {
        if (isCorrect) {
            alert("I fit every description lmaoooo");}}

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

// Function to show the score at the end of the quiz
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";

    // Show the "Start from the Beginning" button when quiz is finished
    startOverButton.style.display = "block";
}

// Function to handle the next button click
function handleNextButton() {
    currentQuestionIndex++;
    // Hide the "Start from the Beginning" button when moving to the next question
    startOverButton.style.display = "none"; 

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// Event listener for the next button
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

// Event listener for the "Start from the Beginning" button
startOverButton.addEventListener("click", () => {
    // Hide the "Start from the Beginning" button
    startOverButton.style.display = "none";
    // Reset the quiz state and show the terms section again
    document.querySelector(".quiz").style.display = "none"; // Hide quiz section
    document.getElementById("terms-section").style.display = "block"; // Show terms section
    startQuizButton.disabled = true; // Disable the start quiz button until terms are accepted
    termsCheckbox.checked = false; // Uncheck the checkbox
    termsCheckbox.dispatchEvent(new Event('change')); // Update the button state
    headingElement.textContent = "HAPPY BIRTHDAY"; // Change the heading back to original
});

// Start the quiz initially
startQuiz();
