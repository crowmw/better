import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  getContestKeys,
  getContestIsFetching
} from '../../selectors/contestSelector'
import Contest from '../Contest/Contest'

class ContestList extends Component {
  contestClickHandler = contestId => {
    this.props.history.push(`/contest/${contestId}/new-event`)
  }

  render() {
    const { isFetching, contests } = this.props

    if (!isFetching) {
      return (
        <ul className="contest-list">
          {contests.map(contest => (
            <Contest
              key={contest}
              id={contest}
              contestClick={() => this.contestClickHandler(contest)}
            />
          ))}
        </ul>
      )
    }
    return 'Pobieram...'
  }
}

const mapState = state => ({
  contests: getContestKeys(state),
  isFetching: getContestIsFetching(state)
})

export default connect(mapState)(ContestList)
