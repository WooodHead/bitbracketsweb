/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import withRoot from '../../components/HOC/md/withRoot';
import { initStore } from '../../store';
import CreatePoolForm from '../../components/CreatePoolForm/CreatePoolForm';
import { createPool, fetchPoolDetails } from '../../actions';
import Layout from '../../components/Layout';

const CreatePoolPage = ({
  contest, pool, createPoolAction, fetchPoolDetailsAction,
}) => (
  <Layout title={contest}>
    <CreatePoolForm
      contest={contest}
      pool={pool}
      onSubmit={createPoolAction}
      onNext={fetchPoolDetailsAction}
    />
    <div style={{ marginTop: '5em' }}> <hr /></div>
   
  </Layout>
);

function mapStateToProps(state) {
  return {
    pool: state.createPool,
  };
}

CreatePoolPage.getInitialProps = async (props) => {
  const { contest } = props.query;
  return { contest };
};

CreatePoolPage.propTypes = {
  contest: PropTypes.string.isRequired,
  pool: PropTypes.object.isRequired,
  createPoolAction: PropTypes.func.isRequired,
  fetchPoolDetailsAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createPoolAction: bindActionCreators(createPool, dispatch),
  fetchPoolDetailsAction: bindActionCreators(fetchPoolDetails, dispatch),
});

const createPoolPageWeb3 = CreatePoolPage;
const reduxConfig = withRedux(initStore, mapStateToProps, mapDispatchToProps);

export default withRoot(reduxConfig(createPoolPageWeb3));
