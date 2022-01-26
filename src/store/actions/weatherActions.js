import APIKey from '../../APIKey'
// import { addErrors } from './errorActions'

// ADD_WEATHER
export const fetchCurrentWeather = (userLocation) => {   
    return dispatch => { fetch(`${APIKey}&q=${userLocation.lat}${" "}${userLocation.long}&days=5&aqi=no&alerts=no`)
    .then((res) => {
         if (res.ok) {
             res.json().then((currentWeather) => dispatch(addCurrentWeather(currentWeather)))
            } else {
                res.json().then((res) => dispatch(addErrors(res))) 
                console.log("error", res.status, res.statusText)
          }
        }) 
    }
}

// SEARCH_WEATHER
export const fetchSearchWeather = (searchLocation) => {   
    return dispatch => { fetch(`${APIKey}&q=${searchLocation}&days=5&aqi=no&alerts=no`)
    .then((res) => {
        if (res.ok) {
            res.json().then((searchWeather) => dispatch(addSearchWeather(searchWeather)))
        } else {
            res.json().then((res) => dispatch(addErrors(res)))
            console.log("error", res.status, res.statusText)
      }
        }) 
    }
}

// ADD_CURRENT_WEATHER
const addCurrentWeather = (currentWeather) => ({type: 'ADD_CURRENT_WEATHER', payload: currentWeather})
// ADD_SEARCH_WEATHER
const addSearchWeather = (searchWeather) => ({type: 'ADD_SEARCH_WEATHER', payload: searchWeather})
// Add_ERRORS
const addErrors = (errors) => ({type: 'ADD_ERRORS', payload: errors})

