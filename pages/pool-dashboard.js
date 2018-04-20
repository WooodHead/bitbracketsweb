import React from "react";
import { bindActionCreators } from "redux";
import withRedux from "next-redux-wrapper";

import Layout from "../components/Layout";
import IndexDashboard from "../components/Dashboard/IndexDashboard";

import withRoot from "../md/withRoot";
import { initStore } from "../store";

class poolDashboard extends React.Component {
  render() {
    return (
      <Layout>
        <IndexDashboard />
      </Layout>
    );
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

export default withRoot(
  withRedux(initStore, mapStateToProps, mapDispatchToProps)(poolDashboard)
);
