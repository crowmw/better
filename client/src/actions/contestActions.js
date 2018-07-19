import * as types from './types'
import axios from 'axios'
import { normalize } from 'normalizr'
import { contestSchema } from '../services/normalizr'

export const fetchContests = () => async dispatch => {
  dispatch({ type: types.FETCHING_CONTESTS })

  const res = await axios.get('/api/contest')

  if (res.data && res.status === 200) {
    return dispatch({
      type: types.FETCH_CONTESTS_SUCCESS,
      contests: normalize(res.data, [contestSchema]).entities.contest
    })
  }

  return dispatch({ type: types.FETCH_CONTESTS_ERROR, error: res.message })
}
