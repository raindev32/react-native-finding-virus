import Alert from 'utils/alert'
import {
  apiGetCountCases
} from 'services/countCases/countCasesService'
import {
  FETCH_COUNT_CASES,
  RECEIVE_COUNT_CASES,
  SUCCESS_COUNT_CASES,
  FAILED_COUNT_CASES
} from '../types'

const fetch = () => {
  return {
    type: FETCH_COUNT_CASES
  }
}

const receive = (currentItem) => {
  return {
    type: RECEIVE_COUNT_CASES,
    payload: {
      currentItem
    }
  }
}

const success = (response) => {
  Alert.success(response)
  return {
    type: SUCCESS_COUNT_CASES
  }
}

const failed = (error) => {
  Alert.warning(error)
  return {
    type: FAILED_COUNT_CASES,
    payload: {
      error: typeof error === 'object' ? error.message : error
    }
  }
}

const getCountCases = (data) => async (dispatch) => {
  try {
    dispatch(fetch())
    const response = await apiGetCountCases(data)
    if (response && response.success) {
      dispatch(receive(response[0]))
      return response
    }
    dispatch(failed(response))
  } catch (error) {
    return dispatch(failed(error))
  }
}

export {
  getCountCases
}
