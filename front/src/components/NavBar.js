import React from "react";
import "./NavBar.css";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
// import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <>
        <Router>
          <MDBNavbar color="indigo" dark expand="md">
            <MDBNavbarBrand>
              <strong className="white-text">Navbar</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <Link to="/Home">
                    <MDBNavLink to="Home">Home</MDBNavLink>
                  </Link>
                </MDBNavItem>
                {/* <MDBNavItem>
                  <MDBNavLink to="#!">Forum</MDBNavLink>
                </MDBNavItem> */}
                <MDBNavItem>
                  <Link to="/Events">
                    <MDBNavLink to="Events">Events</MDBNavLink>
                  </Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link to="/Blog">
                    <MDBNavLink to="Blog">Blog</MDBNavLink>
                  </Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link to="/Blog">
                    <MDBNavLink to="ContactUs">Contact Us</MDBNavLink>
                  </Link>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav>
                <MDBNavItem>
                  <MDBFormInline waves>
                    <div className="md-form my-0">
                      <input
                        className="form-control mr-sm-2"
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                      />

                      <MDBBtn color="deep-purple">Login</MDBBtn>
                      <MDBBtn color="deep-purple">Register</MDBBtn>
                    </div>
                  </MDBFormInline>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </Router>
        {/* <Link to="/Home">
          <li className="active">
            <a href="index.html" className="nav-link text-left">
              Home
            </a>
          </li>
          {/* <li><a href="about.html" className="nav-link text-left">About</a></li> */}
        {/* </Link>
        <Link to="/Courses" className="nav-link text-left">
          Course
        </Link>
        <Link to="/AboutUs" className="nav-link text-left">
          About us
        </Link>
        <Link to="/ContactUs" className="nav-link text-left">
          Contact us
        </Link> */}{" "}
        */}
      </>
    );
  }
}

export default NavBar;
