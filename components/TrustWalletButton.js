/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Manager, Target, Popper } from 'react-popper';
import Button from 'material-ui/Button';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';
import Collapse from 'material-ui/transitions/Collapse';
import Portal from 'material-ui/Portal';
import { MenuItem, MenuList } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';

import { injectIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
  trustwallet: {
    id: 'trustwallet',
    defaultMessage: 'Secure wallet for Ethereum',
    description: 'Secure wallet for Ethereum'
  }
});
const styles = theme => ({
  root: {
    display: 'flex'
  },
  paper: {
    marginRight: theme.spacing.unit * 2
  },
  popperClose: {
    pointerEvents: 'none'
  },
  buttonToshi: {
    backgroundColor: '#1dbd71'
  },
  buttonTrust: {
    backgroundColor: '#3776b9'
  }
});

class ToshiButton extends React.Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = event => {
    if (this.target2.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes, intl } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <Manager>
          <Target>
            <div
              ref={node => {
                this.target2 = node;
              }}
            >
              <Button
                raised="true"
                style={{ border: '1px solid #3776b9', color: 'black' }}
                aria-label="add"
                aria-owns={open ? 'menu-list-collapse' : null}
                aria-haspopup="true"
                onClick={this.handleToggle}
              >
                <img
                  src="/static/trustimage.png"
                  alt="Smiley face"
                  height="42"
                  width="42"
                />
                &nbsp; Trust &nbsp; <i className="fas fa-caret-down" />
              </Button>
            </div>
            {intl.formatMessage(messages.trustwallet)}
          </Target>
          <Portal>
            <Popper
              placement="bottom"
              eventsEnabled={open}
              className={classNames({ [classes.popperClose]: !open })}
            >
              <ClickAwayListener onClickAway={this.handleClose}>
                <Collapse
                  in={open}
                  id="menu-list-collapse"
                  style={{ transformOrigin: '0 0 0' }}
                >
                  <div>
                    <MenuList
                      role="menu"
                      style={{
                        alignText: 'center',
                        backgroundColor: '#FAFAFA'
                      }}
                    >
                      <MenuItem>
                        <Button
                          href="https://itunes.apple.com/us/app/trust-ethereum-wallet/id1288339409"
                          target="_blank"
                          fab="true"
                        >
                          <img
                            src="/static/App-store.png"
                            alt="Smiley face"
                            height="62"
                            width="142"
                          />
                        </Button>
                      </MenuItem>

                      <MenuItem>
                        <Button
                          href="https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp"
                          target="_blank"
                          fab="true"
                        >
                          <img
                            src="/static/Android-app.png"
                            alt="Smiley face"
                            height="62"
                            width="142"
                          />
                        </Button>
                      </MenuItem>
                    </MenuList>
                  </div>
                </Collapse>
              </ClickAwayListener>
            </Popper>
          </Portal>
        </Manager>
      </div>
    );
  }
}

ToshiButton.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired
};

export default injectIntl(withStyles(styles)(ToshiButton));
