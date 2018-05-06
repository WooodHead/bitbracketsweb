/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';

import Typography from 'material-ui/Typography';

import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

class HeaderParticipantList extends Component {
  ShowButtonJoinPool() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={4}>
          <Typography variant="title" gutterBottom>
            Participant List
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button variant="raised" style={{ backgroundColor: 'black', color: '#fff' }}>
            Invite friends
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button variant="raised" style={{ backgroundColor: 'black', color: '#fff' }}>
            Publish score
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
  // classes: PropTypes.object.isRequired,
};

export default HeaderParticipantList;
