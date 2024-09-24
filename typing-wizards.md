---
layout: default
title: "Typing Wizards"
permalink: /wizards
---

<div class="typing-game-container">
    <h1>Typing Wizards</h1>
    <label for="difficulty">Select Difficulty:</label>
    <select id="difficulty">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
    </select>
    <div id="sentence-container">
        <p id="sentence">Your sentence will appear here.</p>
    </div>
    <textarea id="user-input" rows="4" cols="50" placeholder="Start typing here..."></textarea>
    <div id="stats">
        <p id="error-count">Errors: 0</p>
        <p id="time-taken">Time: 0 seconds</p>
    </div>
    <h3>Results</h3>
    <ul id="prompt-list"></ul>
    <p id="total-tries">Total Tries: 0</p>
    <p id="average-time">Average Time: 0 seconds</p>
</div>

<!-- Include the JavaScript and CSS -->
<script src="/typinggame/script.js"></script>
<link rel="stylesheet" href="/typinggame/style.css">
