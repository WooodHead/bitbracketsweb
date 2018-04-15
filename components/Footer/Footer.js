import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

import Grid from "material-ui/Grid";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";

class Footer extends Component {
  render() {
    return (
      <footer className="container">
        <Grid container spacing={24}>
          <Grid item xs={6} sm={3}>
            <ListItem button component="a" href="/howDoesItWork">
              <ListItemText
                primary={<FormattedMessage id="navigation.navbarlink1" />}
              />
            </ListItem>
            <ListItem button component="a" href="/rules">
              <ListItemText
                primary={<FormattedMessage id="navigation.navbarlink2" />}
              />
            </ListItem>
            <ListItem button component="a" href="/faq">
              <ListItemText primary="FAQs" />
            </ListItem>
          </Grid>
          <Grid item xs={6} sm={3}>
            <ListItem button component="a">
              <ListItemText
                primary={<FormattedMessage id="navigation.navbarlink3" />}
              />
            </ListItem>
            <ListItem button component="a">
              <ListItemText primary="Blog" />
            </ListItem>
            <ListItem button component="a">
              <ListItemText primary="FaceBook" />
            </ListItem>
          </Grid>
          <Grid item xs={6} sm={3}>
            <ListItem button component="a" style={{ textAlign: "right" }}>
              <ListItemText primary="Terms & Conditions" />
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
                    <span style={{ color: "#E72459" }}>CoralBytes Studios</span>
                  </span>
                }
              />
            </ListItem>
          </Grid>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
