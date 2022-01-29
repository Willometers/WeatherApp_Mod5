import { useSelector } from 'react-redux'
import Hourly from '../components/Hourly';

function HourlyContainers() {
    const weather = useSelector(state => state.weather[0])

    if (weather != undefined)
        return (
            <div>
                <h1>{weather.location.name}, {weather.location.region}</h1>
                <h2>Today</h2>
                <Hourly weather={weather}/>
            </div>
        )
    else
        return (
            <div>
                <h2 style={{color:'red'}}>loading...</h2>
            </div>
        );
}

export default HourlyContainers