import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import rootReducers from '../store'

export const history = createBrowserHistory()

let composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore() {

  const store = createStore(
    rootReducers(history),
    composeEnhancer(
      applyMiddleware(
        thunkMiddleware,
        routerMiddleware(history),
      )
    )
  )

  return store
}
