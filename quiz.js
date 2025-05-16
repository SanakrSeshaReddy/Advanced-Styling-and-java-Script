document.addEventListener('DOMContentLoaded', function() {
    const questionContainer = document.getElementById('question');
    const optionsList = document.getElementById('options-list');
    const nextButton = document.getElementById('next-button');
    const resultsContainer = document.getElementById('results-container');
    const scoreDisplay = document.getElementById('score');

    const quizData = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            correctAnswer: "Paris"
        },
        {
            question: "Which planet is known as the 'Red Planet'?",
            options: ["Mars", "Jupiter", "Venus", "Saturn"],
            correctAnswer: "Mars"
        },
        {
            question: "What is the chemical symbol for water?",
            options: ["Wo", "Wa", "H2O", "HO2"],
            correctAnswer: "H2O"
        }
        // Add more questions here
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    function loadQuestion() {
        const currentQuestion = quizData[currentQuestionIndex];
        questionContainer.textContent = currentQuestion.question;
        optionsList.innerHTML = ''; // Clear previous options

        currentQuestion.options.forEach(option => {
            const listItem = document.createElement('li');
            const optionButton = document.createElement('button');
            optionButton.textContent = option;
            optionButton.addEventListener('click', () => checkAnswer(option));
            listItem.appendChild(optionButton);
            optionsList.appendChild(listItem);
        });
    }

    function checkAnswer(selectedAnswer) {
        const currentQuestion = quizData[currentQuestionIndex];
        if (selectedAnswer === currentQuestion.correctAnswer) {
            score++;
        }
        currentQuestionIndex++;

        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        questionContainer.style.display = 'none';
        optionsList.style.display = 'none';
        nextButton.style.display = 'none';
        resultsContainer.style.display = 'block';
        scoreDisplay.textContent = `You scored ${score} out of ${quizData.length}!`;
    }

    nextButton.addEventListener('click', () => {
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showResults();
        }
    });

    loadQuestion(); // Initial load
});