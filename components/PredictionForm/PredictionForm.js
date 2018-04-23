import React, { Component } from 'react';
import { injectIntl, defineMessages, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

import { withStyles } from 'material-ui/styles';
// import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { CircularProgress } from 'material-ui/Progress';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    headingPrimary: {
        fontWeight: 'bold',
        marginTop: theme.spacing.unit * 3,
    },
    headingSecondary: {
        fontWeight: 'bold',
        width: '60%',
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
});

const messages = defineMessages({
    headingPrimary: {
        id: 'PredictionForm.headingPrimary',
        defaultMessage: '[MY] Predictions',
        description: '',
    },
    headingSecondary: {
        id: 'PredictionForm.headingSecondary',
        defaultMessage: '[NAME] Crypto Pool',
        description: '',
    },
    group: {
        id: 'PredictionForm.group',
        defaultMessage: 'Group',
        description: '',
    },
    backButton: {
        id: 'PredictionForm.backButton',
        defaultMessage: 'Back to Pool Dashboard',
        description: '',
    },
    finishButton: {
        id: 'PredictionForm.finishButton',
        defaultMessage: 'Save',
        description: '',
    },
});

class JoinPoolForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 1,
        };
    }

    renderTabForm(steps, activeStep) {
        const { classes, intl } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth
                    >
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                    </Tabs>
                </AppBar>
                {/* <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}>Item One</TabContainer>
                    <TabContainer dir={theme.direction}>Item Two</TabContainer>
                    <TabContainer dir={theme.direction}>Item Three</TabContainer>
                </SwipeableViews> */}
            </div>
            // <Stepper activeStep={activeStep - 1} alternativeLabel>
            //     {steps.map(label => {
            //         return (
            //             <Step key={label}>
            //                 <StepLabel>{label}</StepLabel>
            //             </Step>
            //         );
            //     })}
            // </Stepper>
        );
    }

    getTabContent(tab) {
        switch (tab) {
            case 1:
                <div>TAB 1</div>
            case 2:
                <div>TAB 2</div>
            default:
                return 'Unknown Tab';
        }
    }

    render() {
        const { classes, intl } = this.props;
        const { activeStep } = this.state;

        return (
            <div className={classes.root}>
                <Typography className={classes.headingPrimary} variant="headline" align="center" gutterBottom>
                    {intl.formatMessage(messages.headingPrimary)}
                </Typography>
                <Typography className={classes.headingSecondary} variant="headline" align="center" gutterBottom>
                    {intl.formatMessage(messages.headingSecondary)}
                </Typography>
                {this.renderTabForm(activeStep)}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        form: state.forms.joinPool,
    };
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps)(JoinPoolForm)));