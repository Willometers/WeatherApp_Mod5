import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import moment from 'moment';
import React from 'react';
import SaveButton from './SaveButton'
import NavBar from '../containers/NavBar';
import ErrorShow from './ErrorShow';

function Show() {
    const weather = useSelector(state => state.weather[0])

    if (weather === undefined || null)
        return (
            <div>
                <ErrorShow/>
                <NavBar />
            <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            </div>
        );
    else
        return (
            <div>
            <ErrorShow/>
            <NavBar />
            <div style={{display: 'flex', justifyContent: 'center'}} className="w-100 p-3 center" >
            <Card border="secondary" className="w-50 h-25">
                <Card.Text>
                    <h1>{weather.location.name}, {weather.location.region}</h1>
                    <h3>{weather.location.country}</h3>
                    <h2>{moment().format('dddd')}</h2>
                    <h3>{moment().format('LL')}</h3>
                </Card.Text>
                <div className="w-50 h-25 center">
                    <Card.Img className="w-50 h-25 center" src={weather.current.condition.icon} alt={weather.current.condition.text}  />
                </div>
                <Card.Text>
                    <h4>{weather.current.condition.text}</h4>
                    <h4>Current Temperature: {weather.current.temp_f}°F</h4>
                    <h4>Feels Like: {weather.current.feelslike_f}°</h4>
                    <h4>Wind Gusts: {weather.current.wind_mph} mph</h4>
                </Card.Text>
                <SaveButton />
            </Card>
            </div>
            </div>
        );
}
export default Show