import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './index.css';
import App from './containers/App';

import promise from 'redux-promise'
import { applyMiddleware ,createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

const store = applyMiddleware(promise)(createStore)(reducers)

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root'));


