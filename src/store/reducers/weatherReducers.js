export const weather = (state=[], action) => {
    switch(action.type){
      case 'ADD_CURRENT_WEATHER':
        return [action.payload]
      case 'ADD_SEARCH_WEATHER':
        return [action.payload]
        case 'ADD_ERRORS':
            return [...state, action.payload]
      default:
        return state
        }
    }