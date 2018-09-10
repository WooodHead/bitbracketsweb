/* eslint-disable react/forbid-prop-types */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import SnackbarSubscribe from './SnackbarSubscribe';

import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { injectIntl, defineMessages } from 'react-intl';
import TextMailchimp from './TextMailchimp';

const messages = defineMessages({
  subscribe: {
    id: 'subscribe',
    defaultMessage: 'Subscribe',
    description: 'subcribe mailchimp'
  }
});
const styles = theme => ({
  paper: {
    textAlign: 'center'
  },

  input: {
    [theme.breakpoints.up('md')]: {
      width: '25%'
    }
  },
  playButton: {
    borderRadius: '5px',
    border: '2px solid #E91E63',
    color: '#E91E63',

    [theme.breakpoints.up('md')]: {
      width: '25%'
    }
  }
});
class Mailchimp extends Component {
  state = {
    open: false,
    vertical: 'top',
    horizontal: 'center'
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { intl, classes } = this.props;
    const url =
      'https://bitbrackets.us12.list-manage.com/subscribe/post?u=803489b734e3e939d6e60e423&amp;id=c324f5e040';
    const CustomForm = ({ status, message, onValidated }) => {
      let email;
      const submit = () => {
        email &&
          email.value.indexOf('@') > -1 &&
          onValidated({
            EMAIL: email.value
          });
        this.setState({ open: true });
      };

      return (
        <div
          style={{
            background: 'transparent'
          }}
        >
          <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <div className={classes.paper}>
                  <TextField
                    fullWidth
                    className={classes.input}
                    inputRef={node => (email = node)}
                    id="full-width"
                    label={intl.formatMessage(messages.subscribe)}
                    placeholder="Your@email.com"
                    margin="normal"
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.paper}>
                  <Button
                    fullWidth
                    className={classes.playButton}
                    onClick={submit}
                  >
                    {intl.formatMessage(messages.subscribe)}
                  </Button>
                </div>
              </Grid>
              <Grid item xs={12}>
                <SnackbarSubscribe
                  submit={this.state.open}
                  handleClose={this.handleClose}
                  text={<TextMailchimp status={status} message={message} />}
                />
              </Grid>
            </Grid>
          </div>
        </div>
      );
    };

    return (
      <div>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
      </div>
    );
  }
}

Mailchimp.propTypes = {
  intl: PropTypes.object.isRequired
};

export default withStyles(styles)(injectIntl(Mailchimp));
