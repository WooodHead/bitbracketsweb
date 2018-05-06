/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 2,
    overflowX: 'auto',
  },
  table: {},
});

function ResponsiveListTableParticipant(props) {
  const { classes, list } = props;

  return (
    <div>
      <div>
        {list.players.map(n => (
          <div key={Math.random()}>
            <Grid container spacing={24}>
              <Grid item xs={6}>
                <Typography style={{ color: '#616161' }} variant="subheading" gutterBottom>
                  Name:
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
                  {n.playerName}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={24}>
              <Grid item xs={6}>
                <Typography style={{ color: '#616161' }} variant="subheading" gutterBottom>
                  Predictions
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
                  view predictions {n.status}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={24}>
              <Grid item xs={6}>
                <Typography style={{ color: '#616161' }} variant="subheading" gutterBottom>
                  Score:
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
      <Typography style={{ fontWeight: '500', color: 'grey' }} variant="headline" gutterBottom>
        It’s a little bit lonely here... Invite some friends
      </Typography>
    </div>
  );
}

ResponsiveListTableParticipant.propTypes = {
  classes: PropTypes.object.isRequired,
  list: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResponsiveListTableParticipant);
