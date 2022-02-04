export const location = (state=[], action) => {
    switch(action.type){
      // case 'CURRENT_LOCATION':
      //   return [action.payload]
      case 'ADD_USER':
        return [action.payload]
      default:
        return state
        }
    }
    