import React, { Component } from 'react';
import { injectIntl, defineMessages, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Control, Form, Errors, actions } from 'react-redux-form';

import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
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
    id: 'PlayerSetupForm.headingTertiary1',
    defaultMessage: 'Player Info',
    description: '',
  },
  playerLabel: {
    id: 'PlayerSetupForm.playerLabel',
    defaultMessage: 'Player',
    description: '',
  },
  playerTextbox: {
    id: 'PlayerSetupForm.playerTextbox',
    defaultMessage: 'Nickname',
    description: '',
  },
  emailLabel: {
    id: 'PlayerSetupForm.emailLabel',
    defaultMessage: 'Email',
    description: '',
  },
  emailTextbox: {
    id: 'PlayerSetupForm.emailTextbox',
    defaultMessage: 'email@email.com',
    description: '',
  },
  termsCheckbox: {
    id: 'PlayerSetupForm.termsCheckbox',
    defaultMessage: 'I agree with the terms of use',
    description: '',
  },
  rulesCheckbox: {
    id: 'PlayerSetupForm.rulesCheckbox',
    defaultMessage: 'I agree with the pool rules',
    description: '',
  },
  errorRequired: {
    id: 'PlayerSetupForm.errorRequired',
    defaultMessage: 'Field is Required',
    description: '',
  },
  errorEmail: {
    id: 'PlayerSetupForm.errorEmail',
    defaultMessage: 'Not a Valid Email',
    description: '',
  },
});

const required = val => val && val.length;
const hasError = (field) => !field.valid && field.touched;
const getError = (field, intl) => {
  const { errors } = field;

  if (!hasError(field)) return;

  if (errors.required) return intl.formatMessage(messages.errorRequired);
  if (errors.isEmail) return intl.formatMessage(messages.errorEmail);
};

class PlayerSetupForm extends Component {
  render() {
    const { classes, intl, form } = this.props;

    return (
          <Form
className={classes.formBox}
              model="joinPool"
            >
              <Typography className={classes.headingTertiary} variant="subheading">
                  {intl.formatMessage(messages.headingTertiary1)}
                </Typography>

              <Grid container alignItems="baseline">
                  <Grid item xs={3}>
                      <Typography>{intl.formatMessage(messages.playerLabel)}</Typography>
                    </Grid>
                  <Grid item xs={9}>
                      <Control.text
                          className={classes.textField}
                          model=".playerNick"
                          component={TextField}
                          placeholder={intl.formatMessage(messages.playerTextbox)}
                          validators={{
                                required,
                            }}
                          validateOn="blur"
                          error={hasError(form.playerNick)}
                          helperText={getError(form.playerNick, intl)}
                        />
                    </Grid>
                </Grid>

              <Grid container alignItems="baseline">
                  <Grid item xs={3}>
                      <Typography>{intl.formatMessage(messages.emailLabel)}</Typography>
                    </Grid>
                  <Grid item xs={9}>
                      <Control.text
                          className={classes.textField}
                          model=".playerEmail"
                          component={TextField}
                          placeholder={intl.formatMessage(messages.emailTextbox)}
                          validators={{
                                required,
                            }}
                          validateOn="blur"
                          error={hasError(form.playerEmail)}
                          helperText={getError(form.playerEmail, intl)}
                        />
                    </Grid>
                </Grid>

              <Divider className={classes.division} />

              <Grid container alignItems="baseline">
                  <Grid item>
                      <Control.checkbox
                          model=".terms"
                          component={Checkbox}
                        />
                    </Grid>
                  <Grid item>
                      <Typography>
                          {intl.formatMessage(messages.termsCheckbox)}
                        </Typography>
                    </Grid>
                </Grid>

              <Grid container alignItems="baseline">
                  <Grid item>
                      <Control.checkbox
                          model=".rules"
                          component={Checkbox}
                        />
                    </Grid>
                  <Grid item>
                      <Typography>
                          {intl.formatMessage(messages.rulesCheckbox)}
                        </Typography>
                    </Grid>
                </Grid>

            </Form>
    );
  }
}

const mapStateToProps = (state) => ({
        form: state.forms.joinPool,
    });

export default withStyles(styles)(injectIntl(connect(mapStateToProps)(PlayerSetupForm)));
