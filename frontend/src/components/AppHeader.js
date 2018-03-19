import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class AppHeaderComponent extends React.Component {

  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            Rails React Token Auth
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer exact to="/">
              <NavItem eventKey={1}>
                Home
              </NavItem>
            </LinkContainer>

            {this.props.appState.pages.map(page =>
              <LinkContainer key={'page_' + page.id} exact to={'/page/' + page.id}>
                <NavItem eventKey={'2.' + page.id}>
                  {page.title}
                </NavItem>
              </LinkContainer>
            )}
          </Nav>
          <Nav pullRight>
            {!this.props.appState.jwt &&
              <LinkContainer exact to="/sign-in">
                <NavItem eventKey={3}>
                  Sign In
                </NavItem>
              </LinkContainer>
            }

            {this.props.appState.jwt &&
              <LinkContainer exact to="/sign-out">
                <NavItem eventKey={4}>
                  Sign Out
                </NavItem>
              </LinkContainer>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }

  constructor(props) {
    super(props)
  }

}

export default AppHeaderComponent
