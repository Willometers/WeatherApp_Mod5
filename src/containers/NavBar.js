import SearchBar from '../components/SearchBar.js'
import HomeButton from "../components/HomeButton"
import ForecastButton from "../components/ForecastButton"
import HourlyButton from "../components/HourlyButton"
import SaveButton from "../components/SaveButton"
import LogoutButton from "../components/LogoutButton"
import ErrorShow from "../components/ErrorShow"
import MySavedLocations from "./MySavedLocations"
import { Navbar, Nav, Container } from 'react-bootstrap'
import LetsGoSkiContainer from '../components/LetsGoSkiButton.js'

function NavBar() {
  
  return (
        <Navbar bg="light" expand="lg" sticky="top" >
        <Container>
        
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav className="me-auto">
             <ErrorShow/>
              <br/>
              <SearchBar/>
              <br/>
              <HomeButton/>
              <br/>
              <HourlyButton/>
              <br/>
              <ForecastButton/>
              <br/>
              <LogoutButton/>
              <br/>
              {/* <SaveButton /> */}
              <br/>
              <MySavedLocations/>
              <LetsGoSkiContainer/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
export default NavBar

