/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Countdown from 'react-count-down';
import { injectIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
  TimeRemaining: {
    id: 'TimeRemaining',
    defaultMessage: 'Time remaining to make your predictions:',
    description: 'Time remaining to make your predictions'
  }
});
const cb = () => {
  console.log('expired callback');
};

// const OPTIONS = {
//   endDate: '06/14/2018 9:00 AM',
//   cb,
// };

const styles = theme => ({
  root: theme.mixins.gutters({
    background: 'black',

    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  }),
  paragraph: {
    color: '#fff',
    justifyContent: 'center',

    display: 'flex',
    flexWrap: 'wrap'
  }
});
function TimeRemaining(props) {
  const { classes, date, intl } = props;
  const OPTIONS = {
    endDate: date,
    cb
  };
  return (
    <div>
      <Paper className={classes.root}>
        <Typography className={classes.paragraph} variant="title">
          {intl.formatMessage(messages.TimeRemaining)}

          <Countdown options={OPTIONS} />
        </Typography>
      </Paper>
    </div>
  );
}

TimeRemaining.propTypes = {
  classes: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  intl: PropTypes.object.isRequired
};

export default injectIntl(withStyles(styles)(TimeRemaining));
