import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import authReducer from './auth/reducers'
import tictactoeReducer from './tictactoe/reducers'

const listReducers = (history) =>
combineReducers({
    router: connectRouter(history),
    authReducer,
    tictactoeReducer
  })

export default listReducers
