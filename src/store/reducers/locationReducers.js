export const location = (state=[], action) => {
    switch(action.type){
      case 'ADD_USER':
        return [action.payload]
      default:
        return state
        }
    }
    