/* eslint-disable react/forbid-prop-types */

import React from 'react';
import withRedux from 'next-redux-wrapper';
import PropTypes from 'prop-types';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import { IntlProvider, addLocaleData } from 'react-intl';
import withRoot from '../components/HOC/md/withRoot';
import initMessages from '../intl/';
import { initStore } from '../store';
import Layout from '../components/Layout';
import MyPoolsDashboard from '../components/MyPools/MyPoolsDashboard';

addLocaleData(en);
addLocaleData(es);
const messages = initMessages();

function myPools(props) {
  const language = props.current;
  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <Layout>
        <MyPoolsDashboard />
      </Layout>
    </IntlProvider>
  );
}

myPools.propTypes = {
  current: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    current: state.language.current,
    languages: state.language.languages
  };
}

export default withRoot(withRedux(initStore, mapStateToProps)(myPools));
