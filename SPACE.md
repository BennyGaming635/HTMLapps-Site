---
layout: default
title: "NASA Picture of the day!"
permalink: /space
---

This is a simple web application that fetches data from the NASA API, allowing users to view images from Mars, satellite imagery, and details about various space missions. 

---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="space/styles.css">
</head>
<body>
    <div class="container">
        <h1 class="text-center my-4">🌌 Space Exploration App 🌌</h1>
        <div class="text-center mb-4">
            <button id="marsImagesBtn" class="btn btn-primary mx-2">View Mars Images</button>
            <button id="satelliteImagesBtn" class="btn btn-success mx-2">View Satellite Images</button>
            <button id="missionsBtn" class="btn btn-info mx-2">View Space Missions</button>
        </div>
        <div id="content" class="row"></div>
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="space/script.js"></script>
</body>
</html>
