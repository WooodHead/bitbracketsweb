import React from "react";
import { bindActionCreators } from "redux";
import withRedux from "next-redux-wrapper";
import Link from "next/link";

import withRoot from '../md/withRoot';
import { initStore } from '../store';
import PredictionForm from '../components/PredictionForm/PredictionForm';
import { joinPool } from '../actions';
import Layout from "../components/Layout";

const structure = {
    match1: {
        match: 1,
        group: 'A',
        round: 1,
        team1: 'Russia',
        team2: 'Saudi Arabia'
    },
    match2: {
        match: 2,
        group: 'A',
        round: 1,
        team1: 'Uruguay',
        team2: 'Egypt'
    },
    match3: {
        match: 3,
        group: 'A',
        round: 1,
        team1: 'Russia',
        team2: 'Saudi Arabia'
    },
    match4: {
        match: 4,
        group: 'A',
        round: 1,
        team1: 'Uruguay',
        team2: 'Egypt'
    },
    match5: {
        match: 5,
        group: 'B',
        round: 1,
        team1: 'Russia',
        team2: 'Saudi Arabia'
    },
    match6: {
        match: 6,
        group: 'B',
        round: 1,
        team1: 'Uruguay',
        team2: 'Egypt'
    },
    match7: {
        match: 7,
        group: 'B',
        round: 1,
        team1: 'Russia',
        team2: 'Saudi Arabia'
    },
    match4: {
        match: 8,
        group: 'B',
        round: 1,
        team1: 'Uruguay',
        team2: 'Egypt'
    },
}

class PoolPredictionPage extends React.Component {
    render() {
        return (
            <Layout>
                <PredictionForm structure={structure} />
            </Layout>
        )
    }
}

function mapStateToProps(state) {
    return {
        // pool: state.joinPool,
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
