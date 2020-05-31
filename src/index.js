import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './index.css';
import App from './containers/App';
import store from './middleware'

import { Provider } from 'react-redux'


ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root'));


