import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchAreaWeather } from '../store/actions/letsSkiActions'
import { useState } from 'react'


const SkiAreaDropdown = (props) => {

    const skiAreas = useSelector(state => state.skiAreas[0])
    const dispatch = useDispatch()
    const [resort, setResort ] = useState([])

      const handleSelect = (e) => {
        dispatch(fetchAreaWeather(e.target.id))
        setResort(e.target.innerHTML)
      }
        props.setTheResort(resort)

    
    if (!skiAreas)
        return(
            <div></div>
        )
    else
        return (
          <div >
        <Dropdown  >
            <div >
              <h1>{resort}</h1>
              <br/>
              <DropdownButton   id="dropdown-basic-button" title="New York Ski Areas">
                      {skiAreas.map((area) => <Dropdown.Item id={area.location} key={area.id} onClick={handleSelect}> {area.name} </Dropdown.Item >)}
              </DropdownButton>
              <br/>
            </div>
        </Dropdown>
        </div>
        )
}

export default SkiAreaDropdown