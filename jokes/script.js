// Joke API base URL and category mapping
const jokeAPIBaseURL = 'https://v2.jokeapi.dev/joke/';
const jokeCategories = {
    Programming: 'Programming',
    Misc: 'Misc',
    Dark: 'Dark',
    Pun: 'Pun',
    Spooky: 'Spooky',
    Christmas: 'Christmas'
};

// Filters to exclude NSFW, religious, political, racist, and sexist jokes
const filters = '?blacklistFlags=nsfw,religious,political,racist,sexist';

// Fetch joke based on selected category
async function fetchJoke(category) {
    let url = `${jokeAPIBaseURL}${category}${filters}&type=single`;
    
    const response = await fetch(url);
    const data = await response.json();

    // Return the joke text or handle an error case
    if (data.error) {
        return 'Oops! Something went wrong. Please try again.';
    } else {
        return data.joke || 'No joke found!';
    }
}

// Handle button click to fetch and display joke
document.getElementById('getJokeBtn').addEventListener('click', async () => {
    const category = document.getElementById('jokeCategory').value;
    const jokeDisplay = document.getElementById('jokeDisplay');
    
    jokeDisplay.textContent = 'Fetching a joke...';
    
    const joke = await fetchJoke(jokeCategories[category]);
    jokeDisplay.textContent = joke;
});
