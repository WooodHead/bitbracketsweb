/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { withStyles } from 'material-ui/styles';

import PropTypes from 'prop-types';

import { injectIntl, defineMessages } from 'react-intl';
import Button from 'material-ui/Button';
import ToshiButton from '../ToshiButton';
import TrustWalletButton from '../TrustWalletButton';
import MailchimpSubscribe from '../Mailchimp/MailchimpSubscribe';

const messages = defineMessages({
  createprediction: {
    id: 'createprediction',
    defaultMessage: 'Create prediction pools for your favorite sports.',
    description: 'Create prediction pools for your favorite sports.'
  },
  appInstall: {
    id: 'appInstall',
    defaultMessage:
      'For best mobile experience we recommend you play with bitbrackes using any of the following apps.',
    description:
      'for best mobile experience we recommend you play with bitbrackes using any of the following apps'
  },
  navigationNavbarlink4: {
    id: 'navigation.navbarlink4',
    defaultMessage: 'start play',
    description: 'Navigation link start pool'
  },
  poolswith: {
    id: 'poolswith',
    defaultMessage: 'pools with cryptocurrency',
    description: 'pools with cryptocurrency'
  }
});

const styles = theme => ({
  title: {
    color: '#d83562',
    paddingTop: '1em',
    fontWeight: '500',
    fontSize: '28px'
  },
  Subtitle: {
    paddingTop: '1.5em',
    color: '#616161',
    fontSize: '21px'
  },
  playButton: {
    backgroundColor: '#E91E63',
    color: '#fff',
    hight: '48%',

    borderRadius: '5px',

    [theme.breakpoints.up('md')]: {
      width: '25%'
    }
  }
});
function BannerResponsivo(props) {
  const { intl, classes } = props;
  return (
    <div>
      <div align="center" className={classes.title}>
        March Madness {intl.formatMessage(messages.poolswith)}
      </div>

      <div align="center" className={classes.Subtitle}>
        {intl.formatMessage(messages.createprediction)}!
      </div>

      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}
      >
        <Button
          href="/marchMadness"
          // href={`/contest/${process.env.WEB3_CONTEST_NAME}/pools/new`}
          variant="raised"
          fullWidth
          className={classes.playButton}
        >
          {intl.formatMessage(messages.navigationNavbarlink4)}
        </Button>
      </div>
      <div>
        <MailchimpSubscribe />
      </div>
      {/* <div style={{ marginTop: '40px' }}>
        <Typography align="center" variant="subheading" gutterBottom>
          {intl.formatMessage(messages.appInstall)}
        </Typography>
      </div> */}

      {/* <div style={{ display: 'flex', marginLeft: '40px', marginTop: '40px' }}>
        <ToshiButton />
      </div>
      <div style={{ display: 'flex', marginLeft: '40px', marginTop: '40px' }}>
        <TrustWalletButton />
      </div> */}

      {/* <div className="rootBanner">
        <style jsx>
          {`
            .styleButton {
              text-align: center;
            }
            .rootBanner {
              background: url(static/cancha.png);
              background-size: cover;
              background-repeat: no-repeat;
              margin-top: 70px;

              padding-bottom: 170px;
            }
          `}
        </style>
      </div> */}
    </div>
  );
}

BannerResponsivo.propTypes = {
  intl: PropTypes.object.isRequired
};
export default injectIntl(withStyles(styles)(BannerResponsivo));
