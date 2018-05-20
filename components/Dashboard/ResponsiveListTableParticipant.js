/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, defineMessages } from 'react-intl';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

import Grid from 'material-ui/Grid';


const messages = defineMessages({
  PlayersAddress: {
    id: 'PlayersAddress',
    defaultMessage: 'Players Address',
    description: 'Players Address',
  },
  lonelyhere: {
    id: 'lonelyhere',
    defaultMessage: 'It’s a little bit lonely here... Invite some friends',
    description: 'lonely here',
  },
  Predictions: {
    id: 'Predictions',
    defaultMessage: 'Predictions',
    description: 'Predictions',
  },
  Score: {
    id: 'Score',
    defaultMessage: 'Score',
    description: 'Score',
  },
  viewpredictions: {
    id: 'viewpredictions',
    defaultMessage: 'view predictions',
    description: 'viewpredictions',
  },
});

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 2,
    overflowX: 'auto',
  },
  table: {},
});

function ResponsiveListTableParticipant(props) {
  const { players, intl } = props;
  if (players.length === 0) {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={4}>
          <Typography style={{ fontWeight: '500', color: 'grey' }} variant="headline" gutterBottom>
            {intl.formatMessage(messages.lonelyhere)}

          </Typography>
        </Grid>
      </Grid>);
  }

  return (
    <div>
      <div>
        {players.map(n => (
          <div key={Math.random()}>
            <Grid container spacing={24}>
              <Grid item xs={6}>
                <Typography style={{ color: '#616161' }} variant="subheading" gutterBottom>
                  {intl.formatMessage(messages.PlayersAddress)}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  display="flex"
                  justify-content="flex-end"
                  style={{ fontWeight: '500' }}
                  variant="subheading"
                  gutterBottom
                >
                  {n.address}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={24}>
              <Grid item xs={6}>
                <Typography style={{ color: '#616161' }} variant="subheading" gutterBottom>
                  {intl.formatMessage(messages.Predictions)}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  display="flex"
                  justify-content="flex-end"
                  style={{ fontWeight: '500' }}
                  variant="subheading"
                  gutterBottom
                >
                  {intl.formatMessage(messages.viewpredictions)} {n.status}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={24}>
              <Grid item xs={6}>
                <Typography style={{ color: '#616161' }} variant="subheading" gutterBottom>
                  {intl.formatMessage(messages.Score)}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  display="flex"
                  justify-content="flex-end"
                  style={{ fontWeight: '500' }}
                  variant="subheading"
                  gutterBottom
                >
                  {n.score}
                </Typography>
              </Grid>
            </Grid>

            <Divider />
          </div>
        ))}
      </div>
    </div>
  );
}

ResponsiveListTableParticipant.propTypes = {
  // classes: PropTypes.object.isRequired,
  players: PropTypes.array.isRequired,
  intl: PropTypes.object.isRequired,
};

export default injectIntl(withStyles(styles)(ResponsiveListTableParticipant));
