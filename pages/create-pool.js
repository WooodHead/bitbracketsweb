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

addLocaleData(en);
addLocaleData(es);

const language = "en"; //TODO: Create a redux state for managing language

class CreatePoolPage extends React.Component {
    render() {
        return (
            <IntlProvider locale={language} messages={messages[language]}>
                <CreatePoolForm />
            </IntlProvider>
        )
    }
}

function mapStateToProps(state) {
    return {
        // current: state.language.current,
        // languages: state.language.languages,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        // changeLanguage: bindActionCreators(changeLanguage, dispatch),
    }
}

export default withRoot(withRedux(initStore, mapStateToProps, mapDispatchToProps)(CreatePoolPage))