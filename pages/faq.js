import React from 'react';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import withRoot from '../components/HOC/md/withRoot';

import Layout from '../components/Layout';

// import withRoot from '../md/withRoot';
import { initStore } from '../store';

class faq extends React.Component {
  render() {
    return <Layout>FAQ</Layout>;
  }
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

export default withRoot(withRedux(initStore, mapStateToProps, mapDispatchToProps)(faq));
