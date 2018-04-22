import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import Typography from "material-ui/Typography";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import grey from "material-ui/colors/grey";

import Grid from "material-ui/Grid";
import Button from "material-ui/Button";
import ListTableParticipant from "./ListTableParticipant";
import ResponsiveListTableParticipant from "./ResponsiveListTableParticipant";
import HeaderParticipantList from "./HeaderParticipantList";

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
    // display: "flex",

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

class ParticipantList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.box}>
        <HeaderParticipantList list={this.props.list} />

        <Grid className={classes.list}>
          {" "}
          <ListTableParticipant list={this.props.list} />
        </Grid>

        <div className={classes.listResponsive}>
          <ResponsiveListTableParticipant list={this.props.list} />
        </div>
      </div>
    );
  }
}
ParticipantList.propTypes = {
  classes: PropTypes.object.isRequired,
  list: PropTypes.object.isRequired
};

export default withStyles(styles)(ParticipantList);
