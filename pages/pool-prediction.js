import React from "react";
import { bindActionCreators } from "redux";
import withRedux from "next-redux-wrapper";
import Link from "next/link";

import withRoot from '../md/withRoot';
import { initStore } from '../store';
import PredictionForm from '../components/PredictionForm/PredictionForm';
import Layout from '../components/Layout';
import GroupsSelector from '../selectors/groupsSelector';
import { joinPool } from '../actions';

class PoolPredictionPage extends React.Component {
    render() {
        return (
            <Layout>
                <PredictionForm groups={this.props.groups} matches={this.props.matches} />
            </Layout>
        )
    }
}

function mapStateToProps(state) {
    return {
        matches: state.matches,
        groups: GroupsSelector(state),
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        // joinPool: bindActionCreators(joinPool, dispatch),
    }
}

export default withRoot(
  withRedux(initStore, mapStateToProps, mapDispatchToProps)(PoolPredictionPage)
);
