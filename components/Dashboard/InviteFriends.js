/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
    return (
      <div>
        <Button style={{ backgroundColor: 'black', color: '#fff' }} onClick={this.handleClickOpen}>Invite Friends</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Copy and share the link below to invite your friends</DialogTitle>
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
                <Button style={{ backgroundColor: 'black', color: '#fff' }}>Copy Link</Button>
              </CopyToClipboard>

              {this.state.copied ? <span style={{ color: 'green' }}>Copied.</span> : null}

            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
           close
            </Button>

          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

InviteFriends.propTypes = {
  url: PropTypes.string.isRequired,
};

export default InviteFriends;
