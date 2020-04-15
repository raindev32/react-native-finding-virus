import {
  FETCH_COUNTRIES,
  RECEIVE_COUNTRIES,
  FAILED_COUNTRIES
} from '../actions/types'

const initialState = {
  loading: false,
  countries: [],
  meta: {},
  errorMessage: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return { ...state, loading: true }
    case RECEIVE_COUNTRIES:
      return {
        ...state,
        loading: false,
        countries: action.payload.countries,
        meta: action.payload.meta
      }
    case FAILED_COUNTRIES:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.error
      }
    default:
      return state
  }
}
