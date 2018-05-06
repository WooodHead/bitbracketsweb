import React from 'react';
import Web3 from 'web3';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';
// import { bindActionCreators } from 'redux';
// import {connect} from "react-redux";
// import withRedux from 'next-redux-wrapper';
// import { initStore } from '../store';
// import { lockedMetamaskAccount, changeMetamaskAccount, changeMetamaskNetwork } from '../actions';
import MetaMaskLocked from '../metamask/MetaMaskLocked';
import MetaMaskInvalidNetwork from '../metamask/MetaMaskInvalidNetwork';
import MetaMaskNotInstalled from '../metamask/MetaMaskNotInstalled';
// import Loader from '../common/Loader';
import conf from '../../conf';


/**
 *
 * @description https://github.com/MetaMask/faq/blob/master/DEVELOPERS.md#partly_sunny-web3---ethereum-browser-environment-check
 * @author guillermo@bitbrackets.io
 * @param {*} Component
 */

const isMetamaskInstalled = function isMetamaskInstalled(_window) {
  return typeof _window !== 'undefined' && typeof _window.web3 !== 'undefined';
};

const hasAccounts = function hasAccounts(newAccounts) {
  return typeof newAccounts !== 'undefined' && newAccounts.length > 0;
};

const progressStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginTop: -12,
  marginLeft: -12,
};

function withMetaMask(Component) {
  class WithMetaMask extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        metamaskInstalled: undefined,
        metamaskLocked: undefined,
        metamaskNetworkIsValid: undefined,
        defaultAccount: undefined,
        loading: true,
        network: '',
      };
    }

    componentWillMount = async () => {
      this.initMetamaskChecks();
      // setInterval(this.initMetamaskChecks, conf.web3.interval);
    }

    componentDidMount = async () => {
      this.initMetamaskChecks();
      setInterval(this.initMetamaskChecks, conf.web3.interval);
    }

    initMetamaskChecks = async () => {
      // console.log(`Interval:  ${conf.web3.interval}`);
      let metamaskInstalled = isMetamaskInstalled(window);
      // console.log(`Is Metamask Installed? ${isMetamaskInstalled}`);

      let web3;
      let accounts;
      let hasAccountDefault;
      let isMetamaskLocked;
      let defaultAccount;

      if (metamaskInstalled) {
        this.checkNetwork(window);
        web3 = new Web3(window.web3.currentProvider);

        accounts = await web3.eth.getAccounts();
        hasAccountDefault = hasAccounts(accounts);
        // console.log(`hasAccountDefault? ${hasAccountDefault}`);

        isMetamaskLocked = !hasAccountDefault;
        // console.log(`Metamask locked? ${isMetamaskLocked}`);

        if (!isMetamaskLocked) {
          defaultAccount = accounts[0];
        }
      }

      const self = this;

      metamaskInstalled = isMetamaskInstalled(window);

      if (metamaskInstalled) {
        const newAccounts = await web3.eth.getAccounts();
        hasAccountDefault = hasAccounts(newAccounts);
        isMetamaskLocked = !hasAccountDefault;

        if (isMetamaskLocked) {
          // console.log('Metamask locked.');
          defaultAccount = undefined;
        } else {
          const newDefaultAccount = newAccounts[0];
          if (newDefaultAccount !== defaultAccount) {
            defaultAccount = newDefaultAccount;
            // console.log(`Account changed. New default account: ${defaultAccount}`);
          }
        }
      } else {
        console.error('Metamask is not installed.');
      }

      self.setState({
        metamaskInstalled,
        metamaskLocked: isMetamaskLocked,
        metamaskNetworkIsValid: conf.web3.networks.indexOf(self.state.network) > -1,
        loading: false,
        defaultAccount,
      });
    }

    checkNetwork = (_window) => {
      _window.web3.version.getNetwork((err, netId) => {
        let network;
        switch (netId) {
          case '1':
            network = 'mainnet';
            break;
          case '2':
            network = 'morden';
            break;
          case '3':
            network = 'ropsten';
            break;
          case '4':
            network = 'rinkeby';
            break;
          case '42':
            network = 'kovan';
            break;
          default:
            network = 'unknown;';
        }
        // console.log(`This is the ${network} network.`);
        this.setState({
          network,
        });
      });
    }

    render() {
      let componentToRender;
      if (this.state.loading) {
        componentToRender = <CircularProgress size={24} className={progressStyle} />;
        return (
          componentToRender
        );
      }
      if (this.state.metamaskInstalled) {
        if (this.state.metamaskLocked) {
          componentToRender = <MetaMaskLocked />;
        } else {
          componentToRender = <Component {...this.props} />;
        }
      } else {
        componentToRender = <MetaMaskNotInstalled />;
      }

      // if (!this.state.metamaskNetworkIsValid) {
      //   return (<MetaMaskInvalidNetwork />);
      // }

      return (
        componentToRender
      );
    }
  }

  WithMetaMask.propTypes = {
    pageContext: PropTypes.object,
  };

  WithMetaMask.getInitialProps = (ctx) => {
    if (Component.getInitialProps) {
      return Component.getInitialProps(ctx);
    }
    return {};
  };

  // return withRedux(initStore, mapStateToProps, mapDispatchToProps)(WithMetaMask);
  return WithMetaMask;
}

export default withMetaMask;
