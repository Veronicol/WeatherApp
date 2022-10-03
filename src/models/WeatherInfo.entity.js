export class WeatherInfo {
    constructor(data) {
        this.icon =  data.weather[0].icon;
        this.description = data.weather[0].description;
        this.maxTemp = data.main.temp_max;
        this.minTemp = data.main.temp_min;
        this.currentTemp = data.main.temp;
    }
}