/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import { injectIntl, defineMessages, formatMessage } from 'react-intl';

const messages = defineMessages({
  homeSection2Title1: {
    id: 'home.section2.title1',
    defaultMessage: 'Be a die hard soccer & Crypto fan',
    description: 'home > section2',
  },
  homeSection2Title2: {
    id: 'home.section2.title2',
    defaultMessage: 'this 2018 World Cup',
    description: 'home > section2',
  },
  homeSection2Title3: {
    id: 'home.section2.title3',
    defaultMessage:
      ' Create your own soccer pool using cryptocurrencies with your friends, pets, family, people in your office or crypto enthusiasts and start predicting who will win each match and win big. Cryptocurrencies are in and are growing, help the crypto community grow by inviting friends to play and spread the word.',
    description: 'home > section2',
  },
  homeSection2Title4: {
    id: 'home.section2.title4',
    defaultMessage: 'Easy',
    description: 'home > section2',
  },
  homeSection2Title5: {
    id: 'home.section2.title5',
    defaultMessage: 'Secure',
    description: 'home > section2',
  },
  homeSection2Title6: {
    id: 'home.section2.title6',
    defaultMessage: '& Fun',
    description: 'home > section2',
  },
});

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    display: 'flex',
    padding: theme.spacing.unit * 3,
    justifyContent: 'center',


  },
  paper2: {
    display: 'flex',
    padding: theme.spacing.unit * 3,
    justifyContent: 'center',
    color: '#E72459',
    fontWeight: '400',
    alignSelf: 'center',


  },
});
function Section2(props) {
  const { intl, classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>

        <Grid item xs={12} sm={6}>

          <Typography
            className={classes.paper}
            variant="display2"
            gutterBottom
            style={{ color: 'black', fontWeight: '500' }}
          >
            {intl.formatMessage(messages.homeSection2Title1)}

            <br />
            {intl.formatMessage(messages.homeSection2Title2)}
          </Typography>
          <Typography
            className={classes.paper}
            variant="headline"
            gutterBottom
            style={{
                color: 'black',
                fontWeight: '400',
                letterSpacing: '0.5px',
              }}
          >
            {intl.formatMessage(messages.homeSection2Title3)}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.paper2}>
          <Typography
            className={classes.paper2}
            align="center"
            variant="display1"
            gutterBottom

          >
            {intl.formatMessage(messages.homeSection2Title4)} <br />{' '}
            {intl.formatMessage(messages.homeSection2Title5)} <br />{' '}
            {intl.formatMessage(messages.homeSection2Title6)}
          </Typography>
        </Grid>


      </Grid>
    </div>
   
  );
}

Section2.propTypes = {
  intl: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default injectIntl(withStyles(styles)(Section2));
