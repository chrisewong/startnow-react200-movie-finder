/* Add these imports */
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import App from './app';
import rootReducer from './rootReducer';

/* Add these statements */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(
    promiseMiddleware()
  )
));
/* Update render method invoke */
render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);