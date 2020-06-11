import { applyMiddleware } from 'redux'
import logger from './logger'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const middleware = applyMiddleware(
    logger,
    sagaMiddleware
)

export { middleware, sagaMiddleware }