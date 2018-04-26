import React, { Component } from "react";

import Grid from "material-ui/Grid";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";

import { injectIntl, defineMessages, FormattedMessage } from "react-intl";

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
  },
  navigationNavbarlink5: {
    id: "navigation.navbarlink5",
    defaultMessage: "Terms & conditions",
    description: "Navigation link start pool"
  }
});

class Footer extends Component {
  render() {
    const { intl } = this.props;
    return (
      <div>
        <footer className="container">
          <Grid container spacing={24}>
            <Grid item xs={6} sm={3}>
              <ListItem button component="a" href="#section3">
                <ListItemText
                  primary={intl.formatMessage(messages.navigationNavbarlink1)}
                />
              </ListItem>
              <ListItem button component="a" href="/rules">
                <ListItemText
                  primary={intl.formatMessage(messages.navigationNavbarlink2)}
                />
              </ListItem>
              <ListItem button component="a" href="/faq">
                <ListItemText primary="FAQs" />
              </ListItem>
            </Grid>
            <Grid item xs={6} sm={3}>
              <ListItem button component="a">
                <ListItemText
                  primary={intl.formatMessage(messages.navigationNavbarlink3)}
                />
              </ListItem>
              <ListItem button component="a">
                <ListItemText primary="Blog" />
              </ListItem>
              <ListItem
                button
                component="a"
                href="https://www.facebook.com/BitBrackets-401862976892734/"
                target="_blank"
              >
                <ListItemText primary="FaceBook" />
              </ListItem>
            </Grid>
            <Grid item xs={6} sm={3}>
              <ListItem button component="a" style={{ textAlign: "right" }}>
                <ListItemText
                  primary={intl.formatMessage(messages.navigationNavbarlink5)}
                />
              </ListItem>
            </Grid>
            <Grid item xs={12}>
              <ListItem
                button
                component="a"
                href="https://coralbytes.com/"
                target="_blank"
                style={{ textAlign: "center" }}
              >
                <ListItemText
                  primary={
                    <span>
                      Powered by:{" "}
                      <span style={{ color: "#E72459" }}>
                        CoralBytes Studios
                      </span>
                    </span>
                  }
                />
              </ListItem>
            </Grid>
          </Grid>
        </footer>
      </div>
    );
  }
}

export default injectIntl(Footer);
