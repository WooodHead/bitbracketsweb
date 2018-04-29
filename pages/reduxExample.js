import React from 'react';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import Link from 'next/link';
// import { connect } from 'react-redux';
import Button from 'material-ui/Button';

import withRoot from "../components/HOC/md/withRoot";
import LanguageSelect from '../components/LanguageSelect';
import { initStore } from '../store';
import { changeLanguage, fetchLanguages } from '../actions';

class ReduxExample extends React.Component {
    static async getInitialProps({ store, isServer }) {
        await store.dispatch(fetchLanguages());
        return { isServer }
    }

    componentWillMount() {
        this.props.fetchLanguages();
    }

    renderLanguages() {
        return this.props.languages.map(language => {
            return <li key={language.code}>{language.name}</li>
        });
    }

    render() {
        return (
            <div>
                <div>Language: <strong>{this.props.current}</strong></div>
                <div>
                    <LanguageSelect  
                        languages={this.props.languages}// {["en", "es"]}
                        current={this.props.current} 
                        onChange={(value) => this.props.changeLanguage(value)} 
                    />
                </div>
                <ul>
                    {this.renderLanguages()}
                </ul>
                <div><Link href="/"><a>Regresar</a></Link></div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        current: state.language.current,
        languages: state.language.languages,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeLanguage: bindActionCreators(changeLanguage, dispatch),
        fetchLanguages: bindActionCreators(fetchLanguages, dispatch),
    }
}

export default withRoot(withRedux(initStore, mapStateToProps, mapDispatchToProps)(ReduxExample))