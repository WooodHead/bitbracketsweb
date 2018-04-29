import React from "react";

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import pink from "material-ui/colors/pink";

import { injectIntl, defineMessages, FormattedMessage } from "react-intl";
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

const theme = createMuiTheme({
  palette: {
    primary: { main: pink[500] }
  }
});

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
function FirstNavbar(props) {
  const { classes, intl } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <img
            src="/static/logo.png"
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
          <Button href="#section3" color="inherit">
            {intl.formatMessage(messages.navigationNavbarlink1)}
          </Button>
          <Button href="/rules" color="inherit">
            {intl.formatMessage(messages.navigationNavbarlink2)}
          </Button>
          <Button href="/faq" color="inherit">
            FAQs
          </Button>
          <Button href="/howDoesItWork" color="inherit">
            {intl.formatMessage(messages.navigationNavbarlink3)}
          </Button>
          <MuiThemeProvider theme={theme}>
            <Button href="/howDoesItWork" variant="raised" color="primary">
              {intl.formatMessage(messages.navigationNavbarlink4)}
            </Button>
          </MuiThemeProvider>
        </Toolbar>
      </AppBar>
    </div>
  );
}

FirstNavbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(injectIntl(FirstNavbar));
