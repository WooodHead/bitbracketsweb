import React from 'react';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import Link from 'next/link';

import withRoot from '../md/withRoot';
import { initStore } from '../store';
import CreatePoolForm from '../components/CreatePoolForm/CreatePoolForm';
import { createPool } from '../actions';
import Layout from "../components/Layout";

class CreatePoolPage extends React.Component {
    render() {
        return (
            <Layout>
                <CreatePoolForm pool={this.props.pool} onSubmit={this.props.createPool} />
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
    }
}

export default withRoot(withRedux(initStore, mapStateToProps, mapDispatchToProps)(CreatePoolPage))