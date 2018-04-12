import React, { Component } from 'react';
import { injectIntl, defineMessages, FormattedMessage } from 'react-intl';
import { Control, Form, actions } from 'react-redux-form';

import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import { FormLabel } from 'material-ui/Form';
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import PoolSetupForm from './PoolSetupForm';
import ReviewDetailsForm from './ReviewDetailsForm';
import PaymentForm from './PaymentForm';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    stepper: {
        width: '60%',
        border: '2px solid lightgray',
        borderRadius: '5px',
    },
    headingPrimary: {
        fontWeight: 'bold',
    },
    headingSecondary: {
        alignSelf: 'center',
        width: '60%',
    },
    nav: {
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
    },
});

const messages = defineMessages({
    headingPrimary: {
        id: 'headingPrimary',
        defaultMessage: 'Create Pool',
        description: 'Create Pool Page -> Create Pool Form -> Primary Header',
    },
});

class CreatePoolForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 1,
        };
    }

    getSteps() {
        return ['Pool Setup', 'Review Details', 'Payment'];
    }

    renderStepper(steps, activeStep) {
        return (
            <Stepper activeStep={activeStep - 1} alternativeLabel>
                {steps.map(label => {
                    return (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
        );
    }

    renderNavigator(activeStep) {
        const { classes } = this.props;

        return (
            <div className={classes.nav}>
                <Button
                    disabled={activeStep === 1}
                    onClick={this.handleBack}
                    className={classes.backButton}
                >
                    Back
                </Button>
                <Button variant="raised" color="primary" onClick={this.handleNext}>
                    {activeStep === this.getSteps().length ? 'Finish' : 'Next'}
                </Button>
            </div>
        );
    }

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 1:
                return <PoolSetupForm />;
            case 2:
                return <ReviewDetailsForm />;
            case 3:
                return <PaymentForm />;
            default:
                return 'Unknown stepIndex';
        }
    }

    handleNext = () => {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep + 1,
        });
    };

    handleBack = () => {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep - 1,
        });
    };

    handleSubmit(pool) {

    }

    render() {
        const { classes, intl } = this.props;
        const { activeStep } = this.state;

        return (
            <div className={classes.root}>
                <Typography className={classes.headingPrimary} variant="headline" align="center" gutterBottom>
                    {intl.formatMessage(messages.headingPrimary)}
                </Typography>
                <div className={classes.stepper}>
                    {this.renderStepper(this.getSteps(), activeStep)}
                </div>
                <Typography className={classes.headingSecondary} variant="title" gutterBottom>
                    <h4>{`${activeStep}. ${this.getSteps()[activeStep - 1]}`}</h4>
                </Typography>
                {this.getStepContent(activeStep)}
                {this.renderNavigator(activeStep)}
            </div>
        );
    }
}

export default withStyles(styles)(injectIntl(CreatePoolForm));
