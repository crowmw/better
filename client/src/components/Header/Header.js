import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './Header.css'

class HeaderNav extends Component {
  renderContent() {
    const { auth } = this.props
    switch (auth) {
      case null:
        return
      case false:
        return (
          <li key="1">
            <a href="/auth/google" className="nav-link">
              Sign in with Google
            </a>
          </li>
        )
      default:
        return (
          <li key="1">
            <a href="/api/logout" className="nav-link">
              Logout
            </a>
          </li>
        )
    }
  }

  render() {
    return (
      <div className="header">
        <Link to="/">
          <img src="http://via.placeholder.com/150x40?text=logo" alt="logo" />
        </Link>
        <ul>{this.renderContent()}</ul>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(HeaderNav)
