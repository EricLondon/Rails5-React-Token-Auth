import React from 'react'
import { CookiesProvider } from 'react-cookie'
import TokenAuth from 'components/TokenAuth.js'

class AppComponent extends React.Component {
  render() {
    return (
      <CookiesProvider>
        <TokenAuth />
      </CookiesProvider>
    )
  }
}

AppComponent.defaultProps = {}

export default AppComponent
