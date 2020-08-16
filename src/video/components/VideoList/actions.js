export const SET_MAX_PAGES = 'pagination/SET_MAX_PAGES';
export const SET_CURRENT_PAGE = 'pagination/SET_CURRENT_PAGE';
export const SET_PAGESIZE = 'pagination/SET_PAGESIZE';

const INITIAL_STATE = {
  // elementsPerPage: 10,
  currentPage: 0,
  maxPages: 0
}

const PAGESIZE_INITIAL_STATE = {
  elementsPerPage: 10
}

export function setMaxPages(value) {
  return {
    type: SET_MAX_PAGES,
    value
  }
}

export function setCurrentPage(value) {
  return {
    type: SET_CURRENT_PAGE,
    value
  }
}

export function setPageSize(value) {
  return {
    type: SET_PAGESIZE,
    value
  }
}

export const pageSizeReducer = (state = PAGESIZE_INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_PAGESIZE:
      return {
        ...state,
        elementsPerPage: action.value
      }
    default:
      return state;
  }
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    // case SET_PAGESIZE:
    //   return {
    //     ...state,
    //     elementsPerPage: action.value
    //   }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.value
      }
    case SET_MAX_PAGES:
      return {
        ...state,
        maxPages: action.value
      }
    default:
      return state;
  }
}