
export const fetchUsers = () => {   
    return dispatch => { fetch(`https://rails-2n88.onrender.com/allusers`)
    .then((res) => {
        if (res.ok) {
            res.json().then((users) => dispatch(addUsers(users)))
        } else {
            res.json().then((res) => dispatch(addUsersErrors(res)))
            console.log("error", res.status, res.statusText)
        }
    }) 
    }
}

const addUsers = (users) => ({type: 'ADD_USERS', payload: users})
const addUsersErrors = (errors) => ({type: 'ADD_USERS_ERRORS', payload: errors})