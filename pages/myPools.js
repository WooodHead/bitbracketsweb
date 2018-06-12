
/* eslint-disable react/forbid-prop-types */

import React from 'react';
import withRedux from 'next-redux-wrapper';

import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import { IntlProvider, addLocaleData } from 'react-intl';
import withRoot from '../components/HOC/md/withRoot';
// import { bindActionCreators } from 'redux';

import initMessages from '../intl/';
import { initStore } from '../store';


import { fetchPools } from '../actions';
import Layout from '../components/Layout';
import MyPoolsDashboard from '../components/MyPools/MyPoolsDashboard';


addLocaleData(en);
addLocaleData(es);
const messages = initMessages();


class myPools extends React.Component {
  componentWillMount() {
    // this.props.fetchPools('0xE1F8feA4699Ce3e0196923E6fA16F773600E59e0');
    this.props.fetchPools(this.props.defaultAccount);
  }

  render() {
    const language = this.props.current;
    return (
      <IntlProvider locale={language} messages={messages[language]}>
        <Layout>

          <MyPoolsDashboard pools={this.props.pools} />
        </Layout>
      </IntlProvider>

    );
  }
}
myPools.defaultProps = {

  defaultAccount: PropTypes.string,

};
myPools.propTypes = {
  fetchPools: PropTypes.func.isRequired,
  defaultAccount: PropTypes.string,
  pools: PropTypes.any.isRequired,
  current: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    current: state.language.current,
    languages: state.language.languages,
    pools: state.poolR.pools,
  };
}
const mapDispatchToProps = dispatch => ({
  fetchPools: bindActionCreators(fetchPools, dispatch),
});

export default withRoot(withRedux(initStore, mapStateToProps, mapDispatchToProps)(myPools));

