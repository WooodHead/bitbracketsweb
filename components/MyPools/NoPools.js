/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { injectIntl, defineMessages } from 'react-intl';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

const messages = defineMessages({
  CreateNewPool: {
    id: 'CreateNewPool',
    defaultMessage: 'Create New Pool',
    description: 'Create New Pool',
  },
  nopools: {
    id: 'nopools',
    defaultMessage: 'You don´t have Pools',
    description: 'You don´t have Pools',
  },
  CreateANewPool: {
    id: 'CreateANewPool',
    defaultMessage: 'Create a new Pool here',
    description: 'Create a New Pool here',
  },

});


const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});


function NoPools(props) {
  const { classes, intl } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>

        <Grid container spacing={24}>
          <Grid item xs={6} sm={3}>
            <Typography variant="headline" component="h3">
              {intl.formatMessage(messages.nopools)}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography component="p">
              {intl.formatMessage(messages.CreateANewPool)}

     
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button href="/contest/Russia2018/pools/new" variant="raised" color="primary">
              {intl.formatMessage(messages.CreateNewPool)}

            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

NoPools.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
};

export default (injectIntl(withStyles(styles)(NoPools)));
