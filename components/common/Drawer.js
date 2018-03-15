import React, { Component } from "react";
import Drawer from "material-ui/Drawer";
import Button from "material-ui/Button";
import List from "material-ui/List";
import Divider from "material-ui/Divider";
import MenuIcon from "material-ui-icons/Menu";
import ListDrawer from "../ListDrawer";

class LeftSideNavBar extends Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };
  render() {
    return (
      <div>
        <Button
          onClick={this.toggleDrawer("left", true)}
          style={{ color: "#fff" }}
        >
          <MenuIcon />
        </Button>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div
            className="drawerWidth"
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            <ListDrawer />
          </div>
        </Drawer>
        <style jsx>{`
          .drawerWidth {
            width: 250px;

            background-color: #323150;
          }
        `}</style>
      </div>
    );
  }
}
export default LeftSideNavBar;
