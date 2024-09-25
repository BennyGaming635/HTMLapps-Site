document.getElementById('translateBtn').addEventListener('click', async () => {
    const sourceLang = document.getElementById('sourceLang').value;
    const targetLang = document.getElementById('targetLang').value;
    const textInput = document.getElementById('textInput').value;

    const response = await fetch('https://libretranslate.de/translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            q: textInput,
            source: sourceLang,
            target: targetLang,
            format: 'text',
        }),
    });

    const data = await response.json();
    document.getElementById('translatedText').value = data.translatedText;
});

document.getElementById('copyBtn').addEventListener('click', () => {
    const translatedText = document.getElementById('translatedText');
    translatedText.select();
    document.execCommand('copy');
    alert('Translated text copied to clipboard!');
});
