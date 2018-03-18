import React from 'react';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import Link from 'next/link';
// import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import SelectField from '../components/common/SelectField'; 

import { initStore } from '../store';
import { changeLanguage } from '../actions';

class ReduxExample extends React.Component {
    static getInitialProps({ store, isServer }) {
        // store.dispatch(serverRenderSomething(isServer))

        return { isServer }
    }

    render() {
        return (
            <div>
                <div>Language: <strong>{this.props.language}</strong></div>
                <Button onClick={() => this.props.changeLanguage("es")}>Change Language to Spanish</Button>
                <div><SelectField id="language" name="language" items={["English","Español"]} /></div>
                <div><Link href="/"><a>Regresar</a></Link></div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        language: state.language.current,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeLanguage: bindActionCreators(changeLanguage, dispatch),
    }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(ReduxExample)