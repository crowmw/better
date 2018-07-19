import { combineReducers } from 'redux'
import * as types from '../actions/types'

export const initialState = {
  entities: {},
  isFetching: false
}

export const entities = (state = initialState.entities, action) => {
  switch (action.type) {
    case types.FETCH_CONTESTS_SUCCESS:
      return action.contests
    default:
      return state
  }
}

export const isFetching = (state = initialState.isFetching, action) => {
  switch (action.type) {
    case types.FETCHING_CONTESTS:
      return true
    case types.FETCH_CONTESTS_SUCCESS:
    case types.FETCH_CONTESTS_ERROR:
      return false
    default:
      return state
  }
}

const contestReducer = combineReducers({
  entities,
  isFetching
})

export default contestReducer
