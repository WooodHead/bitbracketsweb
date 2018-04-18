import React from "react";
import { bindActionCreators } from "redux";
import withRedux from "next-redux-wrapper";

import Layout from "../components/Layout";

// import withRoot from '../md/withRoot';
import { initStore } from "../store";

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

const mapDispatchToProps = dispatch => {
  return {
    // changeLanguage: bindActionCreators(changeLanguage, dispatch),
  };
};

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(faq);
