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

class myPools extends React.Component {
  
  componentWillMount() {
    this.props.fetchPools();
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
  // console.log('state',state);
  return { pools: state.poolR.pools };
}

const mapDispatchToProps = dispatch => ({
  fetchPools: bindActionCreators(fetchPools, dispatch),
});

export default withRoot(
  withRedux(initStore, mapstateToProps, mapDispatchToProps)(myPools)
);
