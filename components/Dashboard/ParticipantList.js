import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import grey from "material-ui/colors/grey";

import Grid from "material-ui/Grid";
import Button from "material-ui/Button";
import ListTableParticipant from "./ListTableParticipant";
import ResponsiveListTableParticipant from "./ResponsiveListTableParticipant";

const cb = () => {
  console.log("expired callback");
};

const OPTIONS = {
  endDate: "07/16/2018 10:55 AM",
  cb
};

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
    // flexDirection: "row",
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
      <div>
        <Grid container spacing={24} className={classes.box}>
          <Grid item xs={6} sm={6}>
            <Typography
              style={{ fontWeight: "600" }}
              variant="headline"
              gutterBottom
            >
              Participant List
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} align="right">
            <MuiThemeProvider theme={theme}>
              <Button variant="raised" color="primary">
                Invite Participants
              </Button>
            </MuiThemeProvider>
          </Grid>
          <div className={classes.list}>
            {" "}
            <ListTableParticipant />
          </div>
          <div className={classes.listResponsive}>
            <ResponsiveListTableParticipant />
          </div>
        </Grid>
      </div>
    );
  }
}
ParticipantList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ParticipantList);
