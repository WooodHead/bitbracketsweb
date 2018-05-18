/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, defineMessages } from 'react-intl';

import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const messages = defineMessages({
  Copyandshare: {
    id: 'Copyandshare',
    defaultMessage: 'Copy and share the link below to invite your friends:',
    description: 'Copy and share the link below to invite your friends',
  },
  InviteFriends: {
    id: 'InviteFriends',
    defaultMessage: 'Invite Friends',
    description: 'InviteFriends',
  },
  CopyLink: {
    id: 'CopyLink',
    defaultMessage: 'Copy Link',
    description: 'Copy Link',
  },
  close: {
    id: 'close',
    defaultMessage: 'close',
    description: 'close',
  },
  copied: {
    id: 'copied',
    defaultMessage: 'copied',
    description: 'copied',
  },
});
class InviteFriends extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      copied: false,
      open: false,
    };
  }

  componentDidMount() {
    if (window) {
      let proto = 'https://';
      if (process.env.NODE_ENV !== 'production') {
        proto = 'http://';
      }
      const { url } = this.props;
      const hostname = window.location.host;
      this.setState({ value: `${proto}${hostname}${url}` });
    }
  }


  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  render() {
    const { intl } = this.props;
    return (

      <div>
        <Button style={{ backgroundColor: 'black', color: '#fff' }} onClick={this.handleClickOpen}>{intl.formatMessage(messages.InviteFriends)}</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">   {intl.formatMessage(messages.Copyandshare)}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">


              <input
                style={{ padding: '10px 40px', fontSize: '16px', width: '100%' }}
                value={this.state.value}
                onChange={({ target: { value } }) => this.setState({ value, copied: false })}
              />


              <CopyToClipboard
                text={this.state.value}
                onCopy={() => this.setState({ copied: true })}
              >
                <Button style={{ backgroundColor: 'black', color: '#fff' }}>
                  {intl.formatMessage(messages.CopyLink)}
                </Button>
              </CopyToClipboard>

              {this.state.copied ? <span style={{ color: 'green' }}>   {intl.formatMessage(messages.copied)}</span> : null}

            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              {intl.formatMessage(messages.close)}
            </Button>

          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

InviteFriends.propTypes = {
  url: PropTypes.string.isRequired,
  intl: PropTypes.object.isRequired,
};

export default injectIntl(InviteFriends);
