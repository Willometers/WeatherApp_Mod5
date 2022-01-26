import { useSelector } from 'react-redux'

function Show() {
    const weather = useSelector(state => state.weather[0])
  
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
                <img src={weather.current.condition.icon} alt={weather.current.condition.text}/>
                <h4>{weather.current.condition.text}</h4>
                <h4>{weather.current.temp_f}°F</h4>
                <h4>Wind Gusts: {weather.current.wind_mph} mph</h4>
            </div>
            
        );
}

export default Show