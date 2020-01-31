class Weather {
    constructor(city, state) {
        this.apiKey = "e30050b8ed1046c89a9ecaf24e5cb56b";
        this.city = city;
        this.state = state;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${this.city}&state=${this.state}&key=${this.apiKey}&units=I`);

        const responseData = await response.json();

        return responseData.data[0];
        
        
        
    }

    // Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}
