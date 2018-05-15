/* eslint-disable react/forbid-prop-types */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { injectIntl, defineMessages, FormattedMessage } from 'react-intl';
import _ from 'lodash';

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { CircularProgress } from 'material-ui/Progress';
import PredictionForm from './PredictionForm';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  headingPrimary: {
    fontWeight: 'bold',
    marginTop: theme.spacing.unit * 3,
  },
  headingSecondary: {
    fontWeight: 'bold',
    width: '60%',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  form: {
    width: '80%',
    paddingTop: theme.spacing.unit * 2,
  },
  actions: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    position: 'relative',
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});

const messages = defineMessages({
  headingPrimary: {
    id: 'PredictionForm.headingPrimary',
    defaultMessage: '[MY] Predictions',
    description: '',
  },
  headingSecondary: {
    id: 'PredictionForm.headingSecondary',
    defaultMessage: '[NAME] Crypto Pool',
    description: '',
  },
  backButton: {
    id: 'PredictionForm.backButton',
    defaultMessage: 'Back to Pool Dashboard',
    description: '',
  },
  finishButton: {
    id: 'PredictionForm.finishButton',
    defaultMessage: 'Save Predictions',
    description: '',
  },
});

class PredictionLayout extends Component {
  renderActions() {
    const {
      classes, intl, predictions, save, read,
    } = this.props;

    if (read) return <div className={classes.actions} />;

    return (
      <div className={classes.actions}>
        <Button
          variant="raised"
          color="primary"
          onClick={() => save(predictions)}
          disabled={predictions.loading}
        >
          {intl.formatMessage(messages.finishButton)}
        </Button>
        {predictions.loading && <CircularProgress size={24} className={classes.buttonProgress} />}
      </div>
    );
  }

  render() {
    const {
      classes, intl, groups, matches, predictions, update, read,
    } = this.props;

    return (
      <div className={classes.root}>
        <Typography className={classes.headingPrimary} variant="headline" align="center" gutterBottom>
          {intl.formatMessage(messages.headingPrimary)}
        </Typography>
        <Typography className={classes.headingSecondary} variant="headline" align="center" gutterBottom>
          {intl.formatMessage(messages.headingSecondary)}
        </Typography>
        <PredictionForm
          team={team}
          groups={groups}
          matches={matches}
          predictions={predictions}
          update={update}
          read={read}
        />
        {this.renderActions()}
      </div>
    );
  }
}

PredictionLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  matches: PropTypes.object.isRequired,
  predictions: PropTypes.object.isRequired,
  update: PropTypes.object.isRequired,
  read: PropTypes.object.isRequired,
  groups: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
  save: PropTypes.func.isRequired,
 
};
export default withStyles(styles)(injectIntl(PredictionLayout));
