/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Typography from 'material-ui/Typography';

import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
  box: {
    display: 'flex',

    marginTop: '3em',
    padding: '2em',

    justifyContent: 'center',

    backgroundColor: 'white',
    border: '1px solid lightgray',
    borderRadius: '5px',
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
  paragraph: {
    color: '#616161',
  },
});

function PoolDetails(props) {
  const { classes, list } = props;

  return (
    <div>
      <Grid container spacing={24} className={classes.box}>
        <Grid item sm={12}>
          <Typography variant="title" gutterBottom>
            Pool Details
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="subheading">
            <span className={classes.paragraph}>Pool Name: &nbsp;</span>
            <span style={{ fontWeight: '600' }}>{list.contestName}</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="subheading">
            <span className={classes.paragraph}>Manager: &nbsp;</span>{' '}
            <span style={{ fontWeight: '600' }}>{list.manager} </span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="subheading">
            <span className={classes.paragraph}>Entry Price: &nbsp;</span>{' '}
            <span style={{ fontWeight: '600' }}> {list.amountToPlay}ETH</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="subheading">
            <span className={classes.paragraph}>Total Balance: &nbsp;</span>
            <span style={{ fontWeight: '600' }}>{list.totalBalance}ETH</span>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

PoolDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  list: PropTypes.object.isRequired,
};

export default withStyles(styles)(PoolDetails);
