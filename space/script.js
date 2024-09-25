// NASA API Key (replace with your actual key)
const apiKey = 'wYlRypCbQirhcf3MoJhBaolblxdbMan6E8mFqh91';

// Function to fetch Mars Rover Photos
async function fetchMarsRoverPhotos() {
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Display photos
        displayPhotos(data.photos);
    } catch (error) {
        console.error('Error fetching Mars rover photos:', error);
    }
}

// Function to display photos
function displayPhotos(photos) {
    const photosContainer = document.getElementById('photosContainer');
    photosContainer.innerHTML = ''; // Clear previous photos

    photos.forEach(photo => {
        const imgElement = document.createElement('img');
        imgElement.src = photo.img_src;
        imgElement.alt = 'Mars Rover Photo';
        imgElement.style.width = '100%'; // Adjust as needed
        photosContainer.appendChild(imgElement);
    });
}

// Call the fetch function on page load
fetchMarsRoverPhotos();
