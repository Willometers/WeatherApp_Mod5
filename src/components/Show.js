import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function Show() {
    const weather = useSelector(state => state.weather[0])
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("forecast")
        navigate("/forecast")
    }
  
    if (weather === undefined)
        return (
            <div>
                <h2 style={{color:'red'}}>loading...</h2>
            </div>
        );
    else
        return (
            <div>
                <h1>Weather:</h1>
                <img src={weather.current.condition.icon} alt={weather.current.condition.text}/>
                <h3>Location: {weather.location.name}, {weather.location.region}</h3>
                <h4>Current Conditions: {weather.current.condition.text}</h4>
                <h4>Current Temp: {weather.current.temp_f}°</h4>
                <h4>Wind Gusts: {weather.current.wind_mph} mph</h4>
                <form onSubmit={handleSubmit} >
                    <button type="submit">Forecast</button>
                </form>
            </div>
            
        );
}

export default Show