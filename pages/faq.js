/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { bindActionCreators } from 'redux';

// import withRoot from '../md/withRoot';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import { IntlProvider, addLocaleData } from 'react-intl';
// import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';

import Layout from '../components/Layout';

import withRoot from '../components/HOC/md/withRoot';
import { initStore } from '../store';

import faqQ from './../intl/faqQ';
import Qa from '../components/faq/Qa';

addLocaleData(en);
addLocaleData(es);

function faq(props) {
  // const { language } = props;
  const lang = 'es';

  return (
    <IntlProvider locale={lang}>
      <Layout>
        <div className="container">
          <div style={{ padding: '1.5em' }}>
            <Qa faqText={faqQ[lang]} />
          </div>
        </div>
      </Layout>
    </IntlProvider>
  );
}
faq.propTypes = {
  // language: PropTypes.func,
};
function mapStateToProps(state) {
  return {
    // current: state.language.current,
    languages: state.language.languages,
  };
}

const mapDispatchToProps = dispatch => ({
  // changeLanguage: bindActionCreators(changeLanguage, dispatch),
});

export default withRoot(withRedux(initStore, mapStateToProps, mapDispatchToProps)(faq));
