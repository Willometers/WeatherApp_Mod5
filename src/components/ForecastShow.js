import { useSelector } from 'react-redux'
import moment from 'moment';


function ForecastShow() {
    const weather = useSelector(state => state.weather[0])
    console.log("3 Day", weather)
  
    if (weather === undefined)
        return (
            <div>
                <h2 style={{color:'red'}}>loading...</h2>
            </div>
        );
    else
        return (
            <div>
                <h1>{weather.location.name}, {weather.location.region}</h1>

                {weather.forecast.forecastday.map((day) => (
                    <div key={day.date_epoch}>
                        <h2>{moment(day.date).format("dddd")}</h2>
                        <img src={day.day.condition.icon} alt={day.day.condition.text}/>
                        <h4>{day.day.condition.text}</h4>
                        <h4>Total Precip: {day.day.totalprecip_in} in</h4>
                        <h4>High: {day.day.maxtemp_f}°F</h4>
                        <h4>Low: {day.day.mintemp_f}°F</h4>
                        <h4>Sunrise: {day.astro.sunrise}</h4>
                        <h4>Sunset: {day.astro.sunset}</h4>
                        <br/>
                    </div>
                ))}
                
            </div>
        );
}

export default ForecastShow