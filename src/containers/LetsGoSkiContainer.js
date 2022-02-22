import LetsGoSkiShow from "../components/LetsGoSkiShow"
import SkiAreaDropdown from "../components/SkiAreaDropdown.js"
import MapShow from "../components/MapShow"
import { useState } from 'react'
import RateComponent from '../components/RateComponent'
import { useSelector } from "react-redux"
import ReviewsContainer from "./ReviewsContainer"

const LetsGoSkiContainer = () => {
    const weather = useSelector(state => state.letsSki[0])
    const user_info = useSelector(state => state.location)
    const [resort, setResort ] = useState([])

    const setTheResort = (skiArea) => {
        setResort(skiArea)
    }

    // console.log("container", resort)

    if (!weather)
        return ( 
            <div>
                <SkiAreaDropdown setTheResort={setTheResort} />
                <h4>Please Select a Ski Area</h4>
            </div>
        );
    else
        return (
            <div>
            <SkiAreaDropdown setTheResort={setTheResort}/>
            {user_info[0].error ? null : <RateComponent resort={resort}/>}
                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
                <LetsGoSkiShow resort={resort}/>
                <MapShow resort={resort.name}/>
                </div>
            <ReviewsContainer id={resort.id}/>
            </div>
        );
}

export default LetsGoSkiContainer