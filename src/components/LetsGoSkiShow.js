import { useSelector } from 'react-redux'
import moment from 'moment';
import React from 'react';
import {CardGroup, Card} from 'react-bootstrap'

function LetsGoSkiShow(resort) {
    const weather = useSelector(state => state.letsSki[0])

        return (
            <div>
            <CardGroup>
            {weather.forecast.forecastday.map((day) => (
                <Card border="secondary" >
                <Card.Img src={day.day.condition.icon} alt={day.day.condition.text} />
                    <Card.Title>{moment(day.date).format("dddd")}, {moment(day.date).format('LL')}</Card.Title>
                    <Card.Text><h2>{day.day.condition.text}</h2></Card.Text>
                    <Card.Text>Total Precip: {day.day.totalprecip_in} in</Card.Text>
                    <Card.Text>High: {day.day.maxtemp_f}°F</Card.Text>
                    <Card.Text>Low: {day.day.mintemp_f}°F</Card.Text>
                    <Card.Text>Sunrise: {day.astro.sunrise}</Card.Text>
                    <Card.Text>Sunset: {day.astro.sunset}</Card.Text>
                </Card>  
            ))}
            </CardGroup>
            </div>
        );

}

export default LetsGoSkiShow