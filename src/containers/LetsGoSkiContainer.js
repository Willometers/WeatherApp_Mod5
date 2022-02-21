import LetsGoSkiShow from "../components/LetsGoSkiShow"
import SkiAreaDropdown from "../components/SkiAreaDropdown.js"
import MapShow from "../components/MapShow"
import { useState } from 'react'
import RateComponent from '../components/RateComponent'
import { useSelector } from "react-redux"

const LetsGoSkiContainer = () => {
    const weather = useSelector(state => state.letsSki[0])
    const [resort, setResort ] = useState([])
    
    const setTheResort = (skiArea) => {
        setResort(skiArea)
    }

    if (weather === undefined)
        return (
            <div>
                <SkiAreaDropdown setTheResort={setTheResort} />
                <h4>Please Select a Ski Area</h4>
            </div>
        );
    else
        return (
            <div>
            <SkiAreaDropdown setTheResort={setTheResort} />
            <RateComponent resort={resort}/>
                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
                <LetsGoSkiShow resort={resort}/>
                <MapShow resort={resort}/>
                </div>
            </div>
        );
}


export default LetsGoSkiContainer