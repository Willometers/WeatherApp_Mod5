import APIKey from '../../APIKey'

// SEARCH_AREA via dropdown input to change q= and hold weather.location in store
export const fetchAreaWeather = (searchLocation) => {   
    return dispatch => { fetch(`${APIKey}&q=${searchLocation}&days=5&aqi=no&alerts=no`)
    .then((res) => {
        if (res.ok) {
            res.json().then((searchWeather) => dispatch(addAreaWeather(searchWeather)))
        } else {
            res.json().then((res) => dispatch(addErrors(res)))
            console.log("error", res.status, res.statusText)
      }
        }) 
    }
}

export const addMapLocation = (resort) => ({type: 'ADD_MAP_LOCATION', payload: resort})
const addAreaWeather = (searchWeather) => ({type: 'ADD_SEARCH_AREA', payload: searchWeather})
export const addErrors = (errors) => ({type: 'ADD_ERRORS', payload: errors})

