import React from "react";
import { IntlProvider, addLocaleData } from "react-intl";

import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";

import Layout from "../components/Layout";
import App from "../components/App";
import Home from "../components/home/Home";

import withRoot from '../md/withRoot';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';

class Index extends React.Component {
  render() {
    return (
      <Layout>
        {/* <App /> */}

        <Home />
        {/* <IntlExample /> */}
      </Layout>
    )
  }
}

function mapStateToProps(state) {
  return {
    // current: state.language.current,
    // languages: state.language.languages,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    // changeLanguage: bindActionCreators(changeLanguage, dispatch),
  }
}

export default withRoot(withRedux(initStore, mapStateToProps, mapDispatchToProps)(Index))
