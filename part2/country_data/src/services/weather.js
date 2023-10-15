import axios from 'axios'

const apiKey = import.meta.env.VITE_OPEN_WEATHER_API
const weatherURL = `https://api.openweathermap.org/data/3.0/onecall?units=imperial&appid=${apiKey}&`

const getweather = (lat, lon) => {
    const response = axios.get(`${weatherURL}lat=${lat}&lon=${lon}`)
    return response.then(response => {
        return response.data.current
    })
}

export default { getweather }