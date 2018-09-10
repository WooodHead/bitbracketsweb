import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    textAlign: 'center',
    color: '#fff'
  }
});

function TextMailchimp(props) {
  const { classes, status, message } = props;

  return (
    <div className={classes.root}>
      {status === 'sending' && (
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <div className={classes.paper}>sending...</div>
          </Grid>
        </Grid>
      )}
      {status === 'error' && (
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <div className={classes.paper}>
              <span style={{ color: '#D50000' }}>
                {' '}
                <i className="fas fa-exclamation-circle fa-3x" />
              </span>
            </div>
            <div className={classes.paper}>{message}</div>
          </Grid>
        </Grid>
      )}
      {status === 'success' && (
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <div className={classes.paper}>
              <span style={{ color: '#69F0AE' }}>
                <i className="fas fa-check-circle fa-3x" />
              </span>
            </div>
            <div className={classes.paper}>{message}</div>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

TextMailchimp.propTypes = {
  classes: PropTypes.object.isRequired,
  status: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default withStyles(styles)(TextMailchimp);
