/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { injectIntl, defineMessages } from 'react-intl';


const messages = defineMessages({
  navigationNavbarlink1: {
    id: 'navigation.navbarlink1',
    defaultMessage: 'How does it works?',
    description: 'Navigation link How does it works?',
  },
  navigationNavbarlink2: {
    id: 'navigation.navbarlink2',
    defaultMessage: 'RoadMap',
    description: 'Navigation link rules',
  },
  navigationNavbarlink3: {
    id: 'navigation.navbarlink3',
    defaultMessage: 'My Pools',
    description: 'Navigation link My Pools',
  },
  navigationNavbarlink4: {
    id: 'navigation.navbarlink4',
    defaultMessage: 'start pool',
    description: 'Navigation link start pool',
  },
  navigationNavbarlink5: {
    id: 'navigation.navbarlink5',
    defaultMessage: 'Terms & conditions',
    description: 'Navigation link start pool',
  },
  navigationNavbarlink6: {
    id: 'navigation.navbarlink6',
    defaultMessage: 'Join to Telegram',
    description: 'Navigation link telegram',
  },
});

const styles = theme => ({
  list: {
    listStyleType: 'none',
  },
  aTag: {
    textDecoration: 'none',
  },
  text: {
    color: 'black',
    textAlign: 'right',
    '&:hover': {
      color: '#E91E63',
    },
    [theme.breakpoints.only('xs')]: {
      textAlign: 'center',
    },
  },
});
function Footer(props) {
  const { intl, classes } = props;
  return (

    <div styles={{ backgroundColor: '#fff' }}>
      <Grid container spacing={24} >
        <Grid item xs={6} sm={3} className={classes.paper} >
          <ul className={classes.list}>
            <li>
              <a href="#section3"className={classes.aTag}>
                <Typography variant="subheading" gutterBottom className={classes.text}>
                  {intl.formatMessage(messages.navigationNavbarlink1)}
                </Typography>
              </a>
            </li>
            <li>
              <a href="/roadmap"className={classes.aTag}>
                <Typography variant="subheading" gutterBottom className={classes.text}>
                  {intl.formatMessage(messages.navigationNavbarlink2)}
                </Typography>
              </a>
            </li>
            <li>
              <a href="#section3"className={classes.aTag}>
                <Typography variant="subheading" gutterBottom className={classes.text}>
                  {intl.formatMessage(messages.navigationNavbarlink3)}
                </Typography>
              </a>
            </li>
            <li>
              <a href="/faq"className={classes.aTag}>
                <Typography variant="subheading" gutterBottom className={classes.text}>
                  FAQs
                </Typography>
              </a>
            </li>
          </ul>
        </Grid>
        <Grid item xs={6} sm={3} className={classes.paper}>
          <ul className={classes.list}>
            <li>
              <a
                href="https://www.facebook.com/BitBrackets-401862976892734/"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.aTag}
              >
                <Typography variant="subheading" gutterBottom className={classes.text}>
                 Facebook
                </Typography>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Bitbrackets/bitbrackets_smart_contracts"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.aTag}
              >
                <Typography variant="subheading" gutterBottom className={classes.text}>
                 Github
                </Typography>
              </a>
            </li>
            <li>
              <a
                href="https://t.me/bitbrackets"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.aTag}
              >
                <Typography variant="subheading" gutterBottom className={classes.text}>
                  {intl.formatMessage(messages.navigationNavbarlink6)}
                </Typography>
              </a>
            </li>

          </ul>
        </Grid>
        <Grid item xs={6} sm={3}>
          <ul className={classes.list}>
            <li>
              <a
                href="/faq"
                className={classes.aTag}
              >
                <Typography variant="subheading" gutterBottom className={classes.text}>
                  {intl.formatMessage(messages.navigationNavbarlink5)}
                </Typography>
              </a>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12}>
          <a
            href="https://coralbytes.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.aTag}
          >
            <Typography variant="subheading" gutterBottom align="center" >

                      Powered by:{' '}
              <span style={{ color: '#E91E63' }}>
                        CoralBytes Studios
              </span>

            </Typography>
          </a>


        </Grid>
      </Grid>
    </div>

  );
}
Footer.propTypes = {
  intl: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default injectIntl(withStyles(styles)(Footer));
