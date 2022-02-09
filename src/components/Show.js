import { useSelector } from 'react-redux'
import moment from 'moment';

function Show() {
    const weather = useSelector(state => state.weather[0])

    if (weather === undefined || undefined)
        return (
            <div>
                <h2 style={{color:'red'}}>loading...</h2>
            </div>
        );
    else
        return (
            <div>
            <h1>{weather.location.name}, {weather.location.region}</h1>
            <h3>{weather.location.country}</h3>
            <br/>
            <h2>{moment().format('dddd')}</h2>
            <h3>{moment().format('LL')}</h3>
            <div style={{  
                display: "grid",  
                gridTemplateColumns: "1fr"  
                }}>
                <img src={weather.current.condition.icon} 
                alt={weather.current.condition.text} 
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "right",
                    height: "350%",
                    margin: "5",
                    opacity: "45%",
                    padding: "10px"
                    }}/>
                <h4>{weather.current.condition.text}</h4>
                <h4>Current Temperature: {weather.current.temp_f}°F</h4>
                <h4>Feels Like: {weather.current.feelslike_f}°</h4>
                <h4>Wind Gusts: {weather.current.wind_mph} mph</h4>
            </div>
            </div>
        );
}
export default Show