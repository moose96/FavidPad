const SET_CURRENT_CHILD = 'video-list/SET_CURRENT_CHILD';

const INITIAL_STATE = {
  currentChild: 0
}

export function setCurrentChild(index) {
  return {
    type: SET_CURRENT_CHILD,
    data: index
  }
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_CURRENT_CHILD:
      return {
        ...state,
        currentChild: action.data
      }
    default:
      return state;
  }
}