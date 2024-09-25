const NASA_API_KEY = "YOUR_NASA_API_KEY_HERE";

async function fetchMarsImages() {
    const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${NASA_API_KEY}`);
    const data = await response.json();
    displayImages(data.photos);
}

async function fetchSatelliteImages() {
    const response = await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=-122.4194&lat=37.7749&date=2021-01-01&api_key=${NASA_API_KEY}`);
    const data = await response.json();
    displayImages(data.assets);
}

async function fetchSpaceMissions() {
    const response = await fetch(`https://llapi.thespacedevs.com/2.2.0/missions/`);
    const data = await response.json();
    displayMissions(data);
}
