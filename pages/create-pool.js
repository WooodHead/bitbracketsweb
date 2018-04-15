import React from 'react';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import Link from 'next/link';
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";

import withRoot from '../md/withRoot';
import { initStore } from '../store';
import CreatePoolForm from '../components/CreatePoolForm/CreatePoolForm';
import messages from "../intl/pages/create-pool";
import { createPool } from '../actions';

addLocaleData(en);
addLocaleData(es);

const language = "en"; //TODO: Create a redux state for managing language

class CreatePoolPage extends React.Component {
    render() {
        return (
            <IntlProvider locale={language} messages={messages[language]}>
                <CreatePoolForm pool={this.props.pool} onSubmit={this.props.createPool}/>
            </IntlProvider>
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