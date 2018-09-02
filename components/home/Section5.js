//

import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import MailchimpSubscribe from '../MailchimpSubscribe';

import { injectIntl, defineMessages, FormattedMessage } from 'react-intl';

const messages = defineMessages({
  homeSection5Title1: {
    id: 'home.section5.title1',
    defaultMessage: 'Play your favorite sport events with Cryptocurrency',
    description: 'home > section3'
  }
});

class Section5 extends Component {
  render() {
    const { intl } = this.props;
    return (
      <div
        style={{
          background: '#418BFF',
          padding: '12%',
          textAlign: 'center'
        }}
      >
        <Typography
          variant="display1"
          gutterBottom
          align="center"
          style={{ color: '#fff' }}
        >
          {intl.formatMessage(messages.homeSection5Title1)}
        </Typography>
        <MailchimpSubscribe />
      </div>
    );
  }
}

export default injectIntl(Section5);
