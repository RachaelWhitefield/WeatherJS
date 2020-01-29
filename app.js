// Init weather object
const data = new Weather("Denver", "CO");
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Change location event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;

    data.changeLocation("San Diego", "CA");

    // Get and display weather
    getWeather();
    
    // Close modal
    $("#locModal").modal("hide");
});

function getWeather() {
    data.getWeather()
        .then(results => {
            ui.paint(results);
            // console.log(results);
        })
        .catch(err => console.log(err));
}

