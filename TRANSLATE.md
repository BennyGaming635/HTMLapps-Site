---
layout: default
title: "Translator"
permalink: /translate
---

This is a simple Language Translation App using the LibreTranslate API. Simply input what to translate and what language and then what to translate to!

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="translate/styles.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
</head>
<body>
    <div class="container mt-5">
        <h1 class="text-center mb-4"><i class="fas fa-language"></i> Language Translator</h1>
        <div class="form-group">
            <label for="sourceLang">Source Language</label>
            <select id="sourceLang" class="form-control">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="it">Italian</option>
                <!-- Add more languages as needed -->
            </select>
        </div>
        <div class="form-group">
            <label for="targetLang">Target Language</label>
            <select id="targetLang" class="form-control">
                <option value="es">Spanish</option>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="it">Italian</option>
                <!-- Add more languages as needed -->
            </select>
        </div>
        <div class="form-group">
            <label for="textInput">Text to Translate</label>
            <textarea id="textInput" class="form-control" rows="5"></textarea>
        </div>
        <button id="translateBtn" class="btn btn-primary"><i class="fas fa-sync-alt"></i> Translate</button>
        <button id="copyBtn" class="btn btn-secondary ml-2"><i class="fas fa-copy"></i> Copy</button>
        <div class="form-group mt-4">
            <label for="translatedText">Translated Text</label>
            <textarea id="translatedText" class="form-control" rows="5" readonly></textarea>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="translate/script.js"></script>
</body>
</html>
