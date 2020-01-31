class UI {
    constructor() {
        this.location = document.getElementById("w-location"); // city_name
        this.string = document.getElementById("w-string"); // state_code   
        this.desc = document.getElementById("w-desc"); // temp
        this.details = document.getElementById("w-details"); // weather.description
        this.icon = document.getElementById("w-icon"); // data.weather.icon
        this.synopsis = document.getElementById("w-synopsis"); // data.weather.icon
        this.humidity = document.getElementById("w-humidity"); // rh
        this.feelsLike = document.getElementById("w-feels-like"); // app_temp 
        this.dewpoint = document.getElementById("w-dewpoint"); // dewpt
        this.wind = document.getElementById("w-wind"); // wind_spd
    }

    paint(data) {
        console.log(data.weather.description);
        console.log(data.weather.icon);
        this.location.textContent = data.city_name; 
        this.string.textContent = data.state_code;
        this.desc.textContent = `${data.temp}°F`; 
        this.synopsis.textContent = data.weather.description;
        this.icon.setAttribute("src" , "/icons/" + data.weather.icon + ".png");
        this.humidity.textContent = `Relative Humidity: ${data.rh}`;
        this.feelsLike.textContent = `Feels Like: ${data.app_temp}°F`;
        this.dewpoint.textContent = `Dew Point: ${data.dewpt}`;
        this.wind.textContent = `Wind: ${data.wind_spd} MPH`;
    }
}
