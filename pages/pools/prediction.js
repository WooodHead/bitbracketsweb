import React from "react";
import { bindActionCreators } from "redux";
import withRedux from "next-redux-wrapper";
import Link from "next/link";

import withRoot from '../../components/HOC/md/withRoot';
import { initStore } from '../../store';
import PredictionLayout from '../../components/PredictionForm/PredictionLayout';
import Layout from '../../components/Layout';
import GroupsSelector from '../../selectors/groupsSelector';
import MatchesSelector from '../../selectors/matchesSelector';
import { fetchContest, getPoolDetails, fetchPredictions } from '../../actions';
import CONF from '../../conf';


class PoolPredictionPage extends React.Component {
    static async getInitialProps({ store, query, isServer }) {
        const { address, playerAddress } = query;
        await store.dispatch(getPoolDetails(address));
        await Promise.all([
            store.dispatch(fetchContest(store.getState().pool.contestName)),
            store.dispatch(fetchPredictions(address, playerAddress))
        ]);
        return { isServer, address, playerAddress };
    }

    componentDidMount() {
        const { address, playerAddress } = this.props;
        if (!this.props.pool || !this.props.pool.info) {
            this.props.getPoolDetails(address);
        }
        this.props.fetchContest(this.props.pool.info.contestName);
        this.props.fetchPredictions(address, playerAddress);  
    }

    render() {
        const {
            predictions,
            pool,
            groups,
            matches,
            playerAddress
        } = this.props;

        return (
            <Layout>
                <PredictionLayout
                    pool={pool}
                    groups={groups}
                    matches={matches}
                    predictions={predictions}
                    player={playerAddress}
                    read
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
    };
}

const mapDispatchToProps = dispatch => ({
    fetchContest: bindActionCreators(fetchContest, dispatch),
    getPoolDetails: bindActionCreators(getPoolDetails, dispatch),
    fetchPredictions: bindActionCreators(fetchPredictions, dispatch),    
});

export default withRoot(
    withRedux(initStore, mapStateToProps, mapDispatchToProps)(PoolPredictionPage)
);
