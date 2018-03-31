import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Control, Form, actions } from 'react-redux-form';

import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import { FormGroup, FormControlLabel } from 'material-ui/Form';

const styles = theme => ({
    container: {
        width: '100%',
        maxWidth: '360px',
    },
    textField: {
        margin: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
    root: {
        width: '90%',
    },
    backButton: {
        marginRight: theme.spacing.unit,
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
    division: {
        margin: theme.spacing.unit * 2,
    }
});

class CreatePoolForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,
        };
    }

    getSteps() {
        return ['Setup', 'Review', 'Payment'];
    }

    renderStepper(steps, activeStep) {
        return (
            <Stepper activeStep={activeStep} alternativeLabel>
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

    renderPoolSetup() {
        const { classes } = this.props;
        const { activeStep } = this.state;

        return (
            <div>
                <Typography className={classes.instructions}>1. Pool Setup</Typography>
                <Form className={classes.container}
                    model="pool"
                    onSubmit={(pool) => this.handleSubmit(pool)}
                >
                    <Typography className={classes.instructions}>Admin Info</Typography>
                    <Control.text
                        className={classes.textField}
                        model=".adminName"
                        component={TextField}
                        label="Name"
                    />

                    <Control.text
                        className={classes.textField}
                        model=".adminEmail"
                        component={TextField}
                        label="Email"
                    />
                    <Divider className={classes.division} />

                    <Typography className={classes.instructions}>Pool Info</Typography>
                    <Control.text
                        className={classes.textField}
                        model=".poolName"
                        component={TextField}
                        label="Name"
                    />

                    <Control.text
                        className={classes.textField}
                        model=".entryPrice"
                        component={TextField}
                        label="Entry Price"
                    />
                    <Divider className={classes.division} />

                    <Control.checkbox
                        model=".terms"
                        component={Checkbox}
                    />
                    I agree with the terms of use

                    <br />

                    <Control.checkbox
                        model=".rules"
                        component={Checkbox}
                    />
                    I agree with the pool rules

                </Form>
            </div>
        );
    }

    renderFinishStep() {
        const { classes } = this.props;
        return (
            <div>
                <Typography className={classes.instructions}>
                    All steps completed - you&quot;re finished
                </Typography>
                <Button onClick={this.handleReset}>Reset</Button>
            </div>
        );
    }

    renderNavigator(activeStep) {
        const { classes } = this.props;

        return (
            <div>
                <Button
                    disabled={activeStep === 0}
                    onClick={this.handleBack}
                    className={classes.backButton}
                >
                    Back
                </Button>
                <Button variant="raised" color="primary" onClick={this.handleNext}>
                    {activeStep === this.getSteps().length - 1 ? 'Finish' : 'Next'}
                </Button>
            </div>
        );
    }

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return this.renderPoolSetup();
            case 1:
                return '2. Review Details';
            case 2:
                return '3. Payment';
            default:
                return 'Uknown stepIndex';
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

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    handleSubmit(pool) {

    }

    render() {
        const { classes } = this.props;
        const { activeStep } = this.state;

        return (
            <div className={classes.root}>
                {this.renderStepper(this.getSteps(), activeStep)}
                <div>
                    {this.state.activeStep === this.getSteps().length ? (
                        this.renderFinishStep()
                    ) : (
                            <div>
                                {this.getStepContent(activeStep)}
                                {this.renderNavigator(activeStep)}
                            </div>
                        )}
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(CreatePoolForm);
