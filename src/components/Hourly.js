import moment from 'moment';
import {CardGroup, Card, Row, Col} from 'react-bootstrap'

const Hourly = (weather) => {
  
    const hourlyData = weather.weather.forecast.forecastday[0].hour
    console.log("hourly", hourlyData)

    if (weather === undefined)
        return (
            <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        );
    else
        return (
            <div style={{display: 'flex', flexDirection: 'row'}}> 
            <br/>
                <CardGroup>
                <br/>
                    <Row>
                        {hourlyData.map((hour) => (
                        <Col>
                            <Card border="secondary" style={{width: "12rem", height: "22rem"}}>
                                <Card.Img src={hour.condition.icon} alt={hour.condition.text} />
                                <Card.Text>
                                    {moment().format("h a") === moment(hour.time).format("h a") ? <h2 style={{color:'red'}}>{moment(hour.time).format("h:mm a")} EST</h2> : <h2>{moment(hour.time).format("h:mm a")} EST</h2> }
                                    <h6>{hour.condition.text}</h6>
                                    <h4>{hour.temp_f}°F</h4>
                                </Card.Text>
                            </Card>
                        </Col>
                        ))}
                    </Row>
                    <br/>
                </CardGroup>
                <br/>
            </div>
        );
}

export default Hourly