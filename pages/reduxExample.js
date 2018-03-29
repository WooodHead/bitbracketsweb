import React from 'react';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import Link from 'next/link';
// import { connect } from 'react-redux';
import Button from 'material-ui/Button';

import withRoot from '../md/withRoot';
import LanguageSelect from '../components/LanguageSelect';
import { initStore } from '../store';
import { changeLanguage, fetchLanguages } from '../actions';

class ReduxExample extends React.Component {
    static getInitialProps({ store, isServer }) {
        // store.dispatch(fetchLanguages());

        return { isServer }
    }

    componentDidMount() {
        this.props.fetchLanguages();
    }

    render() {
        return (
            <div>
                <div>Language: <strong>{this.props.language}</strong></div>
                <div>
                    <LanguageSelect  
                        languages={["en", "es"]}
                        current={this.props.language} 
                        onChange={(key, value) => this.props.changeLanguage(value)} 
                    />
                </div>
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