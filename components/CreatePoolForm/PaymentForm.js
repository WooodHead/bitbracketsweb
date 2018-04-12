import React, { Component } from 'react';
import { injectIntl, defineMessages, FormattedMessage } from 'react-intl';
import { Control, Form, actions } from 'react-redux-form';

import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import { FormLabel } from 'material-ui/Form';
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';


const styles = theme => ({
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
    expansionPanel: {
        flexGrow: 1,
    },
});

const messages = defineMessages({
    headingPrimary: {
        id: 'headingPrimary',
        defaultMessage: 'Create Pool',
        description: 'Create Pool Page -> Create Pool Form -> Primary Header',
    },
});

class PaymentForm extends Component {

    renderPayment() {
        const { classes } = this.props;

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

    render() {
        return (
            this.renderPayment()
        );
    }
}

export default withStyles(styles)(injectIntl(PaymentForm));
