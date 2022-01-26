import { useSelector } from 'react-redux'

function HourlyContainers() {
    const weather = useSelector(state => state.weather[0])
    // console.log("day", weather.forecast.forecastday[0])
    // console.log("hour", weather.forecast.forecastday[0].hour[0])

    if (weather != undefined)
        return (
            <div>
                <h1>{weather.location.name}, {weather.location.region}</h1>
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
