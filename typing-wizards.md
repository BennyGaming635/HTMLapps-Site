---
layout: default
title: "Typing Wizards"
permalink: /wizards
---


<div class="container">
    <h1>Typing Wizards</h1>
    <div class="difficulty-container">
        <label for="difficulty">Select Difficulty:</label>
        <select id="difficulty">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select>
    </div>
    <div id="sentence-container" class="sentence-container">
        <p id="sentence"></p>
        <input type="text" id="user-input" placeholder="Start typing..." autofocus />
        <p id="error-count">Errors: 0</p>
        <p id="time-taken">Time: 0 seconds</p>
    </div>
    <div class="results-container">
        <h2>Previous Results</h2>
        <ul id="prompt-list"></ul>
        <h2>Your Stats</h2>
        <p id="average-time">Average Time: 0 seconds</p>
        <p id="total-tries">Total Tries: 0</p>
    </div>
</div>

<script src="{{ '/typinggame/script.js' | relative_url }}"></script>
<link rel="stylesheet" href="{{ '/typinggame/style.css' | relative_url }}">
