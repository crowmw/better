import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchContests } from '../actions/contestActions'
import { fetchUser } from '../actions/authActions'
import Header from './Header/Header'
import './style.css'
import ContestList from './ContestList/ContestList'
import NewEvent from './NewEvent/NewEvent'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
    this.props.fetchContests()
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={ContestList} />
          <Route
            exact
            path="/contest/:contestId/new-event"
            component={NewEvent}
          />
        </div>
      </BrowserRouter>
    )
  }
}

export default connect(
  null,
  { fetchContests, fetchUser }
)(App)
