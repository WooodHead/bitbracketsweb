import React from 'react';

import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';

import Layout from '../components/Layout';
import IndexDashboard from '../components/Dashboard/IndexDashboard';

import withRoot from '../components/HOC/md/withRoot';
import { initStore } from '../store';

function poolDashboard() {
  return (
    <Layout>
      <IndexDashboard />
    </Layout>
  );
}

function mapStateToProps(state) {
  return {
    // current: state.language.current,
    // languages: state.language.languages,
  };
}

const mapDispatchToProps = dispatch => ({
  // changeLanguage: bindActionCreators(changeLanguage, dispatch),
});

export default withRoot(withRedux(initStore, mapStateToProps, mapDispatchToProps)(poolDashboard));
