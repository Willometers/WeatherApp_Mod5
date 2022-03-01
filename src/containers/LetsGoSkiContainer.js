import LetsGoSkiShow from "../components/LetsGoSkiShow"
import SkiAreaDropdown from "../components/SkiAreaDropdown.js"
import MapShow from "../components/MapShow"
import { useState } from 'react'
import RateComponent from '../components/RateComponent'
import { useSelector } from "react-redux"
import NavBar from "./NavBar"
import ErrorShow from "../components/ErrorShow"

const LetsGoSkiContainer = () => {
    const weather = useSelector(state => state.letsSki[0])
    const user_info = useSelector(state => state.location)
    const [resort, setResort ] = useState([])

    const setTheResort = (skiArea) => {
        setResort(skiArea)
    }

    if (!weather)
        return ( 
            <div>
                <ErrorShow/>
                <NavBar />
            <div>
                <SkiAreaDropdown setTheResort={setTheResort} />
                <h4>Please Select a Ski Area</h4>
            </div>
            </div>
        );
    else
        return (
            <div>
                <ErrorShow/>
                <NavBar />
            <div>
                <SkiAreaDropdown setTheResort={setTheResort}/>
            <br/>
                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
                <LetsGoSkiShow resort={resort}/>
                <MapShow resort={resort.name}/>
                </div>
                <br/>
            {user_info[0].error ? <h4 class="card border-success mb-3" border="secondary">Log In or Sign Up to see/post reviews</h4> : <RateComponent resort={resort}/>}
            </div>
            </div>
        );
}

export default LetsGoSkiContainer