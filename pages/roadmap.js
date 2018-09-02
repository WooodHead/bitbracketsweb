/* eslint-disable react/forbid-prop-types */

import React from 'react';
import withRedux from 'next-redux-wrapper';
import PropTypes from 'prop-types';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import { IntlProvider, addLocaleData } from 'react-intl';
import withRoot from '../components/HOC/md/withRoot';
// import { bindActionCreators } from 'redux';

import initMessages from '../intl/';
import Layout from '../components/Layout';
import { initStore } from '../store';
import RoadMap from '../components/RoadMap';

addLocaleData(en);
addLocaleData(es);
const messages = initMessages();

function roadmap(props) {
  // const { language } = props;
  const language = props.current;

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <Layout title="Roadmap">
        <RoadMap />
      </Layout>
    </IntlProvider>
  );
}

roadmap.propTypes = {
  current: PropTypes.string.isRequired
};
function mapStateToProps(state) {
  return {
    current: state.language.current,
    languages: state.language.languages
  };
}
const mapDispatchToProps = dispatch => ({
  // changeLanguage: bindActionCreators(changeLanguage, dispatch),
});

export default withRoot(
  withRedux(initStore, mapStateToProps, mapDispatchToProps)(roadmap)
);
