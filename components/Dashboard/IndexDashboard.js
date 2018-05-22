/* eslint-disable react/forbid-prop-types */

import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { injectIntl, defineMessages } from 'react-intl';
import Typography from 'material-ui/Typography';

import TimeRemaining from './TimeRemaining';
import PoolDetails from './PoolDetails';
import ParticipantList from './ParticipantList';
import Messages from './Messages';

const messages = defineMessages({
  predictionSuccessMessage: {
    id: 'predictionSuccessMessage',
    defaultMessage: 'Your prediction has been successfully processed. Please give it refresh if it is not listed yet.',
    description: 'predictionSuccessMessage',
  },
});


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
  const {
    pool, classes, predictionSuccess, intl,
  } = props;
  const dateStartTime = moment.unix(pool.startTime).toISOString();
  const msg = (
    <Typography variant="subheading" style={{ color: 'green' }}>
      {intl.formatMessage(messages.predictionSuccessMessage)}
    </Typography>);
  return (
    <div className={classes.root}>
      <Messages messages={predictionSuccess ? msg : undefined} />
      <TimeRemaining date={dateStartTime} />
      <PoolDetails pool={pool} />
      <ParticipantList pool={pool} />

    </div>
  );
};

IndexDashboard.defaultProps = {

  predictionSuccess: undefined,
};
IndexDashboard.propTypes = {
  pool: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  predictionSuccess: PropTypes.string,
  intl: PropTypes.object.isRequired,
};
export default injectIntl(withStyles(styles)(IndexDashboard));
