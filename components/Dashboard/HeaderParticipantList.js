/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Typography from 'material-ui/Typography';

import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import InviteFriends from './InviteFriends';
import { Link, Router } from '../../routes';

class HeaderParticipantList extends Component {
  getJoinUrl = () => {
    const { pool } = this.props;

    const joinUrl = `/pools/${pool.address}/join`;

    return joinUrl;
  }

  handleClickJoin = () => {
    const url = this.getJoinUrl();
    console.log('click url', url);
    Router.pushRoute(url);
  }

  showButtonJoinPool() {
    const { pool } = this.props;

    const joinUrl = this.getJoinUrl();

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
          <Button
            variant="raised"
            style={{ backgroundColor: '#E91E63', color: '#fff' }}
            onClick={this.handleClickJoin}
          >
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
