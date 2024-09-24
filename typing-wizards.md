---
layout: default
title: "Typing Wizards"
permalink: /wizards
---

## Welcome to Typing Wizards!
### Once you finish a prompt change the difficulty and click Start game to try again!
<div class="typing-game-container">
    <h1>Typing Wizards</h1>
    <label for="difficulty">Select Difficulty:</label>
    <select id="difficulty" class="difficulty-select">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
    </select>
    <!-- Start Button -->
    <button id="start-button" class="start-button">Start Game</button>
    <div id="sentence-container" class="sentence-container">
        <p id="sentence" class="sentence-display">Click 'Start Game' to begin.</p>
    </div>
    <textarea id="user-input" rows="4" cols="50" class="input-box" placeholder="Start typing here..." disabled></textarea>
    <div id="stats" class="stats">
        <p id="error-count">Errors: 0</p>
        <p id="time-taken">Time: 0 seconds</p>
    </div>
    <h3>Results</h3>
    <ul id="prompt-list"></ul>
    <p id="total-tries">Total Tries: 0</p>
    <p id="average-time">Average Time: 0 seconds</p>
</div>

<!-- Include the JavaScript and CSS -->
<script src="{{ '/typinggame/script.js' | relative_url }}" defer></script>
<link rel="stylesheet" href="{{ '/typinggame/style.css' | relative_url }}">

