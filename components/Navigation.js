import React, { Component } from "react";

import Navbar from "./common/Navbar";
import Icon from "./common/Icon";
import Drawer from "./common/Drawer";
import { NavDropdown, MenuItem } from "react-bootstrap";

class Navigation extends Component {
  render() {
    return (
      <div>
        <div className="navbarResponsive">
          <Navbar
            drawer={<Drawer />}
            style={{
              background: "#323150",
              margin: 0,
              borderColor: "#323150",
              borderRadius: 0
            }}
            brandname="BitBrackets"
            styleBrandName={{ color: "#3ffeca" }}
          />
        </div>
        <div className="navbar">
          <Navbar
            style={{
              background: "#323150",
              margin: 0,
              borderColor: "#323150",
              borderRadius: 0
            }}
            styleNav={{ float: "right" }}
            brandname="BitBrackets"
            styleBrandName={{ color: "#3ffeca" }}
            link1="Sign Up"
            link2="Log In "
            className="description"
            dropdown={
              <div>
                <NavDropdown
                  className="dropdown"
                  eventKey={3}
                  title={<span className="titledropdown">Language</span>}
                >
                  <MenuItem eventKey={3.1}>
                    <span className="dropdownItem">English</span>
                  </MenuItem>
                  <MenuItem eventKey={3.2}>
                    {" "}
                    <span className="dropdownItem">Spanish</span>
                  </MenuItem>
                  <MenuItem eventKey={3.3}>
                    {" "}
                    <span className="dropdownItem">Portuguese</span>
                  </MenuItem>
                </NavDropdown>
              </div>
            }
          />

          <Navbar
            style={{
              background: "#282840",
              margin: 0,
              borderColor: "#282840",
              borderRadius: 0
            }}
            styleNav={{ marginLeft: "40%" }}
            link1={
              <div>
                <Icon
                  icon={
                    <i className="fas fa-trophy" style={{ color: "#3ffeca" }} />
                  }
                />&nbsp; &nbsp;Contest
              </div>
            }
            link2={
              <div>
                <Icon
                  icon={
                    <i
                      className="fas fa-envelope"
                      style={{ color: "#3ffeca" }}
                    />
                  }
                />&nbsp; &nbsp;Contact
              </div>
            }
            className="description"
          />

          <Navbar
            style={{
              background: "#323150",
              margin: 0,
              borderColor: "#323150",
              borderRadius: 0
            }}
            styleNav={{ float: "left" }}
            link1="Home"
            link2="Contest "
            link3="FAQ"
            link4="Rules"
            className="description"
          />
        </div>

        <style jsx>{`
          .dropdownItem {
            font-size: 9px;
          }
          .description:hover {
            color: #3ffeca;
            background: #323150;
          }
          .titledropdown {
            color: #fff;
            font-size: 9px;
          }
          .titledropdown:hover {
            color: #3ffeca;
          }
          .dropdown {
            background: #323150; !important
          }
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
