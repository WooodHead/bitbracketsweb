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
import { FormLabel } from 'material-ui/Form';
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

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
    headingSecondary: {
        alignSelf: 'center',
        width: '60%',
    },
    headingTertiary: {
        margin: 0,
        padding: 0,
    },
    formBox: {
        display: 'flex',
        flexDirection: 'column',
        width: '60%',
        backgroundColor: 'white',
        border: '2px solid lightgray',
        borderRadius: '5px',
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3,
        paddingBottom: theme.spacing.unit * 5,
    },
    textField: {
        marginBottom: theme.spacing.unit,
        width: '60%',
    },
    division: {
        alignSelf: 'center',
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 2,
    },
    nav: {
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
    },
    expansionPanel: {
        flexGrow: 1,
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

    renderPoolSetup() {
        const { classes } = this.props;
        const { activeStep } = this.state;

        return (
            <Form className={classes.formBox}
                model="pool"
                onSubmit={(pool) => this.handleSubmit(pool)}
            >
                <Typography className={classes.headingTertiary} variant="subheading">
                    <h4>Admin Info</h4>
                </Typography>
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

                <Typography className={classes.headingTertiary} variant="subheading">
                    <h4>Pool Info</h4>
                </Typography>
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

                <div>
                    <Control.checkbox
                        model=".terms"
                        component={Checkbox}
                    />
                    I agree with the terms of use
                </div>
                <div>
                    <Control.checkbox
                        model=".rules"
                        component={Checkbox}
                    />
                    I agree with the pool rules
                </div>
            </Form>
        );
    }

    renderReviewDetails() {
        const { classes } = this.props;
        const { activeStep } = this.state;

        return (
            <Form className={classes.formBox}
                model="pool"
                onSubmit={(pool) => this.handleSubmit(pool)}
            >
                <Typography className={classes.headingTertiary} variant="subheading">
                    <h4>Admin Info</h4>
                </Typography>
                <Control.text
                    className={classes.textField}
                    model=".adminName"
                    component={TextField}
                    label="Name"
                    disabled
                />

                <Control.text
                    className={classes.textField}
                    model=".adminEmail"
                    component={TextField}
                    label="Email"
                    disabled
                />
                <Divider className={classes.division} />

                <Typography className={classes.headingTertiary} variant="subheading">
                    <h4>Pool Info</h4>
                </Typography>
                <Control.text
                    className={classes.textField}
                    model=".poolName"
                    component={TextField}
                    label="Name"
                    disabled
                />

                <Control.text
                    className={classes.textField}
                    model=".entryPassword"
                    component={TextField}
                    label="Entry Password"
                    disabled
                />

                <Control.text
                    className={classes.textField}
                    model=".entryPrice"
                    component={TextField}
                    label="Entry Price"
                    disabled
                />
                <Divider className={classes.division} />

                <Typography className={classes.headingTertiary} variant="subheading">
                    <h4>Payment Details</h4>
                </Typography>
                <Control.text
                    className={classes.textField}
                    model=".entryPrice"
                    component={TextField}
                    label="Entry Price"
                    disabled
                />

                <Control.text
                    className={classes.textField}
                    model=".entryFee"
                    component={TextField}
                    label="Entry Fee"
                    disabled
                />
            </Form>
        );
    }

    renderPayment() {
        const { classes } = this.props;
        const { activeStep } = this.state;

        return (
            <Form className={classes.formBox}
                model="pool"
                onSubmit={(pool) => this.handleSubmit(pool)}
            >
                <Typography className={classes.headingTertiary} variant="subheading">
                    <h4>Finish Installing Metamesk to continue</h4>
                </Typography>

                <Typography>
                    <p>Here some help:</p>
                </Typography>

                <div className={classes.expansionPanel}>
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>How to Install Metamask</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Steps...
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Getting ether your digital currency</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Steps...
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>How to send ETH to MetaMask</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Steps...
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>

            </Form>
        );
    }

    renderPaymentDetails() {
        const { classes } = this.props;
        const { activeStep } = this.state;

        return (
            <Form className={classes.formBox}
                model="pool"
                onSubmit={(pool) => this.handleSubmit(pool)}
            >
                <Typography className={classes.headingTertiary} variant="subheading">
                    <h4>Payment Details</h4>
                </Typography>
                
                <Control.text
                    className={classes.textField}
                    model=".entryPrice"
                    component={TextField}
                    label="Entry Price"
                    disabled
                />

                <Control.text
                    className={classes.textField}
                    model=".entryFee"
                    component={TextField}
                    label="Entry Fee"
                    disabled
                />
            </Form>
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
                return this.renderPoolSetup();
            case 2:
                return this.renderReviewDetails();
            case 3:
                return this.renderPayment();;
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
        const { classes } = this.props;
        const { activeStep } = this.state;

        return (
            <div className={classes.root}>
                <div className="heading-primary">
                    <Typography variant="headline" align="center" gutterBottom>
                        <h3>Create Pool</h3>
                    </Typography>
                </div>
                <div className={classes.stepper}>
                    {this.renderStepper(this.getSteps(), activeStep)}
                </div>
                <div className={classes.headingSecondary}>
                    <Typography variant="title" gutterBottom>
                        <h4>{`${activeStep}. ${this.getSteps()[activeStep - 1]}`}</h4>
                    </Typography>
                </div>
                {this.getStepContent(activeStep)}
                {this.renderNavigator(activeStep)}
            </div>
        );
    }
}

export default withStyles(styles)(CreatePoolForm);
