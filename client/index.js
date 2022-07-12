import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from "react-router-dom";
import './index.css';
import App from './components/App';

import { Provider } from 'react-redux'
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux'


import thunk from 'redux-thunk'

import reducers from './reducers'

import { Auth0Provider } from '@auth0/auth0-react'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
      domain="mako22-rodrigo.au.auth0.com"
      clientId="RGUtB0LkfjzpIHxPe8urrIzZBRNRhlU6"
      redirectUri={window.location.origin}
      audience="https://e-shop/api">
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </React.StrictMode>
  </Auth0Provider>
  
);


