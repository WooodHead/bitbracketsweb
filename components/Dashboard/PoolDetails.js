import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Countdown from "react-count-down";
import Grid from "material-ui/Grid";

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
  }
});

class PoolDetails extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={24} className={classes.box}>
          <Grid item sm={12}>
            <Typography variant="title" gutterBottom>
              Pool Details
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography className={classes.paragraph} variant="title">
              Pool Name:<span style={{ fontWeight: "600" }}>
                Office Crypto pool
              </span>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography className={classes.paragraph} variant="title">
              Admin: <span style={{ fontWeight: "600" }}>Chuck Norris </span>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography className={classes.paragraph} variant="title">
              Entry Price:<span style={{ fontWeight: "600" }}> 0.0004ETH</span>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography className={classes.paragraph} variant="title">
              Prize:<span style={{ fontWeight: "600" }}>0.0004ETH</span>
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}
PoolDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PoolDetails);
