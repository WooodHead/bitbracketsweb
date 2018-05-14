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

class JoinPoolPage extends React.Component {
  static async getInitialProps({ store, query, isServer }) {
    const { address } = query;
    await store.dispatch(fetchContest('Russia2018'));
    return { isServer, address };
  }

  componentWillMount() {
    this.props.fetchContest('Russia2018');
  }

  componentDidMount() {
    if (!this.props.pool || !this.props.pool.info) {
      const { address } = this.props;
      this.props.getPoolDetails(address);
    }
  }

  render() {
    return (
      <Layout>
        <JoinPoolLayout
          poolInfo={this.props.poolInfo}
          pool={this.props.pool}
          onSubmit={this.props.joinPool}
          groups={this.props.groups}
          matches={this.props.matches}
          predictions={this.props.predictions}
          update={this.props.updatePrediction}
          save={this.props.savePredictions}
        />
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    // poolInfo: state.pool,
    // pool: state.joinPool,
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

export default withRoot(withRedux(initStore, mapStateToProps, mapDispatchToProps)(JoinPoolPage),
  // withRedux(initStore, mapStateToProps, mapDispatchToProps)(withPersistGate()(JoinPoolPage))
);
