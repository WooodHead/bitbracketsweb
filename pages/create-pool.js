import React from "react";
import { bindActionCreators } from "redux";
import withRedux from "next-redux-wrapper";
import Link from "next/link";

import withRoot from "../md/withRoot";
import { initStore } from "../store";
import CreatePoolForm from "../components/CreatePoolForm";

class CreatePoolPage extends React.Component {
  render() {
    return (
      <div>
        <CreatePoolForm />
      </div>
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
  withRedux(initStore, mapStateToProps, mapDispatchToProps)(CreatePoolPage)
);
