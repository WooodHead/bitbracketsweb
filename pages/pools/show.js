/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ErrorPage from 'next/error';
// import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import Layout from '../../components/Layout';
import IndexDashboard from '../../components/Dashboard/IndexDashboard';

import withRoot from '../../components/HOC/md/withRoot';
import { initStore } from '../../store';
import { getPoolDetails } from '../../actions';

const PoolDashboard = ({
  address, pool, errorStatus, predictionSuccess,
}) => {
  if (errorStatus) {
    return (
      <div>
        <Layout title={`Error ${errorStatus}`}>
          <ErrorPage statusCode={errorStatus} />
        </Layout>
      </div>
    );
  }
  return (
    <div>
      <Layout title={`${pool.contestName} (${pool.address})`}>
        <IndexDashboard address={address} pool={pool} predictionSuccess={predictionSuccess} />
        <div style={{ marginTop: '5em' }}> <hr /></div>
      </Layout>
    </div>
  );
};


const getStatusFromError = (error) => {
  const msg = error.message;
  if (msg.includes('Invalid address provided')) {
    return 400;
  } else if (msg.includes('ABI')) {
    return 404;
  }

  return 500;
};

PoolDashboard.getInitialProps = async ({ query, store }) => {
  const { address, prediction } = query;
  console.log('predicctiones:', prediction);
  try {
    const pool = await store.dispatch(getPoolDetails(address));
    return { address, pool, predictionSuccess: prediction };
  } catch (error) {
    // console.error('Error while loading page: ', error);
    return { address, errorStatus: getStatusFromError(error) };
  }
};

PoolDashboard.defaultProps = {
  errorStatus: undefined,
  predictionSuccess: undefined,
};

PoolDashboard.propTypes = {
  pool: PropTypes.object.isRequired,
  address: PropTypes.string.isRequired,
  errorStatus: PropTypes.string,
  predictionSuccess: PropTypes.string,
};

export default withRoot(withRedux(initStore)(PoolDashboard));
