import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import Typography from "material-ui/Typography";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import grey from "material-ui/colors/grey";

import Grid from "material-ui/Grid";
import Button from "material-ui/Button";

const theme = createMuiTheme({
  palette: {
    primary: { main: grey[900] }
  }
});

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  }),
  box: {
    display: "flex",

    marginTop: "3em",
    padding: "2em",

    justifyContent: "center",

    backgroundColor: "white",
    border: "1px solid lightgray",
    borderRadius: "5px",
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3
  },
  listResponsive: {
    [theme.breakpoints.up("md")]: {
      visibility: "hidden",
      display: "none"
    }
  },

  list: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      visibility: "hidden",
      display: "none"
    }
  }
});

class HeaderParticipantList extends Component {
  // constructor(props) {
  //   // This binding is necessary to make `this` work in the callback
  //   this.ShowButtonJoinPool = this.ShowButtonJoinPool.bind(this);
  // }

  ShowButtonJoinPool() {
    const { classes } = this.props;
    return (
      <Grid container spacing={24}>
        <Grid item xs={6} sm={4}>
          <Typography
            style={{ fontWeight: "600" }}
            variant="headline"
            gutterBottom
          >
            Participant List
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4} align="right">
          <MuiThemeProvider theme={theme}>
            <Button variant="raised" color="primary">
              Invite friends
            </Button>
          </MuiThemeProvider>
        </Grid>
        <Grid item xs={6} sm={4} align="right">
          <MuiThemeProvider theme={theme}>
            <Button variant="raised" color="primary">
              Publish score
            </Button>
          </MuiThemeProvider>
        </Grid>
      </Grid>
    );
  }

  render() {
    return <div>{this.ShowButtonJoinPool()}</div>;
  }
}
HeaderParticipantList.propTypes = {
  classes: PropTypes.object.isRequired,
  list: PropTypes.object.isRequired
};

export default withStyles(styles)(HeaderParticipantList);
