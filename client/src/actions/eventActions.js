import axios from 'axios'

export const addNewEvent = ({
  team_1,
  team_2,
  date,
  result,
  winner,
  contestId
}) => async dispatch => {
  const body = {
    team_1,
    team_2,
    date,
    result: [],
    winner: null,
    contestId
  }

  const res = await axios.post('/api/event', body)

  if (res.data && res.status === 200) {
    debugger
  }
}
