import Alert from 'utils/alert'
import {
  apiGetCountries
} from 'services/countries/countriesService'
import {
  FETCH_COUNTRIES,
  RECEIVE_COUNTRIES,
  FAILED_COUNTRIES
} from '../types'

const fetch = () => {
  return {
    type: FETCH_COUNTRIES
  }
}

const receive = (countries) => {
  return {
    type: RECEIVE_COUNTRIES,
    payload: {
      countries
    }
  }
}

const failed = (error) => {
  Alert.warning(error)
  return {
    type: FAILED_COUNTRIES,
    payload: {
      error: typeof error === 'object' ? error.message : error
    }
  }
}

const getCountries = () => async (dispatch) => {
  try {
    dispatch(fetch())
    const response = await apiGetCountries()
    console.log('===>', response)
    if (response && response.success) {
      dispatch(receive(response.countries))
      return response
    }
    dispatch(failed(response))
  } catch (error) {
    return dispatch(failed(error))
  }
}

export {
  getCountries
}
