// import { createPopper } from '@popperjs/core';
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchSearchWeather } from '../store/actions/weatherActions'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const SkiAreaDropdown = () => {

    const skiAreas = useSelector(state => state.skiAreas[0])
    const dispatch = useDispatch()
    const [resort, setResort ] = useState([])

      const handleSelect = (e) => {
        // e.preventDefault()
        console.log("handle select", e.target.id) 
        dispatch(fetchSearchWeather(e.target.id))
        setResort(e.target.innerHTML)
        console.log(e.target.innerHTML)
      }
    
    if (!skiAreas)
        return(
            <div></div>
        )
    else
        return (
        <Dropdown>
            <h1>{resort}</h1>
            <DropdownButton id="dropdown-basic-button" title="Resorts">
                    {skiAreas.map((area) => <Dropdown.Item id={area.location} key={area.id} onClick={handleSelect}> {area.name} </Dropdown.Item >)}
            </DropdownButton>
        </Dropdown>
        )
}

export default SkiAreaDropdown
