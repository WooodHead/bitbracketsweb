import React from "react";
import { bindActionCreators } from "redux";
import withRedux from "next-redux-wrapper";
import Link from "next/link";

import withRoot from '../components/HOC/md/withRoot';
import { initStore } from '../store';
import JoinPoolLayout from '../components/JoinPoolForm/JoinPoolLayout';
import Layout from "../components/Layout";
import GroupsSelector from '../selectors/groupsSelector';
import MatchesSelector from '../selectors/matchesSelector';
import { joinPool, updatePrediction, fetchContest } from '../actions';

class JoinPoolPage extends React.Component {
    static async getInitialProps({ store, isServer }) {
        await store.dispatch(fetchContest('Russia2018'));
        return { isServer }
    }

    componentWillMount() {
        this.props.fetchContest('Russia2018');
    }

    render() {
        return (
            <Layout>
                <JoinPoolLayout 
                    pool={this.props.pool} 
                    onSubmit={this.props.joinPool} 
                    groups={this.props.groups} 
                    matches={this.props.matches} 
                    predictions={this.props.predictions}
                    update={this.props.updatePrediction}
                    // read
                />
            </Layout>
        )
    }
}

function mapStateToProps(state) {
    return {
        pool: state.joinPool,
        matches: MatchesSelector(state),
        groups: GroupsSelector(state),
        predictions: state.predictions,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        joinPool: bindActionCreators(joinPool, dispatch),
        updatePrediction: bindActionCreators(updatePrediction, dispatch),
        fetchContest: bindActionCreators(fetchContest, dispatch),
    }
}

export default withRoot(
  withRedux(initStore, mapStateToProps, mapDispatchToProps)(JoinPoolPage)
);
