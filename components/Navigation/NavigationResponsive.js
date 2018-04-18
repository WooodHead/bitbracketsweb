import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import Button from "material-ui/Button";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import Divider from "material-ui/Divider";
import Icon from "../common/Icon";
import { injectIntl, defineMessages, FormattedMessage } from "react-intl";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};
const messages = defineMessages({
  navigationNavbarlink1: {
    id: "navigation.navbarlink1",
    defaultMessage: "How does it works?",
    description: "Navigation link How does it works?"
  },
  navigationNavbarlink2: {
    id: "navigation.navbarlink2",
    defaultMessage: "rules",
    description: "Navigation link rules"
  },
  navigationNavbarlink3: {
    id: "navigation.navbarlink3",
    defaultMessage: "My Pools",
    description: "Navigation link My Pools"
  },
  navigationNavbarlink4: {
    id: "navigation.navbarlink4",
    defaultMessage: "start pool",
    description: "Navigation link start pool"
  }
});
class TemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes, intl } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List component="nav">
          <ListItem button component="a" href="/">
            <img src="../static/logo.png" width="20" height="20" />
            <span className="brand">&nbsp; BitBrackets</span>
          </ListItem>
          <Divider />
          <ListItem button component="a" href="#section3">
            <span className="ListColor">
              {" "}
              {intl.formatMessage(messages.navigationNavbarlink1)}
            </span>
          </ListItem>
          <Divider />
          <ListItem button component="a" href="#section3">
            <span className="ListColor">
              {intl.formatMessage(messages.navigationNavbarlink2)}
            </span>
          </ListItem>
          <Divider />
          <ListItem button component="a" href="/faq">
            <span className="ListColor"> Faqs</span>
          </ListItem>
          <Divider />
          <ListItem button component="a" href="/faq">
            <span className="ListColor">
              {" "}
              {intl.formatMessage(messages.navigationNavbarlink3)}
            </span>
          </ListItem>
          <Divider />

          <Button href="/howDoesItWork" variant="raised" color="secondary">
            {intl.formatMessage(messages.navigationNavbarlink4)}
          </Button>
        </List>
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer("left", true)}>
          <i className="material-icons">reorder</i>
        </Button>

        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(injectIntl(TemporaryDrawer));
