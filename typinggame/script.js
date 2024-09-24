let sentence = "";
let startTime = 0;
let totalErrors = 0;
let totalTime = 0;
let totalTries = 0;

const sentences = {
    easy: [
        "The quick brown fox jumps over the lazy dog.",
        "I love coding every day.",
        "HTML and CSS make the web beautiful.",
    ],
    medium: [
        "JavaScript is versatile and powerful.",
        "CSS animations can make websites interactive.",
        "Web development is fun and rewarding.",
    ],
    hard: [
        "TypeScript brings types to JavaScript for safety.",
        "Asynchronous programming requires handling promises.",
        "Full-stack development involves both frontend and backend.",
    ]
};

// Get elements
const difficultySelect = document.getElementById("difficulty");
const sentenceDisplay = document.getElementById("sentence");
const userInputField = document.getElementById("user-input");
const errorCountDisplay = document.getElementById("error-count");
const timeTakenDisplay = document.getElementById("time-taken");
const promptList = document.getElementById("prompt-list");
const totalTriesDisplay = document.getElementById("total-tries");
const averageTimeDisplay = document.getElementById("average-time");
const startButton = document.getElementById("start-button");

// Start the game when the button is clicked
startButton.addEventListener("click", function () {
    startGame();
});

function getRandomSentence(difficulty) {
    const selectedSentences = sentences[difficulty];
    return selectedSentences[Math.floor(Math.random() * selectedSentences.length)];
}

// Start the game
function startGame() {
    const selectedDifficulty = difficultySelect.value;
    sentence = getRandomSentence(selectedDifficulty);
    sentenceDisplay.textContent = sentence;
    userInputField.value = "";
    userInputField.disabled = false;
    userInputField.focus();
    startTime = new Date().getTime();
    totalErrors = 0;
    updateStats();
}

// Listen for typing input
userInputField.addEventListener("input", () => {
    const currentInput = userInputField.value;
    let errors = 0;

    for (let i = 0; i < currentInput.length; i++) {
        if (currentInput[i] !== sentence[i]) {
            errors++;
        }
    }

    totalErrors = errors;
    updateStats();

    if (currentInput === sentence) {
        endGame();
    }
});

// End the game and show results
function endGame() {
    const elapsedTime = ((new Date().getTime() - startTime) / 1000).toFixed(2);
    totalTime += parseFloat(elapsedTime);
    totalTries++;

    // Display results
    const li = document.createElement("li");
    li.textContent = `Sentence: "${sentence}" - Time: ${elapsedTime} seconds`;
    promptList.appendChild(li);

    // Load new sentence
    startGame();

    // Update overall stats
    updateStats();
}

function updateStats() {
    const elapsedTime = ((new Date().getTime() - startTime) / 1000).toFixed(2);
    errorCountDisplay.textContent = `Errors: ${totalErrors}`;
    timeTakenDisplay.textContent = `Time: ${elapsedTime} seconds`;

    const averageTime = totalTries > 0 ? (totalTime / totalTries).toFixed(2) : 0;
    totalTriesDisplay.textContent = `Total Tries: ${totalTries}`;
    averageTimeDisplay.textContent = `Average Time: ${averageTime} seconds`;
}
