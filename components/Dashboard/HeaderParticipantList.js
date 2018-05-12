/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Typography from 'material-ui/Typography';

import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import InviteFriends from './InviteFriends';

class HeaderParticipantList extends Component {
  ShowButtonJoinPool() {
    const { players } = this.props;
    if (players.length === 0) {
      return (
        <Grid container spacing={24}>
          <Grid item xs={12} sm={4}>
            <Typography style={{ fontWeight: '500', color: 'grey' }} variant="headline" gutterBottom>
        It’s a little bit lonely here... Invite some friends
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button variant="raised" style={{ backgroundColor: 'black', color: '#fff' }}>
          Invite friends
            </Button>
          </Grid>

        </Grid>);
    }
    return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={4}>
          <Typography variant="title" gutterBottom>
          Participant List
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>

          <InviteFriends />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button variant="raised" style={{ backgroundColor: 'black', color: '#fff' }}>
          Publish my score
          </Button>
        </Grid>
      </Grid>
    );
  }

  render() {
    return <div>{this.ShowButtonJoinPool()}</div>;
  }
}
HeaderParticipantList.propTypes = {
  players: PropTypes.array.isRequired,
};

export default HeaderParticipantList;
