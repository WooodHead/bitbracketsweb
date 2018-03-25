import React from 'react';
import { bindActionCreators } from 'redux';
import { initStore } from '../store';
import withRedux from 'next-redux-wrapper';
import Web3 from 'web3';
import PropTypes from 'prop-types';
import { lockedMetamaskAccount, changeMetamaskAccount, changeMetamaskNetwork } from '../actions';
import {connect} from "react-redux";
import MetamaskLocked from '../components/metamask/MetaMaskLocked';
import MetaMaskInvalidNetwork from '../components/metamask/MetaMaskInvalidNetwork';
import MetaMaskNotInstalled from '../components/metamask/MetaMaskNotInstalled';
import Loader from '../components/common/Loader';
import conf from '../conf';
import MetamaskInvalidNetwork from '../components/metamask/MetaMaskInvalidNetwork';

/**
 * 
 * @description https://github.com/MetaMask/faq/blob/master/DEVELOPERS.md#partly_sunny-web3---ethereum-browser-environment-check
 * @author guillermo@bitbrackets.io
 * @param {*} Component 
 */

const isMetamaskInstalled = function isMetamaskInstalled(_window) {
    return typeof _window !== 'undefined' && typeof _window.web3 !== 'undefined';
}

const hasAccounts = function hasAccounts(newAccounts) {
  return typeof newAccounts !== 'undefined' && newAccounts.length > 0;
}

export default function withMetaMask(Component) {
  class WithMetaMask extends React.Component {
    state = {
      metamaskInstalled: undefined,
      metamaskLocked: undefined,
      metamaskNetworkIsValid: undefined,
      defaultAccount: undefined,
      loading: true,
      network: ''
    };

    constructor(props, context) {
      super(props, context);
    }

    checkNetwork = (_window) => {
      _window.web3.version.getNetwork((err, netId) => {
        let network;
        switch (netId) {
        case "1":
          network = "mainnet";
          break
        case "2":
          network = "morden";
          break
        case "3":
          network = "ropsten";
          break
        case "4":
          network = "rinkeby";
          break
        case "42":
          network = "kovan";
          break
        default:
          network = "unknown;"
        }
        console.log(`This is the ${network} network.`);
        this.setState({
          network: network
        });
      });
    }

    componentDidMount = async () => {
      console.log('Interval:  ' + conf.web3.interval);
      let _isMetamaskInstalled = isMetamaskInstalled(window);
      console.log('Is Metamask Installed? ' + _isMetamaskInstalled);

      let web3;
      let accounts;
      let _hasAccountDefault;
      let _isMetamaskLocked;
      let defaultAccount;

      if(_isMetamaskInstalled) {
        this.checkNetwork(window);
        web3 = new Web3(window.web3.currentProvider);

        accounts = await web3.eth.getAccounts();
        _hasAccountDefault = hasAccounts(accounts);
        console.log('hasAccountDefault? ' + _hasAccountDefault);

        _isMetamaskLocked = _hasAccountDefault ? false : true;
        console.log('Metamask locked? ' + _isMetamaskLocked);

        if(!_isMetamaskLocked) {
          defaultAccount = accounts[0];
        }
      }

      const _this = this;

      setInterval(async function() {
        _isMetamaskInstalled = isMetamaskInstalled(window);

        if(_isMetamaskInstalled){
          const newAccounts = await web3.eth.getAccounts();
          _hasAccountDefault = hasAccounts(newAccounts);
          _isMetamaskLocked = _hasAccountDefault ? false : true;

          if(_isMetamaskLocked) {
            console.log('Metamask locked.');
            defaultAccount = undefined;
          } else {
            const newDefaultAccount = newAccounts[0];
            if (newDefaultAccount !== defaultAccount) {
              defaultAccount = newDefaultAccount;
              console.log('Account changed. New default account: ' + defaultAccount);  
            }
          }
        } else {
          console.log('Metamask is not installed.');
        }

        _this.setState({
          metamaskInstalled: _isMetamaskInstalled,
          metamaskLocked: _isMetamaskLocked,
          metamaskNetworkIsValid: conf.web3.networks.indexOf(_this.state.network) > -1,
          loading: false,
          defaultAccount: defaultAccount
        });
      }, conf.web3.interval);
    }

    render() {
      if(this.state.loading) {
        componentToRender = <Loader />;
        return (
          componentToRender
        );
      }
      if(!this.state.metamaskNetworkIsValid) {
        return (<MetamaskInvalidNetwork />);
      }

      let componentToRender = undefined;
      if(this.state.metamaskInstalled) {
        if(this.state.metamaskLocked) {
          componentToRender = <MetamaskLocked />;
        } else {
          componentToRender = <Component {...this.props}/>;
        }
      } else {
        componentToRender = <MetaMaskNotInstalled />;
      }
      return (
          componentToRender
      );
    }
  }

  WithMetaMask.propTypes = {
    pageContext: PropTypes.object,
  };

  WithMetaMask.getInitialProps = ctx => {
    if (Component.getInitialProps) {
      return Component.getInitialProps(ctx);
    }
    return {};
  };
  
  //return withRedux(initStore, mapStateToProps, mapDispatchToProps)(WithMetaMask);
  return WithMetaMask;
}