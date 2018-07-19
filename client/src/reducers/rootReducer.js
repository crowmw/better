import { combineReducers } from 'redux'
import authReducer from './authReducer'
import contestReducer from './contestReducer'

export default combineReducers({
  auth: authReducer,
  contest: contestReducer
})
