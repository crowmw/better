export const getContestEntities = state => state.contest.entities

export const getContestIsFetching = state => state.contest.isFetching

export const getContestKeys = state => {
  const contests = getContestEntities(state)
  return contests && Object.keys(contests)
}

export const getContest = (state, id) => {
  const contests = getContestEntities(state)
  return contests && contests[id]
}

export const getContestName = (state, id) => {
  const contest = getContest(state, id)
  return contest && contest.name
}

export const getContestDescription = (state, id) => {
  const contest = getContest(state, id)
  return contest && contest.description
}

export const getContestDate = (state, id) => {
  const contest = getContest(state, id)
  return contest && contest.startDate
}
