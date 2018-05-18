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
    marginTop: theme.spacing.unit * 3,
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
    paddingRight: theme.spacing.unit * 3,
  },
  paragraph: {
    color: '#616161',
  },
});

const messages = defineMessages({
  PoolDetails: {
    id: 'PoolDetails',
    defaultMessage: 'Pool Details for Contest:',
    description: 'Pool Details for Contest:',
  },
  PoolName: {
    id: 'PoolName',
    defaultMessage: 'Pool Name:',
    description: 'Pool Name:',
  },
  Manager: {
    id: 'Manager',
    defaultMessage: 'Manager:',
    description: 'Manager:',
  },
  EntryFee: {
    id: 'EntryFee',
    defaultMessage: 'Entry Fee:',
    description: 'Entry Fee:',
  },
  PricePool: {
    id: 'PricePool',
    defaultMessage: 'Price Pool:',
    description: 'Price Pool:',
  },
  ManagerFee: {
    id: 'ManagerFee',
    defaultMessage: 'Manager Fee:',
    description: 'Manager Fee:',
  },
  NumberofPlayers: {
    id: 'NumberofPlayers',
    defaultMessage: 'Number of Players:',
    description: 'Number of Players:',
  },
});
function PoolDetails(props) {
  const { classes, pool, intl } = props;

  return (
    <div>
      <Grid container spacing={24} className={classes.box}>
        <Grid item xs={12}>
          <Typography variant="title" gutterBottom>
            {intl.formatMessage(messages.PoolDetails)} {pool.contestName}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="subheading">
            <span className={classes.paragraph}>{intl.formatMessage(messages.PoolName)}&nbsp;&nbsp;
            </span>
            <span style={{ fontWeight: '600' }}>{pool.name}</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subheading">
            <span className={classes.paragraph}>{intl.formatMessage(messages.Manager)} &nbsp;</span>{' '}
            <span style={{ fontWeight: '600' }}>{pool.manager} </span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subheading">
            <span className={classes.paragraph}>{intl.formatMessage(messages.EntryFee)} &nbsp;</span>{' '}
            <span style={{ fontWeight: '600' }}> {pool.amountPerPlayer} ETH</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subheading">
            <span className={classes.paragraph}>{intl.formatMessage(messages.PricePool)} &nbsp;</span>
            <span style={{ fontWeight: '600' }}>{pool.priceBalance} ETH</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subheading">
            <span className={classes.paragraph}>{intl.formatMessage(messages.ManagerFee)} &nbsp;</span>
            <span style={{ fontWeight: '600' }}>{pool.managerFee}%</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subheading">
            <span className={classes.paragraph}>{intl.formatMessage(messages.NumberofPlayers)} &nbsp;</span>
            <span style={{ fontWeight: '600' }}>{pool.numPlayers}</span>
          </Typography>
        </Grid>

      </Grid>
    </div>
  );
}

PoolDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  pool: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,

};

export default injectIntl(withStyles(styles)(PoolDetails));
