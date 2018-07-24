import * as types from './types'
import axios from 'axios'
import { normalize } from 'normalizr'
import { contestSchema } from '../services/normalizr'

export const fetchContests = () => async dispatch => {
  dispatch({ type: types.FETCHING_CONTESTS })

  try {
    const res = await axios.get('/api/contest')

    if (res.data.data && res.status === 200) {
      console.log(res)
      const normalized = normalize(res.data.data, [contestSchema])
      return dispatch({
        type: types.FETCH_CONTESTS_SUCCESS,
        contests: normalized.entities.contest || {}
      })
    }
  } catch ({
    response: {
      data: { error },
      status
    }
  }) {
    return dispatch({
      type: types.FETCH_CONTESTS_ERROR,
      error,
      status
    })
  }
}
