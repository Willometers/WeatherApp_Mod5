import { useSelector } from 'react-redux'

const Hourly = (weather) => {
  
    const hourlyData = weather.weather.forecast.forecastday[0].hour
    console.log(hourlyData)

    if (weather === undefined)
        return (
            <div>
                <h2 style={{color:'red'}}>loading...</h2>
            </div>
        );
    else
        return (
            <div>
                {hourlyData.map((hour) => (
                    <div key={hour.time_epoch}>
                    <h2>{hour.time}</h2>
                    <img src={hour.condition.icon} alt={hour.condition.text}/>
                    <h3>{hour.temp_f}°F</h3>
                    <h3>{hour.condition.text}</h3>
                        <br/>
                    </div>
                ))}
            </div>
        );
}

export default Hourly