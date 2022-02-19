import { useSelector } from 'react-redux'
import moment from 'moment';
import {CardGroup, Card} from 'react-bootstrap'

function ForecastShow() {
    const weather = useSelector(state => state.weather[0])
    console.log("3 Day", weather)
  
    if (weather === undefined)
        return (
            <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        );
    else
        return (
            <div>
                <h1>{weather.location.name}, {weather.location.region}</h1>
                <h3>{weather.location.country}</h3>
                <br/>
                <CardGroup>
                {weather.forecast.forecastday.map((day) => (
                    
                    <Card border="secondary" style={{ width: '18rem' }}>
                    <Card.Img src={day.day.condition.icon} alt={day.day.condition.text} />
                    <Card.ImgOverlay>
                        <Card.Title>{moment(day.date).format("dddd")}, {moment(day.date).format('LL')}</Card.Title>
                        <Card.Text><h2>{day.day.condition.text}</h2></Card.Text>
                        <Card.Text>Total Precip: {day.day.totalprecip_in} in</Card.Text>
                        <Card.Text>High: {day.day.maxtemp_f}°F</Card.Text>
                        <Card.Text>Low: {day.day.mintemp_f}°F</Card.Text>
                        <Card.Text>Sunrise: {day.astro.sunrise}</Card.Text>
                        <Card.Text>Sunset: {day.astro.sunset}</Card.Text>
                    </Card.ImgOverlay>
                    </Card>  
                ))}
                </CardGroup>
                 <br/>
            </div>
        );
}
export default ForecastShow