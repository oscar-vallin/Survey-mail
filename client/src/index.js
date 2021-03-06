import  'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';

// reducers
import reducers from './reducers';
import axios from 'axios';
window.axios = axios;

// redux dev-tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
        reducers,
        {},
        composeEnhancers( applyMiddleware(thunk)),
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
