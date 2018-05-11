/* eslint-disable react/forbid-prop-types */

// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from 'material-ui/styles';
// import Drawer from 'material-ui/Drawer';
// import Button from 'material-ui/Button';
// import List, { ListItem } from 'material-ui/List';
// import Divider from 'material-ui/Divider';

// import { injectIntl, defineMessages } from 'react-intl';

// const styles = {
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: 'auto',
//   },
// };
// const messages = defineMessages({
//   navigationNavbarlink1: {
//     id: 'navigation.navbarlink1',
//     defaultMessage: 'How does it works?',
//     description: 'Navigation link How does it works?',
//   },
//   navigationNavbarlink2: {
//     id: 'navigation.navbarlink2',
//     defaultMessage: 'rules',
//     description: 'Navigation link rules',
//   },
//   navigationNavbarlink3: {
//     id: 'navigation.navbarlink3',
//     defaultMessage: 'My Pools',
//     description: 'Navigation link My Pools',
//   },
//   navigationNavbarlink4: {
//     id: 'navigation.navbarlink4',
//     defaultMessage: 'start pool',
//     description: 'Navigation link start pool',
//   },
// });
// class TemporaryDrawer extends React.Component {
//   state = {

//     left: false,

//   };

//   toggleDrawer = (side, open) => () => {
//     this.setState({
//       [side]: open,
//     });
//   };

//   render() {
//     const { classes, intl, languageSelect } = this.props;

//     const sideList = (
//       <div className={classes.list}>
//         <List component="nav">
//           <ListItem button component="a" href="/">
//             <img src="../static/logo.png" width="20" height="20" alt="bitbrackets" />
//             <span className="brand">&nbsp; BitBrackets</span>
//           </ListItem>
//           <Divider />
//           <ListItem button component="a" href="#section3">
//             <span className="ListColor">
//               {' '}
//               {intl.formatMessage(messages.navigationNavbarlink1)}
//             </span>
//           </ListItem>
//           <Divider />
//           <ListItem button component="a" href="#section3">
//             <span className="ListColor">
//               {intl.formatMessage(messages.navigationNavbarlink2)}
//             </span>
//           </ListItem>
//           <Divider />
//           <ListItem button component="a" href="/faq">
//             <span className="ListColor"> Faqs</span>
//           </ListItem>
//           <Divider />
//           <ListItem button component="a" href="/faq">
//             <span className="ListColor">
//               {' '}
//               {intl.formatMessage(messages.navigationNavbarlink3)}
//             </span>
//           </ListItem>
//           <Divider />

//           <Button href="/contest/Russia2018/pools/new" variant="raised" color="secondary">
//             {intl.formatMessage(messages.navigationNavbarlink4)}
//           </Button>
//         </List>
//       </div>
//     );

//     return (
//       <div>
//         <Button onClick={this.toggleDrawer('left', true)}>
//           <i className="material-icons">reorder</i>
//         </Button>

//         <Drawer
//           open={this.state.left}
//           onClose={this.toggleDrawer('left', false)}
//         >
//           <div
//             tabIndex={0}
//             role="button"
//             onClick={this.toggleDrawer('left', false)}
//             onKeyDown={this.toggleDrawer('left', false)}
//           >
//             {sideList}
//           </div>
//           {languageSelect}
//         </Drawer>
//       </div>
//     );
//   }
// }

// TemporaryDrawer.propTypes = {
//   intl: PropTypes.object.isRequired,
//   classes: PropTypes.object.isRequired,
//   languageSelect: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(injectIntl(TemporaryDrawer));


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

import MoreVertIcon from '@material-ui/icons/MoreVert';

const messages = defineMessages({
  navigationNavbarlink1: {
    id: 'navigation.navbarlink1',
    defaultMessage: 'How does it works?',
    description: 'Navigation link How does it works?',
  },
  navigationNavbarlink2: {
    id: 'navigation.navbarlink2',
    defaultMessage: 'rules',
    description: 'Navigation link rules',
  },
  navigationNavbarlink3: {
    id: 'navigation.navbarlink3',
    defaultMessage: 'My Pools',
    description: 'Navigation link My Pools',
  },
  navigationNavbarlink4: {
    id: 'navigation.navbarlink4',
    defaultMessage: 'start pool',
    description: 'Navigation link start pool',
  },
});
const styles = theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
  popperClose: {
    pointerEvents: 'none',
  },
});

class ResponsiveNavbar extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = (event) => {
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
              ref={(node) => {
                this.target2 = node;
              }}
            >
              <IconButton
                aria-owns={open ? 'menu-list-collapse' : null}
                aria-haspopup="true"
                onClick={this.handleToggle}
              >
                <MoreVertIcon />
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
                      marginRight: '10px',
                    }}
                  >
                    <MenuList role="menu" style={{ alignText: 'center' }}>
                      <MenuItem>
                        <Button href="#section3">
                          {' '}
                          {intl.formatMessage(messages.navigationNavbarlink1)}
                        </Button>
                      </MenuItem>
                      <Divider />
                      <MenuItem>
                        <Button href="/faq">  {intl.formatMessage(messages.navigationNavbarlink2)}</Button>
                      </MenuItem>
                      <Divider />
                      <MenuItem>
                        <Button href="/faq">FAQs</Button>
                      </MenuItem>
                      <Divider />
                      <MenuItem onClick={this.handleClose}>
                        {' '}
                        <Button
                          href="/contest/Russia2018/pools/new"
                        >
                          {intl.formatMessage(messages.navigationNavbarlink3)}

                        </Button>
                      </MenuItem>
                      <Divider />
                      {languageSelect}

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
  languageSelect: PropTypes.object.isRequired,

};

export default injectIntl((withStyles(styles)(ResponsiveNavbar)));
