import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux'
import thunk from 'redux-thunk'
import { Auth0Provider } from '@auth0/auth0-react'

import reducers from './reducers'
import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Auth0Provider
      domain="dev-dboe21nb.us.auth0.com"
      clientId="8P7eYdbGMH5uVvmul0WgQjWlb4fkiRmL"
      redirectUri={window.location.origin}
      audience="https://pawalker/api"
    >
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})

export default store
