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
});

const messages = defineMessages({
    headingPrimary: {
        id: 'headingPrimary',
        defaultMessage: 'Create Pool',
        description: 'Create Pool Page -> Create Pool Form -> Primary Header',
    },
});

class ReviewDetailForm extends Component {

    render() {
        const { classes } = this.props;

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
}

export default withStyles(styles)(injectIntl(ReviewDetailForm));
