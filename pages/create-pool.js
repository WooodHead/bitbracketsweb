import React from "react";
import { bindActionCreators } from "redux";
import withRedux from "next-redux-wrapper";
import Link from "next/link";

import withRoot from '../components/HOC/md/withRoot';
import { initStore } from '../store';
import CreatePoolForm from '../components/CreatePoolForm/CreatePoolForm';
import { createPool, fetchPoolDetails } from '../actions';
import Layout from "../components/Layout";

class CreatePoolPage extends React.Component {
    render() {
        return (
            <Layout>
                <CreatePoolForm pool={this.props.pool} onSubmit={this.props.createPool} onNext={this.props.fetchPoolDetails} />
            </Layout>
        )
    }
}

function mapStateToProps(state) {
    return {
        pool: state.createPool,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPool: bindActionCreators(createPool, dispatch),
        fetchPoolDetails: bindActionCreators(fetchPoolDetails, dispatch),
    }
}

export default withRoot(
  withRedux(initStore, mapStateToProps, mapDispatchToProps)(CreatePoolPage)
);
