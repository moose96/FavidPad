const SET_CUSTOM_HEIGHT = 'content/SET_CUSTOM_HEIGHT';

const INITIAL_STATE = {
  customHeight: false
};

export function setCustomHeight(isCustomHeight) {
  return {
    type: SET_CUSTOM_HEIGHT,
    data: isCustomHeight
  }
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_CUSTOM_HEIGHT:
      return {
        ...state,
        customHeight: action.data
      }
    default:
      return state;
  }
}