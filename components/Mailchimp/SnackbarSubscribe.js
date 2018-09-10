import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4
  },
  success: {
    backgroundColor: 'green'
  }
});

class SnackbarSubscribe extends React.Component {
  render() {
    const { classes, text, submit } = this.props;
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          open={submit}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id="message-id">{text}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.props.handleClose}
            >
              <i className="fas fa-times-circle" />
            </IconButton>
          ]}
        />
      </div>
    );
  }
}

SnackbarSubscribe.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.object.isRequired,
  submit: PropTypes.bool.isRequired
};

export default withStyles(styles)(SnackbarSubscribe);
