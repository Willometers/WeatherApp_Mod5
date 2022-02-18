import { useSelector, useDispatch } from "react-redux"
import { fetchSearchWeather } from "../store/actions/weatherActions"
import { useNavigate } from "react-router-dom"
import DeleteFavoriteButton from "./DeleteFavoriteButton"
import { Card, Button, Form } from 'react-bootstrap'


const MySavedLocationsShow = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.location)

    const handleClick = (e) => {
        console.log("clicked", e.target.id)
        dispatch(fetchSearchWeather(e.target.id))
        navigate("/")
    }
    
if (user[0])
        if (user[0].locations.length > 0)
            return (
                <div>
                    {user[0].locations.map((place) => (
                    <div style={{display: 'flex', justifyContent: 'center'}} className="w-100 p-3 center">
                    <Card border="secondary" className="w-50 h-25">
                        <Card.Text>
                            <h1 id={place.location} onClick={handleClick}>{place.location}</h1>
                        </Card.Text>
                        <DeleteFavoriteButton place={place}/>
                    </Card>
                    </div>
                    ))}
                </div>
            )
        else
            return (
                <div><h1 style={{color:'red'}}>no saved locations</h1></div>
            )
    else 
    return (
        <div><h1 style={{color:'red'}}>...loading</h1></div>
    )


}

export default MySavedLocationsShow
