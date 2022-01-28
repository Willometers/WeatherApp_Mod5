import { useSelector } from 'react-redux'


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
                        <h1>Date: {day.date}</h1>
                        <img src={day.day.condition.icon} alt={day.day.condition.text}/>
                        <h3>{day.day.condition.text}</h3>
                        <h3>Total Precip: {day.day.totalprecip_in} in</h3>
                        <h2>High: {day.day.maxtemp_f}°F</h2>
                        <h3>Low: {day.day.mintemp_f}°F</h3>
                        <h3>Sunrise: {day.astro.sunrise}</h3>
                        <h3>Sunset: {day.astro.sunset}</h3>
                        <br/>
                    </div>
                ))}
                
            </div>
        );
}

export default ForecastShow