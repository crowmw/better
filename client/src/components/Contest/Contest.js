import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  getContestName,
  getContestDescription,
  getContestDate
} from '../../selectors/contestSelector'

class Contest extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    contestClick: PropTypes.func
  }

  render() {
    const { name, description, date } = this.props

    return (
      <li
        onClick={this.props.contestClick}
      >{`${name} - ${description} - ${date}`}</li>
    )
  }
}

const mapState = (state, props) => ({
  name: getContestName(state, props.id),
  description: getContestDescription(state, props.id),
  date: getContestDate(state, props.id)
})

export default connect(mapState)(Contest)
