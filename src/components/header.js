import React from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

import LOGO from "../images/logo.png"
class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <div>
        <Navbar color="danger" light expand="md" className="navbar">
          <NavbarBrand href="/" style={{ padding: "0px" }}>
            <img src={LOGO} />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/" id="link" style={{ color: "white" }}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/jobs" id="link" style={{ color: "white" }}>
                  Find Jobs
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/courses" id="link" style={{ color: "white" }}>
                  Courses
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/employers" id="link" style={{ color: "white" }}>
                  Employers
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/" id="link" style={{ color: "white" }}>
                  Insight
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/" id="link" style={{ color: "white" }}>
                  The Career Hub
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/" id="link" style={{ color: "white" }}>
                  Nourish
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
