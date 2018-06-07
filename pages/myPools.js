import React from 'react';
import withRedux from 'next-redux-wrapper';
import withRoot from '../components/HOC/md/withRoot';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import { bindActionCreators } from 'redux';
import { initStore } from '../store';
import { fetchPools } from '../actions';
import Layout from '../components/Layout';
import PoolsComp from '../components/MyPools/MyPools';
import withMetaMask from '../components/HOC/withMetaMask';

class myPools extends React.Component {
   
  componentWillMount() {
    // this.props.fetchPools('0xE1F8feA4699Ce3e0196923E6fA16F773600E59e0');
    this.props.fetchPools(this.props.defaultAccount);
  }

  render() {
    return (
      <Layout>
        <PoolsComp pools={this.props.pools} />
      </Layout>
    );
  }
}

function mapstateToProps(state) {
  return { pools: state.poolR.pools };
}

const mapDispatchToProps = dispatch => ({
  fetchPools: bindActionCreators(fetchPools, dispatch),
});

export default withRoot(
  withRedux(initStore, mapstateToProps, mapDispatchToProps)(withMetaMask(myPools))
);
