import LetsGoSkiShow from "../components/LetsGoSkiShow"
import SkiAreaDropdown from "../components/SkiAreaDropdown.js"
import MapShow from "../components/MapShow"
import { useState } from 'react'
import RateComponent from '../components/RateComponent'
import { useSelector } from "react-redux"
import NavBar from "./NavBar"

const LetsGoSkiContainer = () => {
    const user_info = useSelector(state => state.location)
    const [resort, setResort ] = useState([])
    console.log("LG container", resort.length)
    console.log("LG container", user_info[0])

    const setTheResort = (skiArea) => {
        setResort(skiArea)
    }

    if (resort === undefined)
        return (
            <div>
                <NavBar />
                <h4 style={{color:'red'}} >Data Not Found</h4>
            </div>
        )
    else
        return (
            <div>
                <NavBar />
                <div>
                <SkiAreaDropdown setTheResort={setTheResort}/>
                <br/>
                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
                <LetsGoSkiShow resort={resort}/>
                {resort.name ? <MapShow resort={resort.name}/> : null }
                </div>
                <br/>
                {resort.length < 1 ? null : <RateComponent resort={resort}/>}
                </div>
            </div>
        );
}

export default LetsGoSkiContainer