document.addEventListener("DOMContentLoaded", () => {
    const quizContainer = document.getElementById("quiz-container");
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const nextButton = document.getElementById("next-btn");
    const resultContainer = document.getElementById("result-container");
    const resultText = document.getElementById("result-text");

    const quizData = [
        {
            question: "What is the main goal of SDG 11?",
            choices: [
                "To make cities and human settlements inclusive, safe, resilient, and sustainable",
                "To reduce world population growth",
                "To promote agriculture in urban areas",
                "To build more skyscrapers and urban centers"
            ],
            correct: 0
        },
        {
            question: "Which of the following is a key target of SDG 11?",
            choices: [
                "Reducing traffic congestion by banning private vehicles",
                "Ensuring access to safe, affordable, and sustainable transport systems",
                "Building only smart cities with artificial intelligence",
                "Promoting industrial expansion in rural areas"
            ],
            correct: 1
        },
        {
            question: "What does SDG 16 aim to achieve?",
            choices: [
                "Promote peaceful and inclusive societies for sustainable development",
                "Expand military presence in conflict-prone regions",
                "Encourage businesses to take control of justice systems",
                "Establish a single global government"
            ],
            correct: 0
        },
        {
            question: "Which of these is a major challenge to achieving SDG 16?",
            choices: [
                "Corruption and lack of transparency",
                "Too many international treaties",
                "Not enough countries having armies",
                "Overuse of natural resources"
            ],
            correct: 0
        },
        {
            question: "How does SDG 11 relate to climate action?",
            choices: [
                "By reducing air pollution and promoting public transportation",
                "By banning all construction in urban areas",
                "By relocating all people to rural areas",
                "By encouraging everyone to use personal cars"
            ],
            correct: 0
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    function loadQuestion() {
        const currentQuestion = quizData[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        choicesElement.innerHTML = "";

        currentQuestion.choices.forEach((choice, index) => {
            const button = document.createElement("button");
            button.textContent = choice;
            button.classList.add("choice-btn");
            button.addEventListener("click", () => checkAnswer(index));
            choicesElement.appendChild(button);
        });
    }

    function checkAnswer(selectedIndex) {
        const correctIndex = quizData[currentQuestionIndex].correct;

        if (selectedIndex === correctIndex) {
            score++;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            displayResult();
        }
    }

    function displayResult() {
        quizContainer.style.display = "none";
        resultContainer.style.display = "block";

        let feedbackMessage = "";
        switch (score) {
            case 5:
                feedbackMessage = "You're well-versed in this!";
                break;
            case 4:
                feedbackMessage = "Way to go!";
                break;
            case 3:
                feedbackMessage = "Not bad! You already have some background on this.";
                break;
            case 2:
                feedbackMessage = "Keep going! You'll be able to learn better if you check out the SDGs on the United Nations website.";
                break;
            default:
                feedbackMessage = "Hey, it's okay! You did your best.";
        }

        resultText.textContent = `You scored ${score} out of ${quizData.length}. ${feedbackMessage}`;
    }

    nextButton.addEventListener("click", () => {
        currentQuestionIndex = 0;
        score = 0;
        resultContainer.style.display = "none";
        quizContainer.style.display = "block";
        loadQuestion();
    });

    loadQuestion();
});
