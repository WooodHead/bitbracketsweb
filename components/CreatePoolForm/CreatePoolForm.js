import React, { Component } from 'react';
import { injectIntl, defineMessages, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

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
import { CircularProgress } from 'material-ui/Progress';

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
        marginTop: theme.spacing.unit * 3,
    },
    headingSecondary: {
        fontWeight: 'bold',
        width: '60%',
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
    },
    nav: {
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
        position: 'relative',
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
        id: 'headingPrimary',
        defaultMessage: 'Create Pool',
        description: 'Create Pool Page -> Create Pool Form -> Primary Tittle',
    },
    poolSetupStep: {
        id: 'poolSetupStep',
        defaultMessage: 'Pool Setup',
        description: 'Create Pool Page -> Create Pool Form -> Pool Setup Step',
    },
    reviewDetailsStep: {
        id: 'reviewDetailsStep',
        defaultMessage: 'Review Details',
        description: 'Create Pool Page -> Create Pool Form -> Review Details Step',
    },
    paymentStep: {
        id: 'paymentStep',
        defaultMessage: 'Payment',
        description: 'Create Pool Page -> Create Pool Form -> Payment Step',
    },
    backButton: {
        id: 'backButton',
        defaultMessage: 'Back',
        description: 'Create Pool Page -> Create Pool Form -> Back Step Button Label',
    },
    nextButton: {
        id: 'nextButton',
        defaultMessage: 'Next',
        description: 'Create Pool Page -> Create Pool Form -> Next Step Button Label',
    },
    finishButton: {
        id: 'finishButton',
        defaultMessage: 'Finish',
        description: 'Create Pool Page -> Create Pool Form -> Finish Steps Button Label',
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
        const { intl } = this.props;

        return [
            intl.formatMessage(messages.poolSetupStep),
            intl.formatMessage(messages.reviewDetailsStep),
            intl.formatMessage(messages.paymentStep),
        ];
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
        const { classes, intl, form, pool } = this.props;

        return (
            <div className={classes.nav}>
                <Button
                    onClick={this.handleBack}
                    className={classes.backButton}
                    disabled={activeStep === 1 || pool.loading}
                >
                    {intl.formatMessage(messages.backButton)}
                </Button>
                <Button
                    variant="raised"
                    color="primary"
                    onClick={this.handleNext}
                    disabled={!(form.terms.value && form.rules.value) || pool.loading}
                >
                    {activeStep === this.getSteps().length ?
                        intl.formatMessage(messages.finishButton)
                        : intl.formatMessage(messages.nextButton)}
                </Button>
                {pool.loading && <CircularProgress size={24} className={classes.buttonProgress} />}
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
        const { pool, form } = this.props;
        const lastStep = this.getSteps().length;

        switch (activeStep) {
            case 1:
                this.props.dispatch(actions.submit('createPool'));
                if (form.$form.valid) {
                    this.props.onNext(pool);
                    this.setState({ activeStep: activeStep + 1 });
                }
                break;
            case 2:
                if (form.$form.valid) this.setState({ activeStep: activeStep + 1 });
                break;
            case lastStep:
                this.props.onSubmit(pool);
        }
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
                    {`${activeStep}. ${this.getSteps()[activeStep - 1]}`}
                </Typography>
                {this.getStepContent(activeStep)}
                {this.renderNavigator(activeStep)}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        form: state.forms.createPool,
    };
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps)(CreatePoolForm)));