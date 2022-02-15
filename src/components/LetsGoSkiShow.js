import { useSelector } from 'react-redux'
import moment from 'moment';
import React from 'react';

function LetsGoSkiShow() {
    const weather = useSelector(state => state.letsSki[0])
    console.log("LGSShow", weather)

    if (weather === undefined || null)
        return (
            <div>
                <h2 style={{color:'red'}}>Please select a ski area</h2>
            </div>
        );
    else
        return (
            <div>
                <h1>{weather.location.name}, {weather.location.region}</h1>
                <h3>{weather.location.country}</h3>
                <br/>
                {weather.forecast.forecastday.map((day) => (
                    <div>
                    <h1>{moment(day.date).format("dddd")}</h1>
                    <h3>{moment(day.date).format('LL')}</h3>
                    <div key={day.date_epoch} style={{  
                        display: "grid",  
                        gridTemplateColumns: "1fr 1fr"  
                        }}>
                        <br/>
                        <img src={day.day.condition.icon} 
                            alt={day.day.condition.text} 
                            style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "500%",
                            margin: "4",
                            opacity: "45%"
                        }}/>
                        <h3>{day.day.condition.text}</h3>
                        <h3>Total Precip: {day.day.totalprecip_in} in</h3>
                        <h3>High: {day.day.maxtemp_f}°F</h3>
                        <h3>Low: {day.day.mintemp_f}°F</h3>
                        <h3>Sunrise: {day.astro.sunrise}</h3>
                        <h3>Sunset: {day.astro.sunset}</h3>
                        <br/>
                        <br/>
                    </div>
                    </div>
                ))}
            </div>

        );
}
export default LetsGoSkiShow