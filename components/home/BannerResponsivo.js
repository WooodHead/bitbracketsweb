/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { injectIntl, defineMessages } from 'react-intl';
import Button from 'material-ui/Button';
import CONF from '../../conf';
import ToshiButton from '../ToshiButton';
import TrustWalletButton from '../TrustWalletButton';

const messages = defineMessages({
  createprediction: {
    id: 'createprediction',
    defaultMessage: 'Create prediction pools for your favorite sports.',
    description: 'Create prediction pools for your favorite sports.',
  },
  appInstall: {
    id: 'appInstall',
    defaultMessage: 'For best mobile experience we recommend you play with bitbrackes using any of the following apps.',
    description: 'for best mobile experience we recommend you play with bitbrackes using any of the following apps',
  },
  navigationNavbarlink4: {
    id: 'navigation.navbarlink4',
    defaultMessage: 'start pool',
    description: 'Navigation link start pool',
  },
});

function BannerResponsivo(props) {
  const { intl } = props;
  return (
    <div className="root">
      <Typography
        align="center"
        variant="display1"
        gutterBottom
        style={{ color: 'black', paddingTop: '1em', fontWeight: '500' }}
      >
          BitBrackets
      </Typography>
      <Typography
        align="center"
        variant="display1"
        gutterBottom
        style={{ color: 'black', fontWeight: '400' }}
      >
Russia 2018
      </Typography>
      <Typography
        align="center"
        variant="headline"
        gutterBottom

      >
        {intl.formatMessage(messages.createprediction)}

      </Typography>


      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <Button

          href={`/contest/${CONF.web3.contestName}/pools/new`}
          variant="raised"
          style={{ backgroundColor: '#E91E63', color: '#fff' }}
        >

          {intl.formatMessage(messages.navigationNavbarlink4)}
        </Button>
      </div>
      <div style={{ marginTop: '40px' }}>
        <Typography
          align="center"
          variant="subheading"
          gutterBottom
        >
          {intl.formatMessage(messages.appInstall)}

        </Typography>
      </div>

      <div style={{ display: 'flex', marginLeft: '40px', marginTop: '40px' }}>
        <ToshiButton />
      </div>
      <div style={{ display: 'flex', marginLeft: '40px', marginTop: '40px' }}>
        <TrustWalletButton />
      </div>

      <div className="rootBanner">


        <style jsx>{`
        .styleButton {
          text-align: center;
        }
          .rootBanner {
            background: url(static/background1.svg);
           background-size: cover;
            background-repeat: no-repeat;
            margin-top: 70px;
        
          padding-bottom: 170px;
        
          }
          
          
        `}
        </style>
      </div>
    </div>
  );
}

BannerResponsivo.propTypes = {

  intl: PropTypes.object.isRequired,

};
export default (injectIntl(BannerResponsivo));
