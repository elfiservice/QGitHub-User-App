import { applyMiddleware } from 'redux'
import logger from './logger'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
import reducer from '../reducers'

import { createStore } from 'redux'
const sagaMiddleware = createSagaMiddleware()
const middleware = applyMiddleware(
    logger,
    thunk,
    sagaMiddleware
)
const store = createStore(reducer, middleware)


sagaMiddleware.run(rootSaga)

export default store