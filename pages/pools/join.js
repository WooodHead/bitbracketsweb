import React from 'react';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import Link from 'next/link';

import withRoot from '../../components/HOC/md/withRoot';
import withPersistGate from '../../components/HOC/withPersistGate';
import { initStore } from '../../store';
import JoinPoolLayout from '../../components/JoinPoolForm/JoinPoolLayout';
import Layout from '../../components/Layout';
import GroupsSelector from '../../selectors/groupsSelector';
import MatchesSelector from '../../selectors/matchesSelector';
import { joinPool, updatePrediction, savePredictions, fetchContest, getPoolDetails } from '../../actions';
import CONF from '../../conf';

class JoinPoolPage extends React.Component {
  static async getInitialProps({ store, query, isServer }) {
    const { address } = query;
    await store.dispatch(fetchContest(CONF.web3.contestName));
    return { isServer, address };
  }

  componentWillMount() {
    console.log('fetching contest');
    this.props.fetchContest(CONF.web3.contestName);
  }

  componentDidMount() {
    if (!this.props.pool || !this.props.pool.info) {
      const { address } = this.props;
      this.props.getPoolDetails(address);
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
    } = this.props;

    return (
      <Layout>
        <JoinPoolLayout
          pool={pool}
          onSubmit={this.props.joinPool}
          groups={groups}
          matches={matches}
          predictions={predictions}
          update={updatePrediction}
          save={savePredictions}
        />
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  console.info('redux predictions', state.predictions);
  return {
    pool: state.pool,
    matches: MatchesSelector(state),
    groups: GroupsSelector(state),
    predictions: state.predictions,
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

