/* eslint-disable react/forbid-prop-types */

import React from 'react';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { injectIntl, defineMessages } from 'react-intl';

import { withStyles } from 'material-ui/styles';

const messages = defineMessages({
  homeSection4Title1: {
    id: 'home.section4.title1',
    defaultMessage: 'Claim the prize',
    description: 'home > section3'
  },
  homeSection4Title2: {
    id: 'home.section4.title2',
    defaultMessage: 'The Balance of the pool goes to the winner',
    description: 'home > section3'
  },
  homeSection4Title3: {
    id: 'home.section4.title3',
    defaultMessage: 'If you are the pool creator you will win a ',
    description: 'home > section3'
  },
  homeSection4Title4: {
    id: 'home.section4.title4',
    defaultMessage: 'fee of the pool for helping to spread crypto awareness',
    description: 'home > section3'
  }
});

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#3b4584',
    paddingTop: '8em',
    paddingBottom: '8em'
  },
  paper: {
    // padding: theme.spacing.unit * 2,

    color: theme.palette.text.secondary
  },
  title: {
    color: '#fff',
    paddingTop: '1em',
    fontWeight: '500',
    fontSize: '28px'
  },
  Subtitle: {
    paddingTop: '1.5em',
    color: '#ffff',

    fontSize: '21px'
  },
  text: {
    paddingTop: '1.5em',
    color: '#fff',
    lineHeight: '1.6',

    fontSize: '16px'
  }
});
function Section4(props) {
  const { intl, classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6} align="center">
          <span className={classes.paper}>
            <img
              src="../../static/Reclama tu premio.svg"
              width="200"
              height="200"
              alt="crypto"
            />
          </span>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.paper}>
            <div align="center" className={classes.Subtitle}>
              {intl.formatMessage(messages.homeSection4Title1)}
            </div>
            <div className={classes.text} align="justify">
              {intl.formatMessage(messages.homeSection4Title2)}
              <br />
              {intl.formatMessage(messages.homeSection4Title3)}

              {intl.formatMessage(messages.homeSection4Title4)}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

Section4.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired
};

export default injectIntl(withStyles(styles)(Section4));
