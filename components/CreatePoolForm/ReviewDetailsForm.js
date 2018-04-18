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
import Grid from 'material-ui/Grid';

const styles = theme => ({
    headingTertiary: {
        fontWeight: 'bold',
    },
    formBox: {
        display: 'flex',
        flexDirection: 'column',
        width: '60%',
        backgroundColor: 'white',
        border: '2px solid lightgray',
        borderRadius: '5px',
        padding: theme.spacing.unit * 3,
    },
    textField: {
        marginBottom: theme.spacing.unit,
        // width: '60%',
    },
    division: {
        alignSelf: 'center',
        width: '100%',
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
    },
});

const messages = defineMessages({
    headingTertiary1: {
        id: 'headingTertiary1',
        defaultMessage: 'Admin Info',
        description: 'Create Pool Page -> Create Pool Form -> Review Details Form -> tittle 1',
    },
    headingTertiary2: {
        id: 'headingTertiary2',
        defaultMessage: 'Pool Info',
        description: 'Create Pool Page -> Create Pool Form -> Review Details Form -> tittle 2',
    },
    headingTertiary3: {
        id: 'headingTertiary3',
        defaultMessage: 'Payment Details',
        description: 'Create Pool Page -> Create Pool Form -> Review Details Form -> tittle 3',
    },
    nameLabel: {
        id: 'nameLabel',
        defaultMessage: 'Name',
        description: '',
    },
    emailLabel: {
        id: 'emailLabel',
        defaultMessage: 'Email',
        description: '',
    },
    entryPasswordLabel: {
        id: 'entryPasswordLabel',
        defaultMessage: 'Entry Password',
        description: '',
    },
    entryLabel: {
        id: 'entryLabel',
        defaultMessage: 'Entry Price',
        description: '',
    },
    feeLabel: {
        id: 'feeLabel',
        defaultMessage: 'Entry Fee',
        description: '',
    },
});

class ReviewDetailForm extends Component {

    render() {
        const { classes, intl } = this.props;

        return (
            <Form className={classes.formBox}
                model="createPool"
            >
                <Typography className={classes.headingTertiary} variant="subheading">
                    {intl.formatMessage(messages.headingTertiary1)}
                </Typography>

                <Grid container alignItems='baseline'>
                    <Grid item xs={3}>
                        <Typography>{intl.formatMessage(messages.nameLabel)}</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Control.text
                            className={classes.textField}
                            model=".adminName"
                            component={TextField}
                            disabled
                            InputProps={{disableUnderline: true}}
                        />
                    </Grid>
                </Grid>

                <Grid container alignItems='baseline'>
                    <Grid item xs={3}>
                        <Typography>{intl.formatMessage(messages.emailLabel)}</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Control.text
                            className={classes.textField}
                            model=".adminEmail"
                            component={TextField}
                            disabled
                            InputProps={{disableUnderline: true}}
                        />
                    </Grid>
                </Grid>

                <Divider className={classes.division} />                

                <Typography className={classes.headingTertiary} variant="subheading">
                    {intl.formatMessage(messages.headingTertiary2)}
                </Typography>
                <Grid container alignItems='baseline'>
                    <Grid item xs={3}>
                        <Typography>{intl.formatMessage(messages.nameLabel)}</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Control.text
                            className={classes.textField}
                            model=".poolName"
                            component={TextField}
                            disabled
                            InputProps={{disableUnderline: true}}
                        />
                    </Grid>
                </Grid>

                <Grid container alignItems='baseline'>
                    <Grid item xs={3}>
                        <Typography>{intl.formatMessage(messages.entryPasswordLabel)}</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Control.text
                            className={classes.textField}
                            model=".entryPassword"
                            component={TextField}
                            disabled
                            InputProps={{disableUnderline: true}}
                        />
                    </Grid>
                </Grid>

                <Grid container alignItems='baseline'>
                    <Grid item xs={3}>
                        <Typography>{intl.formatMessage(messages.entryLabel)}</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Control.text
                            className={classes.textField}
                            model=".entryPrice"
                            component={TextField}
                            disabled
                            InputProps={{disableUnderline: true}}
                        />
                    </Grid>
                </Grid>

                <Divider className={classes.division} />

                <Typography className={classes.headingTertiary} variant="subheading">
                    {intl.formatMessage(messages.headingTertiary3)}
                </Typography>
                <Grid container alignItems='baseline'>
                    <Grid item xs={3}>
                        <Typography>{intl.formatMessage(messages.entryLabel)}</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Control.text
                            className={classes.textField}
                            model=".entryPrice"
                            component={TextField}
                            disabled
                            InputProps={{disableUnderline: true}}
                        />
                    </Grid>
                </Grid>

                <Grid container alignItems='baseline'>
                    <Grid item xs={3}>
                        <Typography>{intl.formatMessage(messages.feeLabel)}</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Control.text
                            className={classes.textField}
                            model=".entryFee"
                            component={TextField}
                            disabled
                            InputProps={{disableUnderline: true}}
                        />
                    </Grid>
                </Grid>

            </Form>
        );
    }
}

export default withStyles(styles)(injectIntl(ReviewDetailForm));
