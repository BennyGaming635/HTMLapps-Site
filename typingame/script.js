let sentence = "";
let userInput = "";
let startTime = 0;
let totalErrors = 0;
let totalTime = 0;
let totalTries = 0;

// Expanded sentences for different difficulty levels
const sentences = {
    easy: [
        "The quick brown fox jumps over the lazy dog.",
        "I love coding every day.",
        "HTML and CSS make the web beautiful.",
        "Cats are very curious animals.",
        "She sells seashells by the seashore.",
        "Birds fly in the sky with ease.",
        "The sun sets in the west."
    ],
    medium: [
        "JavaScript is versatile and powerful.",
        "CSS animations can make websites interactive.",
        "Web development is fun and rewarding.",
        "Learning new languages sharpens the mind.",
        "Typing fast requires practice and focus.",
        "The path to mastery begins with the basics.",
        "Debugging is just as important as writing code."
    ],
    hard: [
        "TypeScript brings types to JavaScript for safety.",
        "Asynchronous programming requires handling promises.",
        "Full-stack development involves both frontend and backend.",
        "Complex algorithms require efficient implementation.",
        "The intricacies of network protocols are fascinating.",
        "Design patterns help solve common software problems.",
        "Machine learning can revolutionize data analysis."
    ]
};

// Selectors
const difficultySelect = document.getElementById("difficulty");
const sentenceDisplay = document.getElementById("sentence");
const userInputField = document.getElementById("user-input");
const errorCountDisplay = document.getElementById("error-count");
const timeTakenDisplay = document.getElementById("time-taken");
const promptList = document.getElementById("prompt-list");
const averageTimeDisplay = document.getElementById("average-time");
const totalTriesDisplay = document.getElementById("total-tries");

// Get random sentence based on difficulty
function getRandomSentence(difficulty) {
    const selectedSentences = sentences[difficulty];
    return selectedSentences[Math.floor(Math.random() * selectedSentences.length)];
}

// Start the game
function startGame() {
    sentence = getRandomSentence(difficultySelect.value);
    sentenceDisplay.textContent = sentence;
    userInputField.value = "";
    startTime = new Date().getTime();
    totalErrors = 0;
    updateStats();
}

// Update stats on the page
function updateStats() {
    errorCountDisplay.textContent = `Errors: ${totalErrors}`;
    const elapsedTime = ((new Date().getTime() - startTime) / 1000).toFixed(2);
    timeTakenDisplay.textContent = `Time: ${elapsedTime} seconds`;
}

// Check user input and update errors
userInputField.addEventListener("input", () => {
    const currentInput = userInputField.value;
    userInput = currentInput;
    let errors = 0;

    // Compare each character typed with the sentence
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

// End the game and log results
function endGame() {
    const elapsedTime = ((new Date().getTime() - startTime) / 1000).toFixed(2);
    totalTime += parseFloat(elapsedTime);
    totalTries++;
    
    // Save result in cookies
    saveScore(sentence, elapsedTime);
    
    // Update results and stats
    updatePromptList(sentence, elapsedTime);
    updateStats();
    startGame();
}

// Load saved scores from cookies
function loadSavedScores() {
    const savedScores = JSON.parse(getCookie("typingScores") || "[]");
    savedScores.forEach(score => updatePromptList(score.sentence, score.time));
}

// Update the prompt list with new results
function updatePromptList(sentence, time) {
    const li = document.createElement("li");
    li.textContent = `Sentence: "${sentence}" - Time: ${time} seconds`;
    promptList.appendChild(li);
    updateStats();
}

// Save scores to cookies
function saveScore(sentence, time) {
    const savedScores = JSON.parse(getCookie("typingScores") || "[]");
    savedScores.push({ sentence, time });
    setCookie("typingScores", JSON.stringify(savedScores), 30);
}

// Helper functions to manage cookies
function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function getCookie(name) {
    const cookieArr = document.cookie.split("; ");
    for (let cookie of cookieArr) {
        const [cookieName, cookieValue] = cookie.split("=");
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}

// Update stats on the page
function updateStats() {
    document.getElementById("total-tries").textContent = `Total Tries: ${totalTries}`;
    const averageTime = totalTries > 0 ? (totalTime / totalTries).toFixed(2) : 0;
    document.getElementById("average-time").textContent = `Average Time: ${averageTime} seconds`;
}

// Start the game when the page loads
window.onload = () => {
    startGame();
    loadSavedScores();
};
