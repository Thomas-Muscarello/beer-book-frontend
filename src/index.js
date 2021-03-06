import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import reportWebVitals from './reportWebVitals';

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux'
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store = {store}>

    <App />

  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
