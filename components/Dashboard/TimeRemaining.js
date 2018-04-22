import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Countdown from "react-count-down";

const cb = () => {
  console.log("expired callback");
};

const OPTIONS = {
  endDate: "07/16/2018 10:55 AM",
  cb
};

const styles = theme => ({
  root: theme.mixins.gutters({
    background: "black",

    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  }),
  paragraph: {
    color: "#fff",
    justifyContent: "center",

    display: "flex",
    flexWrap: "wrap"
  }
});
class TimeRemaining extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <Typography className={classes.paragraph} variant="title">
            Time remaining to make your predictions:
            <Countdown options={OPTIONS} />
          </Typography>
        </Paper>
      </div>
    );
  }
}
TimeRemaining.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TimeRemaining);
