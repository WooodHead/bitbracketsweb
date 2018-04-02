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
              colorButtonToggle="#E72459"
              drawerWidth="250px"
            />
          }
          style={{
            background: "#fff",
            margin: 0,
            borderColor: "#323150",
            borderRadius: 0
          }}
          images="../../static/logo.png"
          brandname="BitBrackets"
          styleBrandName={{ color: "#3d3d3d" }}
        />

        <style jsx>{``}</style>
      </div>
    );
  }
}

export default NavigationResponsive;
