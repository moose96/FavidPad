const SET_PAGESIZE = 'pagesize/SET_PAGESIZE';

const INITIAL_STATE = {
  pagesize: 10
}

export function setPagesize(value) {
  return {
    type: SET_PAGESIZE,
    value
  }
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_PAGESIZE:
      return {
        pagesize: action.value
      }
    default:
      return state;
  }
}