// Calling to WeatherBit API instead of Weather Underground.  I'm having trouble getting the returned object to print to the page.  Most likely a syntax error of my own design.

class UI {
    constructor() {
        this.location = document.getElementById("w-location"); // city_name   
        this.desc = document.getElementById("w-desc"); // temp
        this.string = document.getElementById("w-string"); // state_code
        this.details = document.getElementById("w-details"); // weather.description
        this.icon = document.getElementById("w-icon"); // data.weather.icon
        this.humidity = document.getElementById("w-humidity"); // rh
        this.feelsLike = document.getElementById("w-feels-like"); // app_temp 
        this.dewpoint = document.getElementById("w-dewpoint"); // dewpt
        this.wind = document.getElementById("w-wind"); // wind_spd
    }

    paint(data) {
        this.location.textContent = data.city_name; 
        this.desc.textContent = data.temp; 
        this.string.textContent = data.state_code; 
        // this.details.textContent = data.weather.description;
        // this.icon.setAttribute("src" , data.weather.icon);
        this.humidity.textContent = `Relative Humidity: ${data.rh}`;
        this.feelsLike.textContent = `Feels Like: ${data.app_temp}`;
        this.dewpoint.textContent = `Dew Point: ${data.dewpt}`;
        this.wind.textContent = `Wind: ${data.wind_spd}`;
    }
}



// INSTRUCTIONAL VIDEO CODE
// class UI {
//     constructor() {
//         this.location = document.getElementById("w-location");    // city    
//         this.desc = document.getElementById("w-desc");  // weather description
//         this.string = document.getElementById("w-string");    // temperature
//         this.details = document.getElementById("w-details");   // "partly cloudy"
//         this.icon = document.getElementById("w-icon"); 
//         this.humidity = document.getElementById("w-humidity");  
//         this.feelsLike = document.getElementById("w-feels-like");
//         this.dewpoint = document.getElementById("w-dewpoint");
//         this.wind = document.getElementById("w-wind");
//     }

//     paint(weather) {
//         this.location.textContent = weather.display_location.full; // city
//         this.desc.textContent = weather.weather; // "partly cloudy"
//         this.string.textContent = weather.temperature_string; // temperature
//         this.icon.setAttribute("src" , weather.icon_url);
//         this.humidity.textContent = `Relative Humidity: ${weather.relative_humidity}`;
//         this.feelsLike.textContent = `Feels Like: ${weather.feelslike_string}`;
//         this.dewpoint.textContent = `Dew Point: ${weather.dewpoint_string}`;
//         this.wind.textContent = `Wind: ${weather.wind_string}`;
//     }
// }