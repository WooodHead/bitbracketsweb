/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { bindActionCreators } from 'redux';

// import withRoot from '../md/withRoot';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import { IntlProvider, addLocaleData } from 'react-intl';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import initMessages from '../intl/';

import Layout from '../components/Layout';

import withRoot from '../components/HOC/md/withRoot';
import { initStore } from '../store';

import faqQ from './../intl/faqQ';
import Qa from '../components/faq/Qa';

addLocaleData(en);
addLocaleData(es);
const messages = initMessages();
function faq(props) {
  // const { language } = props;
  const language = props.current;

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <Layout>
        <div className="container">
          <div style={{ padding: '1.5em' }}>
            <Qa faqText={faqQ[language]} />
          </div>
        </div>
        <div style={{ marginTop: '5em' }}> <hr /></div>
      </Layout>
    </IntlProvider>
  );
}
faq.propTypes = {
 

  current: PropTypes.string.isRequired,

};
function mapStateToProps(state) {
  return {
    current: state.language.current,
    languages: state.language.languages,
  };
}

const mapDispatchToProps = dispatch => ({
  // changeLanguage: bindActionCreators(changeLanguage, dispatch),
});

export default withRoot(withRedux(initStore, mapStateToProps, mapDispatchToProps)(faq));
