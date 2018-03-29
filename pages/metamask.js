import React from "react";
import { bindActionCreators } from 'redux';
import { initStore } from '../store';
import withRedux from 'next-redux-wrapper';
import {unlockedMetamaskAccount, lockedMetamaskAccount, changeMetamaskAccount, changeMetamaskNetwork } from '../actions';
import Layout from "../components/Layout";
import withMetaMask from "../md/withMetaMask";

class Metamask extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {

  }

  render() {
    console.log('Metamask:');
    console.log(this.state);
    return (
      <Layout>
        Metamask
      </Layout>
    );
  }
}

Metamask.propTypes = {

};

Metamask.getInitialProps = ctx => {
  return {};
};



function mapStateToProps(state) {
    return {
      defaultAccount: state.defaultAccount,
      network: state.network,
      metamaskInstalled: state.metamaskInstalled,
      metamaskLocked: state.metamaskLocked,
      metamaskNetworkIsValid: state.metamaskNetworkIsValid,
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      lockedMetamaskAccount: bindActionCreators(lockedMetamaskAccount, dispatch),
      changeMetamaskAccount: bindActionCreators(changeMetamaskAccount, dispatch),
      changeMetamaskNetwork: bindActionCreators(changeMetamaskNetwork, dispatch),
      unlockedMetamaskAccount: bindActionCreators(unlockedMetamaskAccount, dispatch)
    }
  }

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(withMetaMask(Metamask));
//export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(ReduxExample)
//export default withMetaMask(Metamask);