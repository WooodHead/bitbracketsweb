/* eslint-disable react/forbid-prop-types */

import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import TimeRemaining from './TimeRemaining';
import PoolDetails from './PoolDetails';
import ParticipantList from './ParticipantList';

const styles = theme => ({
  root: {
    padding: '222',

    [theme.breakpoints.up('md')]: {
      paddingLeft: '200px',
      paddingRight: '200px',
      marginBottom: '100px',
      marginTop: '100px',
    },
  },
});

const IndexDashboard = (props) => {
  const { pool, classes } = props;
  const dateStartTime = moment.unix(pool.startTime).toISOString();
  return (
    <div className={classes.root}>
      <TimeRemaining date={dateStartTime} />
      <PoolDetails pool={pool} />
      <ParticipantList pool={pool} />
  
    </div>
  );
};

IndexDashboard.propTypes = {
  pool: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(IndexDashboard);
