import React from "react";
import { bindActionCreators } from "redux";
import withRedux from "next-redux-wrapper";
import Link from "next/link";

import withRoot from '../md/withRoot';
import { initStore } from '../store';
import JoinPoolLayout from '../components/JoinPoolForm/JoinPoolLayout';
import { joinPool } from '../actions';
import Layout from "../components/Layout";

class JoinPoolPage extends React.Component {
    render() {
        return (
            <Layout>
                <JoinPoolLayout pool={this.props.pool} onSubmit={this.props.joinPool} />
            </Layout>
        )
    }
}

function mapStateToProps(state) {
    return {
        pool: state.joinPool,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        joinPool: bindActionCreators(joinPool, dispatch),
    }
}

export default withRoot(
  withRedux(initStore, mapStateToProps, mapDispatchToProps)(JoinPoolPage)
);
