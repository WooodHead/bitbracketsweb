/* eslint-disable react/forbid-prop-types */

import React from 'react';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { injectIntl, defineMessages } from 'react-intl';
import Paper from 'material-ui/Paper';

import { withStyles } from 'material-ui/styles';

const messages = defineMessages({
  homeSection4Title1: {
    id: 'home.section4.title1',
    defaultMessage: 'Claim the prize',
    description: 'home > section3',
  },
  homeSection4Title2: {
    id: 'home.section4.title2',
    defaultMessage: 'The Balance of the pool goes to the winner',
    description: 'home > section3',
  },
  homeSection4Title3: {
    id: 'home.section4.title3',
    defaultMessage: 'If you are the pool creator you will win a ',
    description: 'home > section3',
  },
  homeSection4Title4: {
    id: 'home.section4.title4',
    defaultMessage: 'fee of the pool for helping to spread crypto awareness',
    description: 'home > section3',
  },
});


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});
function Section4(props) {
  const { intl, classes } = props;
  return (

    <div className={classes.root} style={{ marginTop: '6em', marginBottom: '6em', marginLeft: '1em' }}>
      <Grid container spacing={24}>

        <Grid item xs={12} sm={6} align="center">
          <span className={classes.paper}>
            <img src="../../static/img4.png" width="200" height="200" alt="crypto" />
          </span>

        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.paper}>
            <Typography

              variant="display2"
              align="justify"
              gutterBottom
              style={{ color: 'black', fontWeight: '500' }}
            >
              {intl.formatMessage(messages.homeSection4Title1)}
            </Typography>
            <Typography
              classesName={classes.paper}
              variant="headline"
              align="justify"
              style={{
                  color: 'black',
                  fontWeight: '400',
                  letterSpacing: '0.5px',
                }}
            >
              {intl.formatMessage(messages.homeSection4Title2)}
              <br />
              {intl.formatMessage(messages.homeSection4Title3)}


              {intl.formatMessage(messages.homeSection4Title4)}
            </Typography>
          </div>
        </Grid>


      </Grid>
    </div>
  );
}

Section4.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
};

export default injectIntl(withStyles(styles)(Section4));
