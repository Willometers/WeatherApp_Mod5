export const skiAreas = (state=[], action) => {
    switch(action.type){
      case 'ADD_SKI_AREAS':
        return  [action.payload]
      case 'ADD_SKI_ERRORS':
        return [...state, action.payload]
      default:
        return state
        }
    }