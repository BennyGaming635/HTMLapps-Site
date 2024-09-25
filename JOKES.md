---
layout: default
title: "Joke Generator"
permalink: /jokes
---

# Random Joke Generator

The **Random Joke Generator** is a fun, light-hearted web app that provides random jokes in various categories like Programming, Misc, Dark, Pun, Spooky, and Christmas. The app uses the **JokeAPI** and automatically excludes inappropriate content such as NSFW, religious, political, racist, and sexist jokes.

## How to Use the Tool

1. **Select a Category**: 
   - You can choose from Programming, Miscellaneous, Dark, Pun, Spooky, or Christmas jokes by selecting the desired option from the dropdown menu.

2. **Click "Get Joke"**: 
   - Once you've selected a category, press the **Get Joke** button. The app will fetch a random joke from the selected category and display it.

3. **Enjoy the Joke**: 
   - The joke will appear inside the card below the category selection. If you want another joke, just press the button again!

---


---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="jokes/styles.css">
</head>
<body class="bg-light">
    <div class="container text-center mt-5">
        <h1 class="mb-4">Random Joke Generator</h1>
         <!-- Category Selection -->
        <div class="mb-3">
            <label for="jokeCategory" class="form-label">Select a Joke Category:</label>
            <select class="form-select" id="jokeCategory">
                <option value="Programming">Programming Jokes</option>
                <option value="Misc">Miscellaneous Jokes</option>
                <option value="Dark">Dark Jokes</option>
                <option value="Pun">Pun Jokes</option>
                <option value="Spooky">Spooky Jokes</option>
                <option value="Christmas">Christmas Jokes</option>
            </select>
        </div>
        <!-- Joke Display -->
        <div class="card">
            <div class="card-body" id="jokeDisplay">
                Click "Get Joke" to see a joke.
            </div>
        </div>
        <!-- Fetch Joke Button -->
        <button class="btn btn-primary mt-3" id="getJokeBtn">Get Joke</button>
    </div>
    <script src="jokes/script.js"></script>
</body>
</html>
