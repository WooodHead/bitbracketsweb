import React from "react";

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import { FormattedMessage } from "react-intl";
import navigation from "../../intl/navigation";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function FirstNavbar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <img
            src="../../static/logo.png"
            alt="cryptocurrency-pool"
            width="30"
            height="30"
          />
          <Typography variant="title" color="inherit" className={classes.flex}>
            <Button href="/" color="inherit">
              {" "}
              &nbsp;&nbsp;BitBrackets
            </Button>
          </Typography>
          <Button href="/howDoesItWork" color="inherit">
            <FormattedMessage id="navigation.navbarlink1" />
          </Button>
          <Button href="/rules" color="inherit">
            <FormattedMessage id="navigation.navbarlink2" />
          </Button>
          <Button href="/faq" color="inherit">
            FAQs
          </Button>
          <Button href="/howDoesItWork" color="inherit">
            <FormattedMessage id="navigation.navbarlink3" />
          </Button>
          <Button href="/howDoesItWork" variant="raised" color="secondary">
            <FormattedMessage id="navigation.navbarlink4" />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

FirstNavbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FirstNavbar);
