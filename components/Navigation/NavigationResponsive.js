import React, { Component } from "react";

import Navbar from "../common/Navbar";
import Icon from "../common/Icon";
import Drawer from "../common/Drawer";
import { NavDropdown, MenuItem } from "react-bootstrap";
import ListDrawer from "../ListDrawer";

class NavigationResponsive extends Component {
  render() {
    return (
      <div>
        <Navbar
          linkBrand="/"
          drawer={
            <Drawer
              listDrawer={<ListDrawer />}
              colorButtonToggle="#fff"
              drawerWidth="250px"
              backgroundColorDrawer="#323150"
            />
          }
          style={{
            background: "#323150",
            margin: 0,
            borderColor: "#323150",
            borderRadius: 0
          }}
          brandname="BitBrackets"
          styleBrandName={{ color: "#3ffeca" }}
        />

        <style jsx>{``}</style>
      </div>
    );
  }
}

export default NavigationResponsive;
