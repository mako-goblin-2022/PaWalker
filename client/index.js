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
    <Auth0Provider
      domain="dev-7915gybq.au.auth0.com"
      clientId="VLWRdot0kUSE7TLTnQcCQpuywmhznokJ"
      redirectUri={window.location.origin}
      audience="https://pawalker/api"
    >
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      </React.StrictMode>
    </Auth0Provider>,

    document.getElementById('root')
  )
})

export default store
