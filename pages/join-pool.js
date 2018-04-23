import React from "react";
import { bindActionCreators } from "redux";
import withRedux from "next-redux-wrapper";
import Link from "next/link";

import withRoot from '../md/withRoot';
import { initStore } from '../store';
import JoinPoolForm from '../components/JoinPoolForm/JoinPoolForm';
import { fetchPoolDetails } from '../actions';
import Layout from "../components/Layout";

class JoinPoolPage extends React.Component {
    render() {
        return (
            <Layout>
                <JoinPoolForm pool={this.props.pool} />
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
        // fetchPoolDetails: bindActionCreators(fetchPoolDetails, dispatch),
    }
}

export default withRoot(
  withRedux(initStore, mapStateToProps, mapDispatchToProps)(JoinPoolPage)
);
