// Init weather object
const weather = new Weather("San Diego", "CA");

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather)

function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
}