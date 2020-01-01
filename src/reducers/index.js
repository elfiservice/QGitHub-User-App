import { combineReducers } from 'redux'

import appData from './appData'
import searchData from './searchData'

const rootReducers = combineReducers({
    appData,
    searchData
})

export default rootReducers