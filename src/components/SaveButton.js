import { useSelector } from 'react-redux'

function SaveButton() {
    const weather = useSelector(state => state.weather[0])
    console.log("user stuff", useSelector(state => state.location))
    const user_info = useSelector(state => state.location)

    const handleSubmit = (e) => {
        e.preventDefault()
        const location = weather.location.name
        const lat = weather.location.lat
        const lon = weather.location.lon
        const usery = user_info[0]
        console.log(usery)

        fetch("save", {
        method: 'POST', 
        headers: {
          'Content-Type' : 'application/json',
            },
        body: JSON.stringify({
            location: location, 
            lat: lat, 
            lon: lon,
            user_id: usery
            })
        })
        .then((res) => res.json())
        .then((res) => console.log("save response", res))
    }

    if(user_info) 
        return (
            <div>
                <form onSubmit={handleSubmit} >
                    <button type="submit">Save</button>
                </form>
                <br/>
            </div>
        );
    else 
        return (
            <div>

            </div>
        )
    
}

export default SaveButton