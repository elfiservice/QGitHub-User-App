import { combineReducers } from 'redux'

import appData from './appData'
import searchData from './searchData'
import devDetailsData from './devDetailsData'

const rootReducers = combineReducers({
    appData,
    searchData,
    devDetailsData
})

export default rootReducers