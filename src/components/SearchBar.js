import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { fetchSearchWeather } from '../store/actions/weatherActions'
import { useNavigate } from 'react-router-dom'

function SearchBar() {
    const dispatch = useDispatch() 
    const navigate = useNavigate()

    const [place, setPlace ] = useState("")

    function handleChange(e) {
        setPlace(e.target.value)
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        console.log("submitted", place)
        dispatch(fetchSearchWeather(place))
        e.target.reset()
        navigate("/")
        // window.location.reload(false);
    }

    return (
        <div >
        <form onSubmit={handleSubmit}>
        <input placeholder="Search Location" 
            onChange={handleChange}/>
        </form>
    </div>
    )
}

export default SearchBar
