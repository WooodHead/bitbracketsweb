import React from 'react';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import Error from 'next/error';

import withRoot from '../../components/HOC/md/withRoot';
import { initStore } from '../../store';
import JoinPoolLayout from '../../components/JoinPoolForm/JoinPoolLayout';
import Layout from '../../components/Layout';
import GroupsSelector from '../../selectors/groupsSelector';
import MatchesSelector from '../../selectors/matchesSelector';
import { joinPool, updatePrediction, savePredictions, fetchContest, getPoolDetails } from '../../actions';


class JoinPoolPage extends React.Component {
  static async getInitialProps({ store, query, isServer }) {
    const { address } = query;
    await store.dispatch(getPoolDetails(address));
    await store.dispatch(fetchContest(store.getState().pool.info.contestName));
    return { isServer, address };
  }

  componentDidMount() {
    const { pool } = this.props;
    if (!pool || !pool.info) {
      const { address } = this.props;
      this.props.getPoolDetails(address);
    } else {
      console.log('fetching contest', pool.info.contestName);
      this.props.fetchContest(pool.info.contestName);
    }
  }

  render() {
    const {
      predictions,
      pool,
      groups,
      matches,
      updatePrediction,
      savePredictions,
      error
    } = this.props;

    console.error('error from redux', error);

    if (error) {
      return <Error statusCode={error} />;
    }

    return (
      <Layout title={pool.info.name}>
        <JoinPoolLayout
          pool={pool}
          onSubmit={this.props.joinPool}
          groups={groups}
          matches={matches}
          predictions={predictions}
          update={updatePrediction}
          save={savePredictions}
        />

        <div style={{ marginTop: '5em' }}> <hr /></div>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    pool: state.pool,
    matches: MatchesSelector(state),
    groups: GroupsSelector(state),
    predictions: state.predictions,
    // TODO: separar estos error en el mapping del estado
    error: state.pool.error || state.contest.error, // || state.predictions.error,
  };
}

const mapDispatchToProps = dispatch => ({
  joinPool: bindActionCreators(joinPool, dispatch),
  updatePrediction: bindActionCreators(updatePrediction, dispatch),
  savePredictions: bindActionCreators(savePredictions, dispatch),
  fetchContest: bindActionCreators(fetchContest, dispatch),
  getPoolDetails: bindActionCreators(getPoolDetails, dispatch),
});

export default withRoot(withRedux(initStore, mapStateToProps, mapDispatchToProps)(JoinPoolPage));

