import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewEvent } from '../../actions/eventActions'
import PropTypes from 'prop-types'

class NewEvent extends Component {
  state = {
    team_1: '',
    team_2: '',
    date: ''
  }

  buttonClickHandler = () => {
    const { team_1, team_2, date } = this.state
    console.log(this)
    debugger
    this.props.addNewEvent({
      team_1,
      team_2,
      date,
      contestId: this.props.match.params.contestId
    })
  }

  render() {
    const { team_1, team_2, date } = this.state
    return (
      <div>
        <input
          type="text"
          value={team_1}
          placeholder="Team 1"
          onChange={e => this.setState({ team_1: e.target.value })}
        />
        <input
          type="text"
          value={team_2}
          placeholder="Team 1"
          onChange={e => this.setState({ team_2: e.target.value })}
        />
        <input
          type="date"
          value={date}
          placeholder="Date"
          onChange={e => this.setState({ date: e.target.value })}
        />
        <button onClick={this.buttonClickHandler} />
      </div>
    )
  }
}

export default connect(
  null,
  { addNewEvent }
)(NewEvent)
