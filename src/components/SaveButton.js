import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux"
import { addErrors } from "../store/actions/weatherActions"

const SaveButton = () => {

    const weather = useSelector(state => state.weather[0])
    const user_info = useSelector(state => state.location)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const location = weather.location.name + "," + " " + weather.location.region
        console.log("savelocation", location)
        const lat = weather.location.lat
        const lon = weather.location.lon

            fetch("save", {
            method: 'POST', 
            headers: {
            'Content-Type' : 'application/json',
                },
            body: JSON.stringify({
                location: location, 
                lat: lat, 
                lon: lon,
                user_id: user_info[0].id
                })
            }).then((res) => {
                if (res.ok) {
                    res.json()
                    console.log("location saved", res)
                } else {
                    res.json().then((res) => dispatch(addErrors(res)))
                    console.log("error", res.status, res.statusText)
                }
            })
    }

            if(user_info[0])
                if(user_info[0].id !== undefined)
                    return (
                        <div>
                            <form onSubmit={handleSubmit} >
                            <button type="submit">Save</button>
                            </form>
                        <br/>
                       </div>
                        )
                else
                    return (
                        <div>
                         
                        </div>
                    )
            else
                return (
                <div>
                </div>
                )
}

export default SaveButton
