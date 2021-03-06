/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { injectIntl, defineMessages } from 'react-intl';
import NavigationResponsive from './NavigationResponsive';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1,

    [theme.breakpoints.down('sm')]: {
      visibility: 'hidden',
      display: 'none'
    }
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  responsive: {
    [theme.breakpoints.down('sm')]: {
      visibility: 'hidden',
      display: 'none'
    }
  },
  buttonResponsive: {
    [theme.breakpoints.up('md')]: {
      visibility: 'hidden',
      display: 'none'
    }
  },
  brandname: {
    textDecoration: 'none',
    color: 'rgb(42, 40, 37)',
    fontWeight: '500',
    lineHeight: '24px',
    fontSize: '20px'
  }
});

const messages = defineMessages({
  navigationNavbarlink1: {
    id: 'navigation.navbarlink1',
    defaultMessage: 'How does it works?',
    description: 'Navigation link How does it works?'
  },
  navigationNavbarlink2: {
    id: 'navigation.navbarlink2',
    defaultMessage: 'Roadmap',
    description: 'Navigation link roadmap'
  },
  navigationNavbarlink3: {
    id: 'navigation.navbarlink3',
    defaultMessage: 'My Pools',
    description: 'Navigation link My Pools'
  },
  navigationNavbarlink4: {
    id: 'navigation.navbarlink4',
    defaultMessage: 'start pool',
    description: 'Navigation link start pool'
  }
});
function FirstNavbar(props) {
  const { classes, intl, languageSelect } = props;
  return (
    <div className={classes.root}>
      <Toolbar>
        <a href="/">
          {' '}
          <img
            src="/static/logo.png"
            alt="cryptocurrency-pool"
            width="30"
            height="30"
          />
        </a>

        <Typography variant="title" color="inherit" className={classes.flex}>
          <a href="/" className={classes.brandname}>
            &nbsp;&nbsp; BitBrackets &nbsp; &nbsp; &nbsp;
          </a>
          <span style={{ color: '#b9f7e0' }}>
            <i className="fas fa-circle fa-xs" />
          </span>
          <span style={{ fontSize: '14px' }}> Beta Rinkeby Test Net</span>
        </Typography>

        <div className={classes.responsive}>
          <Toolbar>
            <Button href="/#section3" color="inherit">
              {intl.formatMessage(messages.navigationNavbarlink1)}
            </Button>
            <Button href="/roadmap" color="inherit">
              {intl.formatMessage(messages.navigationNavbarlink2)}
            </Button>
            <Button href="/faq" color="inherit">
              FAQs
            </Button>
            <Button href="/myPools" color="inherit">
              {intl.formatMessage(messages.navigationNavbarlink3)}
            </Button>

            {/* <Button
              href={`/contest/${process.env.WEB3_CONTEST_NAME}/pools/new`}
              variant="raised"
              style={{ backgroundColor: '#E91E63', color: '#fff' }}
            >
              {intl.formatMessage(messages.navigationNavbarlink4)}
            </Button> */}

            {languageSelect}
          </Toolbar>
        </div>
        <div className={classes.buttonResponsive}>
          <Toolbar>
            <Button
              // href={`/contest/${process.env.WEB3_CONTEST_NAME}/pools/new`}
              href="/marchMadness"
            >
              {intl.formatMessage(messages.navigationNavbarlink4)}
            </Button>

            <NavigationResponsive languageSelect={languageSelect} />
          </Toolbar>
        </div>
      </Toolbar>
    </div>
  );
}

FirstNavbar.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
  languageSelect: PropTypes.object.isRequired
};

export default withStyles(styles)(injectIntl(FirstNavbar));
