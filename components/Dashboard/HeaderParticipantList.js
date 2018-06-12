/* eslint-disable react/forbid-prop-types */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, defineMessages } from 'react-intl';

import Typography from 'material-ui/Typography';

import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import InviteFriends from './InviteFriends';
import { Link, Router } from '../../routes';


const messages = defineMessages({
  ParticipantList: {
    id: 'ParticipantList',
    defaultMessage: 'ParticipantList',
    description: 'ParticipantList',
  },
  JointhePool: {
    id: 'JointhePool',
    defaultMessage: 'Join the Pool',
    description: 'Join the Pool', 
  },
});

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
    const { pool, intl } = this.props;

    const joinUrl = this.getJoinUrl();

    return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={4}>
          <Typography variant="title" gutterBottom>
            {intl.formatMessage(messages.ParticipantList)}
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
            {intl.formatMessage(messages.JointhePool)}
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
  intl: PropTypes.object.isRequired,
};

export default injectIntl(HeaderParticipantList);
