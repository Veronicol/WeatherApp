import { WeatherInfo } from '../models/WeatherInfo.entity';

const openWeatherBaseURL = process.env.REACT_APP_OPEN_WEATHER_BASE_URL;
const openWeatherApiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

export const getCurrentWeatherByCity = async (lat, lon, lang) => {
    const currentWeatherResponse = await fetch(`${openWeatherBaseURL}?lat=${lat}&lon=${lon}&appid=${openWeatherApiKey}&lang=${lang}&units=metric`);
    const currentWeather = await currentWeatherResponse.json();
    return new WeatherInfo(currentWeather);
}

export const getCurrentWeatherIcon = iconCode => `https://openweathermap.org/img/wn/${iconCode}@2x.png`