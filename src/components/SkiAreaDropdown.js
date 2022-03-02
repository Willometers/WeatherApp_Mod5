import { Dropdown } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchAreaWeather } from '../store/actions/letsSkiActions'
import { useState } from 'react'

const SkiAreaDropdown = (props) => {

    const skiAreas = useSelector(state => state.skiAreas[0])
    const dispatch = useDispatch()
    const [resort, setResort ] = useState([])

    const handleSelect = (area) => {
      dispatch(fetchAreaWeather(area.location))
      setResort(area)
    }

    props.setTheResort(resort)

    if (!skiAreas)
        return(
            <div>
              <h1>No Ski Areas Loaded</h1>
            </div>
        )
// no superfluous return
    else
        return (
          <div >
        <Dropdown  >
            <div >
              <h1>{resort.name}</h1>
              <br/>
              <Dropdown.Toggle variant="success">NY Ski Areas</Dropdown.Toggle>
              <Dropdown.Menu id="dropdown-basic-button" title="New York Ski Areas">
                        {skiAreas.map((area) => <Dropdown.Item 
                        key={area.id} 
                        onClick={() => handleSelect(area)}
                        >{area.name}
                      </Dropdown.Item >)}
              </Dropdown.Menu>
              <br/>
            </div>
        </Dropdown>
        </div>
        )
}

export default SkiAreaDropdown