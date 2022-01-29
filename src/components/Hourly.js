import moment from 'moment';

const Hourly = (weather) => {
  
    const hourlyData = weather.weather.forecast.forecastday[0].hour
    console.log("hourly", hourlyData)

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
                    <div key={hour.time_epoch} style={{  
                        display: "grid",  
                        gridTemplateColumns: "1fr 1fr 1fr 1fr"  
                      }}>
                    {moment().format("h a") === moment(hour.time).format("h a") ? <h2 style={{color:'red'}}>{moment(hour.time).format("h:mm a")}</h2> : <h2>{moment(hour.time).format("h:mm a")}</h2> }
                    <img src={hour.condition.icon} alt={hour.condition.text}/>
                    <h4>{hour.temp_f}°F</h4>
                    <h4>{hour.condition.text}</h4>
                    </div>
                ))}
            </div>
        );
}

export default Hourly