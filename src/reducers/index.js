const initialState = {
    dataset: undefined,
    currentPhoto: undefined,
    currentIndex: 0,
    currentPage: 1 
}


export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_DATA': {
        return {
          ...state,
          dataset : action.payload,
          currentIndex : 0 
        }
      }
      case 'UPDATE_CURRENT_PAGE': {
        return {
          ...state,
          currentPage : action.payload
        }
      }
      case 'UPDATE_CURRENT_INDEX': {
        return {
            ...state,
            currentIndex : action.payload 
        }
      }
      case 'UPDATE_CURRENT_PHOTO': {
        return {
            ...state,
            currentPhoto : action.payload.photo, 
            currentIndex : action.payload.index ? action.payload.index : state.currentIndex 
        }
      }
      default:
        return state
    }
}