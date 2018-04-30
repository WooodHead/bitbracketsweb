import React from "react";
import { bindActionCreators } from "redux";
import withRedux from "next-redux-wrapper";
import Link from "next/link";

import withRoot from '../md/withRoot';
import { initStore } from '../store';
import PredictionForm from '../components/PredictionForm/PredictionForm';
import Layout from '../components/Layout';
import GroupsSelector from '../selectors/groupsSelector';
import { updatePrediction, savePredictions } from '../actions';

class PoolPredictionPage extends React.Component {
    render() {
        return (
            <Layout>
                <PredictionForm 
                    groups={this.props.groups} 
                    matches={this.props.matches} 
                    predictions={this.props.predictions}
                    update={this.props.updatePrediction}
                    save={this.props.savePredictions}
                    // read
                />
            </Layout>
        )
    }
}

function mapStateToProps(state) {
    return {
        matches: state.matches,
        groups: GroupsSelector(state),
        predictions: state.predictions,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePrediction: bindActionCreators(updatePrediction, dispatch),
        savePredictions: bindActionCreators(savePredictions, dispatch),        
    }
}

export default withRoot(
  withRedux(initStore, mapStateToProps, mapDispatchToProps)(PoolPredictionPage)
);
