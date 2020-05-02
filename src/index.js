import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import App from './App';
import rootReducer from './store/reducers/rootReducer';

// eslint-disable-next-line no-restricted-globals
const hostname = location.hostname || 'localhost'; // TODO: this needs to be injected somehow

const client = axios.create({
    baseURL: `http://${hostname}:4000`,
    responseType: 'json',
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(axiosMiddleware(client)));

const store = createStore(rootReducer, enhancer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
