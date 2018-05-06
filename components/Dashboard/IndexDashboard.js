/* eslint-disable react/forbid-prop-types */

import React from 'react';
import { connect } from 'react-redux';
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
function IndexDashboard(props) {
  const { list, classes } = props;
  return (
    <div className={classes.root}>
      <TimeRemaining />
      <PoolDetails list={list} />
      <ParticipantList list={list} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    list: state.list,
  };
}

IndexDashboard.propTypes = {
  list: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};
export default connect(mapStateToProps)(withStyles(styles)(IndexDashboard));
