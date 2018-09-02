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
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import { injectIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
  navigationNavbarlink1: {
    id: 'navigation.navbarlink1',
    defaultMessage: 'How does it works?',
    description: 'Navigation link How does it works?'
  },
  navigationNavbarlink2: {
    id: 'navigation.navbarlink2',
    defaultMessage: 'Roadmap',
    description: 'Navigation link roadmap'
  },
  navigationNavbarlink3: {
    id: 'navigation.navbarlink3',
    defaultMessage: 'My Pools',
    description: 'Navigation link My Pools'
  },
  navigationNavbarlink4: {
    id: 'navigation.navbarlink4',
    defaultMessage: 'start pool',
    description: 'Navigation link start pool'
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
  }
});

class ResponsiveNavbar extends React.Component {
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
    const { classes, intl, languageSelect } = this.props;
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
              <IconButton
                aria-owns={open ? 'menu-list-collapse' : null}
                aria-haspopup="true"
                onClick={this.handleToggle}
              >
                <i className="fas fa-ellipsis-v" />
              </IconButton>
            </div>
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
                  <div
                    style={{
                      margin: 3,
                      backgroundColor: '#fff',
                      borderStyle: 'solid',
                      borderWidth: '0.5px',
                      borderColor: 'lightGrey',
                      marginRight: '10px'
                    }}
                  >
                    <MenuList role="menu" style={{ alignText: 'center' }}>
                      <MenuItem>
                        <Button href="/#section3">
                          {' '}
                          {intl.formatMessage(messages.navigationNavbarlink1)}
                        </Button>
                      </MenuItem>
                      <Divider />
                      <MenuItem>
                        <Button href="/roadmap">
                          {' '}
                          {intl.formatMessage(messages.navigationNavbarlink2)}
                        </Button>
                      </MenuItem>
                      <Divider />
                      <MenuItem>
                        <Button href="/faq">FAQs</Button>
                      </MenuItem>
                      <Divider />
                      <MenuItem>
                        <Button href="/myPools">
                          {intl.formatMessage(messages.navigationNavbarlink3)}
                        </Button>
                      </MenuItem>
                      {/* <MenuItem onClick={this.handleClose}>
                        {' '}
                        <Button
                          href={`/contest/${process.env.WEB3_CONTEST_NAME}/pools/new`}
                        >
                          {intl.formatMessage(messages.navigationNavbarlink3)}

                        </Button>
                      </MenuItem> */}
                      <Divider />
                      <MenuItem>{languageSelect}</MenuItem>
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

ResponsiveNavbar.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
  languageSelect: PropTypes.object.isRequired
};

export default injectIntl(withStyles(styles)(ResponsiveNavbar));
