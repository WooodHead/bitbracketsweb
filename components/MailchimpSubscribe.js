/* eslint-disable react/forbid-prop-types */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';


import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { injectIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
  subscribe: {
    id: 'subscribe',
    defaultMessage: 'Subscribe',
    description: 'subcribe mailchimp',
  },
});
const styles = {
  root: {
    color: 'white',
  },
  input: {
    color: 'white',

  },
};
class Mailchimp extends Component {
  render() {
    const { intl } = this.props;
    const url =
      'https://bitbrackets.us12.list-manage.com/subscribe/post?u=803489b734e3e939d6e60e423&amp;id=c324f5e040';
    const CustomForm = ({ status, message, onValidated }) => {
      let email;
      const submit = () =>
        email &&
        email.value.indexOf('@') > -1 &&
        onValidated({
          EMAIL: email.value,
        });

      return (
        <div
          style={{
            background: 'transparent',
          }}
        >
          {status === 'sending' && (
            <div style={{ color: '#fff' }}>sending...</div>
          )}
          {status === 'error' && (
            <div style={{ color: '#fff' }}>{message}</div>
          )}
          {status === 'success' && (
            <div style={{ color: '#fff' }}>{message}</div>
          )}

          <br />

          <form className="form-inline" >
            <div className="form-group mx-sm-3 mb-2" />

            <input
              // style={{ fontSize: '1.2em', padding: 5 }}
              style={{
 background: 'transparent', border: 'none', borderBottom: '2px solid #E91E63', fontSize: '18px', color: '#fff',
}}
              ref={node => (email = node)}
              type="email"
              placeholder={intl.formatMessage(messages.subscribe)}
            />
            <Button
              style={{ color: '#fff', padding: 7, background: '#E91E63' }}
              onClick={submit}
            >

              {intl.formatMessage(messages.subscribe)}
              {/* {this.props.section1.title4} */}
              <span className="animated infinite swing">&nbsp;&nbsp; <i className="fas fa-envelope" /></span>
            </Button>


          </form>
          <style jsx>{`
     ::placeholder {
      color: #fff;
      opacity: 1; /* Firefox */
  }
  
    
    `}
          </style>
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
  intl: PropTypes.object.isRequired,
};

export default (withStyles)(styles)(injectIntl(Mailchimp));
