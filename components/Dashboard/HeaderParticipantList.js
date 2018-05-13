/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Typography from 'material-ui/Typography';

import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import InviteFriends from './InviteFriends';

class HeaderParticipantList extends Component {
  showButtonJoinPool() {
    const { pool } = this.props;

    return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={4}>
          <Typography variant="title" gutterBottom>
          Participant List
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>

          <InviteFriends url={`/pools/${pool.address}`} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button variant="raised" style={{ backgroundColor: '#E91E63', color: '#fff' }}>
            Join the Pool
          </Button>
        </Grid>
      </Grid>
    );
  }

  render() {
    return <div>{this.showButtonJoinPool()}</div>;
  }
}
HeaderParticipantList.propTypes = {
  players: PropTypes.array.isRequired,
  pool: PropTypes.object.isRequired,
};

export default HeaderParticipantList;
