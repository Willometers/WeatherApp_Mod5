export const allUsers = (state=[], action) => {
    switch(action.type){
      case 'ADD_USERS':
        return  [action.payload]
      case 'ADD_USERS_ERRORS':
        return [...state, action.payload]
      default:
        return state
        }
    }