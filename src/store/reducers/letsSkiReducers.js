export const letsSki = (state=[], action) => {
    switch(action.type){
      case 'ADD_SEARCH_AREA':
        return [action.payload]
        case 'ADD_MAP_LOCATION':
        return [...state, action.payload]
      case 'ADD_ERRORS':
        return [...state, action.payload]
      default:
        return state
        }
    }