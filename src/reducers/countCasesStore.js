import {
  FETCH_COUNT_CASES,
  RECEIVE_COUNT_CASES,
  SUCCESS_COUNT_CASES,
  FAILED_COUNT_CASES
} from '../actions/types'

const initialState = {
  loading: false,
  currentItem: [],
  meta: {},
  errorMessage: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_COUNT_CASES:
      return { ...state, loading: true }
    case RECEIVE_COUNT_CASES:
      return {
        ...state,
        loading: false,
        currentItem: action.payload.currentItem,
        meta: action.payload.meta
      }
    case SUCCESS_COUNT_CASES:
      return { ...state, loading: false }
    case FAILED_COUNT_CASES:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.error
      }
    default:
      return state
  }
}
