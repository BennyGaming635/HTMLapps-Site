const fs = require('fs');

const filePath = 'space/script.js';
const apiKey = process.env.NASA_API_KEY;

// Read the file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    // Replace the placeholder with the API key
    const result = data.replace(/YOUR_NASA_API_KEY_HERE/g, apiKey);

    // Write the modified content back to the file
    fs.writeFile(filePath, result, 'utf8', (err) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
    });
});
