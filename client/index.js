import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './app/store'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <React.StrictMode>
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
      </Auth0Provider>
    </React.StrictMode>,

    document.getElementById('root')
  )
})

export default store
