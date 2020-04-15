import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import countCasesStore from './countCasesStore'
import countriesStore from './countriesStore'

export default combineReducers({
    form: formReducer,
    countCasesStore,
    countriesStore
})
