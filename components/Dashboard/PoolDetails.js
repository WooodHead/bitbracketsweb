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
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  }),
  paragraph: {}
});
class PoolDetails extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <Typography variant="title" gutterBottom>
            Pool Details
          </Typography>
          <Typography className={classes.paragraph} variant="title">
            Pool Name: Office Crypto pool Admin: Chuck Norris Entry Price:
            0.0004ETH Prize: 0.0004ETH
          </Typography>
        </Paper>
      </div>
    );
  }
}
PoolDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PoolDetails);
