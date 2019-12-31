import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './index.css';
import App from './containers/App';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

const store = createStore(reducer, middleware)

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root'));


