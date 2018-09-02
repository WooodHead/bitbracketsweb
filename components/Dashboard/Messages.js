/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
});

function Messages(props) {
  const { classes, messages } = props;
  if (!messages) {
    return null;
  }
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        {messages}
      </Paper>
    </div>
  );
}

Messages.defaultProps = {
  messages: undefined
};
Messages.propTypes = {
  classes: PropTypes.object.isRequired,
  messages: PropTypes.string
};

export default withStyles(styles)(Messages);
