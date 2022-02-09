export const flights = (state=[], action) => {
    switch(action.type){
      case 'ADD_CURRENT_FLIGHT':
        return [action.payload]
      case 'ADD_SEARCH_FLIGHT':
        return [action.payload]
      case 'ADD_ERRORS':
        return [...state, action.payload]
      default:
        return state
        }
    }