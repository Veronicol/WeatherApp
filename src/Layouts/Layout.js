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
  const [weatherData, setWeatherData] = useState(null);

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
      <div>
        <header>
          {langList.map(lang => {
            const { id, messages } = lang;
            const buttonClass = `button ${id === currentLang ? ' button__selected' : ''}`;
            return <LanguageButton key={id} language={id} buttonClass={buttonClass}>{messages.buttonText}</LanguageButton>
          })}
        </header>
        <div className="content-container">
          <section className="section">
            <h2>{messages.title}</h2>
          </section>
          <section>
            <OptionSelector options={getCityOptions()} handleSelectOption={onSelectCity} />
          </section>
          <section>
            {weatherData && <Detail detailInfo={weatherData}/>}
          </section>
        </div>
      </div>
  );
}
