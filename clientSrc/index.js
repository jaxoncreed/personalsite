import './styles/index.scss'
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import routes from './routes.jsx'
import { Router, hashHistory } from 'react-router'

// Grab the state from a global injected into server-generated HTML
const preloadedState = window.__PRELOADED_STATE__
console.log(preloadedState)

// Create Redux store with initial state
const store = createStore(reducer, preloadedState)

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
)
