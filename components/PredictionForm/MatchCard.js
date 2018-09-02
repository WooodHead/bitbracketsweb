/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, defineMessages } from 'react-intl';
import { withStyles } from 'material-ui/styles';
import Card from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  container: {
    // width: '90%',
    margin: theme.spacing.unit
  },
  controls: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  disabled: {
    background: 'linear-gradient(45deg, #e72564, #e72564)',
    color: 'white'
  }
});

const messages = defineMessages({
  city: {
    id: 'city',
    defaultMessage: 'City:',
    description: 'city'
  },
  stadium: {
    id: 'stadium',
    defaultMessage: 'Stadium:',
    description: 'Stadium'
  }
});

function MatchCard(props) {
  const { classes, match, prediction, update, read, intl } = props;
  const dateInMillis = match.date;
  const theDate = new Date(dateInMillis).toDateString();
  const theHour = new Date(dateInMillis).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric'
  });
  return (
    <Card className={classes.card}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={4}>
          <Typography variant="body2" gutterBottom align="center">
            {theDate} &nbsp; {theHour} &nbsp; &nbsp;
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="body2" gutterBottom align="center">
            <span style={{ color: '#616161' }}>
              {' '}
              {intl.formatMessage(messages.city)}
            </span>{' '}
            {match.data.city}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="body2" gutterBottom align="center">
            <span style={{ color: '#616161' }}>
              {intl.formatMessage(messages.stadium)}{' '}
            </span>
            {match.data.stadium}
          </Typography>
        </Grid>
      </Grid>

      <Grid container className={classes.container} spacing={16}>
        <Grid item className={classes.controls} xs={4}>
          <Button
            variant="fab"
            color={prediction === match.home ? 'primary' : 'default'}
            onClick={() => update(match.index, match.home)}
            classes={{
              disabled: prediction === match.home ? classes.disabled : ''
            }}
            disabled={read}
          >
            {match.homeAbbr}
          </Button>
        </Grid>
        <Grid item className={classes.controls} xs={4}>
          <Button
            variant="fab"
            color={prediction === '' ? 'primary' : 'default'}
            onClick={() => update(match.index, '')}
            classes={{
              disabled: prediction === '' ? classes.disabled : ''
            }}
            disabled={read}
          >
            TIE
          </Button>
        </Grid>
        <Grid item className={classes.controls} xs={4}>
          <Button
            variant="fab"
            color={prediction === match.away ? 'primary' : 'default'}
            onClick={() => update(match.index, match.away)}
            classes={{
              disabled: prediction === match.away ? classes.disabled : ''
            }}
            disabled={read}
          >
            {match.awayAbbr}
          </Button>
        </Grid>
      </Grid>
      <Grid container className={classes.container} spacing={16}>
        <Grid item className={classes.controls} xs={4}>
          <Typography>{match.homeName}</Typography>
          <img
            src={match.homeImag}
            alt="world cup flags"
            height="42"
            width="42"
            className="img-circle"
          />
        </Grid>
        <Grid item className={classes.controls} xs={4}>
          <Typography>-</Typography>
        </Grid>
        <Grid item className={classes.controls} xs={4}>
          <Typography>{match.awayName}</Typography>
          <img
            src={match.awayImag}
            alt="world cup flags"
            height="42"
            width="42"
          />
        </Grid>
      </Grid>
    </Card>
  );
}
MatchCard.defaultProps = {
  prediction: PropTypes.string,
  update: PropTypes.func,
  read: PropTypes.bool
};

MatchCard.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  prediction: PropTypes.string,
  update: PropTypes.func,
  read: PropTypes.bool,
  intl: PropTypes.object.isRequired
};
export default withStyles(styles)(injectIntl(MatchCard));
