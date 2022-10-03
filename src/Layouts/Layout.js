import './../App.css';
import { Detail } from '../Components/Detail';
import { OptionSelector } from '../Components/OptionSelector';
import { LanguageButton } from '../Components/LanguageButton';
import { getCurrentWeatherByCity, getCurrentWeatherIcon } from '../services/weather.service';
import { formatToCelsius } from '../utils/temperature';
import { useState } from 'react';
import { useSelector } from "react-redux";

const langList = require('../fixtures/langData.json');
const citiesData = require('../fixtures/cititesData.json')

export const Layout = () => {
  const cityIdList = citiesData.map(currentCity => currentCity.id);

  const { id: currentLang, messages } = useSelector(state => state.lang);
  const [weatherData, setWeatherData] = useState(null)

  const getCityOptions = () => {
    return cityIdList.map(currentId => ( {
        id: currentId,
        label: messages[currentId],
        value: currentId
      })    
    )
  }

  const onSelectCity = async cityCode => {
    const cityIdx = cityIdList.indexOf(cityCode);
    const { lat, lon } = citiesData[cityIdx]
    const currentCityWeather = await getCurrentWeatherByCity(lat, lon, currentLang);
    const { icon, description, currentTemp, maxTemp, minTemp } = currentCityWeather;
    setWeatherData({
      icon: getCurrentWeatherIcon(icon),
      description,
      currentTemp: formatToCelsius(currentTemp),
      maxTemp: formatToCelsius(maxTemp),
      minTemp: formatToCelsius(minTemp)
    })
  }

  return (
      <div className="App">
        <header>
          {langList.map(currentLang => {
            const { id, messages } = currentLang;
            return <LanguageButton key={id} language={id}>{messages.buttonText}</LanguageButton>
          })}
        </header>
        <section>
          Cities
          <OptionSelector options={getCityOptions()} handleSelectOption={onSelectCity} />
        </section>
        <section>{messages.title}</section>
          {weatherData && <Detail detailInfo={weatherData} />}
      </div>
  );
}
