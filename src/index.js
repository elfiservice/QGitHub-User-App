import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './index.css';
import { Provider } from 'react-redux'
import App from './containers/App';
import { middleware, sagaMiddleware } from './middleware'
import rootSaga from './sagas'
import reducer from './reducers'
import { createStore } from 'redux'

const store = createStore(reducer, middleware)
sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root'));


