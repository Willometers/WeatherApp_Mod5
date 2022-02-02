import { useSelector } from 'react-redux'
import Hourly from '../components/Hourly';
import moment from 'moment';

function HourlyContainers() {
    const weather = useSelector(state => state.weather[0])

    if (weather != undefined)
        return (
            <div>
                <h1>{weather.location.name}, {weather.location.region}</h1>
                <h3>{weather.location.country}</h3>
                <h2>{moment().format('dddd')}</h2>
                <h3>{moment().format('LL')}</h3>
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