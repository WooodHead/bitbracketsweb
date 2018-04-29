import React from 'react';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
// import Link from 'next/link';

import withRoot from '../components/HOC/md/withRoot';
import { initStore } from '../store';
import CreatePoolForm from '../components/CreatePoolForm/CreatePoolForm';
import { createPool, fetchPoolDetails } from '../actions';
import Layout from '../components/Layout';
import withMetaMask from '../components/HOC/withMetaMask';

const CreatePoolPage = ({ pool, createPool, fetchPoolDetails }) => (
  <Layout>
    <CreatePoolForm
      pool={pool}
      onSubmit={createPool}
      onNext={fetchPoolDetails}
    />
  </Layout>
);

function mapStateToProps(state) {
  return {
    pool: state.createPool,
  };
}

const mapDispatchToProps = dispatch => ({
  createPool: bindActionCreators(createPool, dispatch),
  fetchPoolDetails: bindActionCreators(fetchPoolDetails, dispatch),
});

const createPoolPageWeb3 = CreatePoolPage;
const reduxConfig = withRedux(initStore, mapStateToProps, mapDispatchToProps);

export default withRoot(reduxConfig(createPoolPageWeb3));
