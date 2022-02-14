import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Show from './components/Show'
import { fetchCurrentWeather } from './store/actions/weatherActions'
import ForecastShow from './components/ForecastShow'
import NavBar from './containers/NavBar'
import HourlyContainer from './containers/HourlyContainer'
import Login from './components/Login'
import "./App.css";
import { addUser } from '../src/store/actions/locationsActions.js'
import { fetchSkiAreas } from '../src/store/actions/skiAreasActions.js'
import MySavedLocationsShow from './components/MySavedLocationsShow'
import ErrorShow from './components/ErrorShow'
import SkiAreaDropdown from "./components/SkiAreaDropdown"

function App() {
  const dispatch = useDispatch()

  useEffect(() => { 
    fetch("me")
    .then((res) => res.json())
    .then((res) => dispatch(addUser(res)))
    }, []
  )

  useEffect(() => {
     navigator.geolocation.getCurrentPosition(
      function(position) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        const userLocation = {lat, long};
        dispatch(fetchCurrentWeather(userLocation))
      },
    );
  })

  useEffect(() => { 
    dispatch(fetchSkiAreas())
  }, []
  )

  return (

    <Router>
      <div className="App">
        <NavBar />
        <br/>
        <SkiAreaDropdown/>
          <Routes>
          <Route 
            path="/" 
            index 
            element={<Show/>} 
            />

          <Route 
            path="/forecast" 
            index 
            element={<ForecastShow/>} 
            />

          <Route 
            path="/hourly" 
            index 
            element={<HourlyContainer/>} 
            />

          <Route 
            path="/login" 
            index 
            element={<Login/>} 
            />

          <Route 
            path="/errors" 
            index 
            element={<ErrorShow/>} 
            />

          <Route 
            path="/saved" 
            index 
            element={<MySavedLocationsShow/>} 
            />
          </Routes>
      </div>
    </Router>
  );
}

export default App;