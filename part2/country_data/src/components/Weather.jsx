import weatherService from '../services/weather'
import { useState, useEffect } from 'react'

const Weather = ({ country }) => {
    const [weather, setWeather] = useState(null)

    const imageURL = 'https://openweathermap.org/img/wn'

    const weatherHook = () => {
        const [lat, lon] = country.capitalInfo.latlng
        weatherService
            .getweather(lat, lon)
            .then(response => setWeather(response))
    }

    useEffect(weatherHook, [])

    if(!weather){
        return null
    }

    return(
        <div>
            <h2>Weather in {country.capital[0]}</h2>
            <p>Current Temp: {weather.temp} Farenheit</p>
            <img 
                src={`${imageURL}/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
            />
            <p>Wind Speed: {weather.wind_speed} mph</p>
        </div>
    )
}

export default Weather