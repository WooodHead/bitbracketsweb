import React, { Component } from "react";

import Navbar from "../common/Navbar";
import Icon from "../common/Icon";
import Drawer from "../common/Drawer";
// import { NavDropdown, MenuItem } from "react-bootstrap";
import ListDrawer from "../ListDrawer";
import NavigationResponsive from "./NavigationResponsive";
import FirstNavbar from "./FirstNavbar";

class Navigation extends Component {
  render() {
    return (
      <div>
        <div className="navbarResponsive">
          <NavigationResponsive />
        </div>
        <div className="navbar">
          <FirstNavbar languageSelect={this.props.languageSelect} />
        </div>

        <style jsx>{`
          @media (max-width: 425px) {
            .navbar {
              visibility: hidden;
              display: none;
            }
          }
          @media (min-width: 426px) {
            .navbarResponsive {
              visibility: hidden;
              display: none;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Navigation;
