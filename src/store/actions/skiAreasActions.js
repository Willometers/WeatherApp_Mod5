// import { addErrors } from './errorActions'

// SEARCH_WEATHER via searchbar input to change q= and hold weather.location in store
export const fetchSkiAreas = () => {   
    return dispatch => { fetch(`skiareas`)
    .then((res) => {
        if (res.ok) {
            res.json().then((skiAreas) => dispatch(addSkiAreas(skiAreas)))
        } else {
            res.json().then((res) => dispatch(addSkiErrors(res)))
            console.log("error", res.status, res.statusText)
        }
    }) 
    }
}

// ADD_SKI_AREA
const addSkiAreas = (skiAreas) => ({type: 'ADD_SKI_AREAS', payload: skiAreas})
// Add_ERRORS
const addSkiErrors = (errors) => ({type: 'ADD_SKI_ERRORS', payload: errors})

