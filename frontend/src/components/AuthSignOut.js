import React from 'react'

class AuthSignOutComponent extends React.Component {
  render() {
    return null
  }

  constructor(props) {
    super(props)
    this.props.propagateSignOut(this.props.history)
  }
}

export default AuthSignOutComponent
