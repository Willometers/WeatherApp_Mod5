import HomeButton from "../components/HomeButton"
import ForecastButton from "../components/ForecastButton"
import HourlyButton from "../components/HourlyButton"
import SaveButton from "../components/SaveButton"
import Signup from "../components/Signup"
import LogoutButton from "../components/LogoutButton"
import ErrorShow from "../components/ErrorShow"
import SkiAreaDropdown from "../components/SkiAreaDropdown"
import MySavedLocations from "./MySavedLocations"
import { Navbar, Nav, Container } from 'react-bootstrap'

function NavBar() {
  
  return (
        <Navbar bg="light" expand="lg" sticky="top" >
        <Container>
        <ErrorShow/>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <SkiAreaDropdown/>
              <HomeButton/>
              <HourlyButton/>
              <ForecastButton/>
              <LogoutButton/>
              <SaveButton />
              <MySavedLocations/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
export default NavBar

