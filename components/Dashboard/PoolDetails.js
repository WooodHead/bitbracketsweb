/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Typography from 'material-ui/Typography';

import Grid from 'material-ui/Grid';
import { injectIntl, defineMessages } from 'react-intl';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  }),
  box: {
    display: 'flex',

    marginTop: '3em',
    padding: '2em',

    justifyContent: 'center',

    backgroundColor: 'white',
    border: '1px solid lightgray',
    borderRadius: '5px',
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3
  },
  paragraph: {
    color: '#616161'
  }
});

const messages = defineMessages({
  PoolDetails: {
    id: 'PoolDetails',
    defaultMessage: 'Pool Details for Contest:',
    description: 'Pool Details for Contest:'
  },
  PoolName: {
    id: 'PoolName',
    defaultMessage: 'Pool Name:',
    description: 'Pool Name:'
  },
  Manager: {
    id: 'Manager',
    defaultMessage: 'Manager:',
    description: 'Manager:'
  },
  EntryFee: {
    id: 'EntryFee',
    defaultMessage: 'Entry Fee:',
    description: 'Entry Fee:'
  },
  PrizePool: {
    id: 'PrizePool',
    defaultMessage: 'Prize Pool:',
    description: 'Prize Pool:'
  },
  ManagerFee: {
    id: 'ManagerFee',
    defaultMessage: 'Manager Fee:',
    description: 'Manager Fee:'
  },
  NumberofPlayers: {
    id: 'NumberofPlayers',
    defaultMessage: 'Number of Players:',
    description: 'Number of Players:'
  },
  PoolAmounts: {
    id: 'PoolAmounts',
    defaultMessage: 'Pool Amounts:',
    description: 'Pool Amounts:'
  },
  PoolBalance: {
    id: 'PoolBalance',
    defaultMessage: 'Pool Balance:',
    description: 'Pool Balance:'
  },
  OwnerFee: {
    id: 'OwnerFee',
    defaultMessage: 'Platform Fee:',
    description: 'Platform Fee:'
  },
  MaxNumofPlayers: {
    id: 'MaxNumofPlayers',
    defaultMessage: 'Max. Num. of Player:',
    description: 'MaxNumofPlayers:'
  },
  MaxBalance: {
    id: 'MaxBalance',
    defaultMessage: 'MaxBalance',
    description: 'MaxBalance'
  }
});
function PoolDetails(props) {
  const { classes, pool, intl } = props;

  console.log('PoolDetails: pool ', pool);

  return (
    <div>
      <Grid container spacing={24} className={classes.box}>
        <Grid item xs={12}>
          <Typography variant="title" gutterBottom>
            {intl.formatMessage(messages.PoolDetails)}{' '}
            <span style={{ fontWeight: '600' }}>{pool.contestName}</span>
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="subheading">
            <span className={classes.paragraph}>
              {intl.formatMessage(messages.PoolName)}
              &nbsp;&nbsp;
            </span>
            <span style={{ fontWeight: '600' }}>{pool.name}</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subheading">
            <span className={classes.paragraph}>
              {intl.formatMessage(messages.Manager)} &nbsp;
            </span>{' '}
            <span style={{ fontWeight: '600' }}>{pool.manager} </span>
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="subheading">
            <span className={classes.paragraph}>
              {intl.formatMessage(messages.NumberofPlayers)} &nbsp;
            </span>
            <span style={{ fontWeight: '600' }}>{pool.numPlayers}</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subheading">
            <span className={classes.paragraph}>
              {intl.formatMessage(messages.EntryFee)} &nbsp;
            </span>{' '}
            <span style={{ fontWeight: '600' }}>
              {' '}
              {pool.amountPerPlayer} ETH
            </span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography variant="subheading">
            <span className={classes.paragraph}>
              {intl.formatMessage(messages.MaxNumofPlayers)} &nbsp;
            </span>
            <span style={{ fontWeight: '600' }}>{pool.maxPlayers}</span>
          </Typography>
        </Grid>

        <Grid item sm={12}>
          <Typography variant="title" gutterBottom>
            {intl.formatMessage(messages.PoolAmounts)}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subheading">
            <span className={classes.paragraph}>
              {intl.formatMessage(messages.MaxBalance)} &nbsp;
            </span>
            <span style={{ fontWeight: '600' }}>{pool.maxBalanceEth} ETH</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subheading">
            <span className={classes.paragraph}>
              {intl.formatMessage(messages.PoolBalance)} &nbsp;
            </span>
            <span style={{ fontWeight: '600' }}>
              {pool.totalBalanceEth} ETH &nbsp; &nbsp;
            </span>
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="subheading">
            <span className={classes.paragraph}>
              {intl.formatMessage(messages.ManagerFee)} &nbsp;
            </span>
            <span style={{ fontWeight: '600' }}>
              {pool.managerFee}
              %&nbsp; &nbsp;{' '}
            </span>
            <span style={{ fontWeight: '600' }}>{pool.managerTotal} ETH</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subheading">
            <span className={classes.paragraph}>
              {intl.formatMessage(messages.OwnerFee)} &nbsp;
            </span>
            <span style={{ fontWeight: '600' }}>{pool.fee}% &nbsp;&nbsp;</span>
            <span style={{ fontWeight: '600' }}>{pool.ownerTotal} ETH</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography variant="subheading">
            <span className={classes.paragraph}>
              {intl.formatMessage(messages.PrizePool)} &nbsp;
            </span>
            <span style={{ fontWeight: '600' }}>
              {pool.priceTotal}% &nbsp;&nbsp;
            </span>
            <span style={{ fontWeight: '600', color: '#E91E63' }}>
              {pool.priceBalance} ETH
            </span>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

PoolDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  pool: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired
};

export default injectIntl(withStyles(styles)(PoolDetails));
