import React, { Component } from 'react';
import { injectIntl, defineMessages, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import _ from 'lodash';

import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import { FormLabel } from 'material-ui/Form';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import { CircularProgress } from 'material-ui/Progress';
import withMetaMask from '../HOC/withMetaMask';

import { Router } from '../../routes';

// import PlayerSetupForm from './PlayerSetupForm';
import JoinPaymentForm from './JoinPaymentForm';
import PredictionForm from '../PredictionForm/PredictionForm';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  stepper: {
    width: '60%',
    border: '2px solid lightgray',
    borderRadius: '5px',
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
  nav: {
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
  errorMessage: {
    color: 'red',
    marginTop: theme.spacing.unit * 2,
  },
});

const messages = defineMessages({
  headingPrimary: {
    id: 'JoinPoolLayout.headingPrimary',
    defaultMessage: 'Welcome to {poolName}',
    description: '',
  },
  userSetupStep: {
    id: 'JoinPoolLayout.userSetupStep',
    defaultMessage: 'Player Setup',
    description: '',
  },
  predictionsStep: {
    id: 'JoinPoolLayout.predictionStep',
    defaultMessage: 'Predictions',
    description: '',
  },
  paymentStep: {
    id: 'JoinPoolLayout.paymentStep',
    defaultMessage: 'Payment',
    description: '',
  },
  backButton: {
    id: 'JoinPoolLayout.backButton',
    defaultMessage: 'Back',
    description: '',
  },
  nextButton: {
    id: 'JoinPoolLayout.nextButton',
    defaultMessage: 'Next',
    description: '',
  },
  finishButton: {
    id: 'JoinPoolLayout.finishButton',
    defaultMessage: 'Pay',
    description: '',
  },
  predictionError: {
    id: 'JoinPoolLayout.predictionError',
    defaultMessage: '*You Must Fill All Predictions',
    description: '',
  },
});

class JoinPoolLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 1,
      error: '',
    };
  }

  getSteps() {
    const { intl } = this.props;

    return [
      // intl.formatMessage(messages.userSetupStep),
      intl.formatMessage(messages.predictionsStep),
      intl.formatMessage(messages.paymentStep),
    ];
  }

  renderStepper(steps, activeStep) {
    return (
      <Stepper activeStep={activeStep - 1} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
                    ))}
      </Stepper>
    );
  }

  renderNavigator(activeStep) {
    const {
      classes, intl, form, pool, predictions,
    } = this.props;
    console.log('JoinPoolLayout', 'Pool ', pool);
    console.log('JoinPoolLayout', 'predictions ', predictions);

    return (
      <div className={classes.nav}>
        <Button
          onClick={this.handleBack}
          className={classes.backButton}
          disabled={activeStep === 1 || pool.loading}
        >
          {intl.formatMessage(messages.backButton)}
        </Button>
        <Button
          variant="raised"
          color="primary"
          onClick={this.handleNext}
          disabled={predictions.loading || pool.loading}
        >
          {activeStep === this.getSteps().length ?
                        intl.formatMessage(messages.finishButton)
                        : intl.formatMessage(messages.nextButton)}
        </Button>
        {(predictions.loading || pool.loading) && <CircularProgress size={24} className={classes.buttonProgress} />}
      </div>
    );
  }

  getStepContent(stepIndex) {
    const {
      groups, matches, predictions, update, read, team, pool
    } = this.props;

    const JoinPaymentFormWithMM = withMetaMask(JoinPaymentForm);

    switch (stepIndex) {
      // case 1:
      //     return <PlayerSetupForm />;
      case 1:
        return (<PredictionForm
          team={team}
          groups={groups}
          matches={matches}
          predictions={predictions.predictions}
          update={update}
          read={read || predictions.loading}
        />);
      case 2:
        return <JoinPaymentFormWithMM pool={pool} />;
      default:
        return 'Unknown stepIndex';
    }
  }

    handleNext = () => {
      const { activeStep } = this.state;
      const {
        intl, pool, form, predictions, apiPredictions, matches,
      } = this.props;

      const lastStep = this.getSteps().length;

      switch (activeStep) {
        case 1:
          const numberMatches = _.filter(matches, match => _.isObject(match)).length;
          const numberPredictions = _.filter(predictions.predictions, prediction => _.isObject(prediction)).length;
          if (numberMatches === numberPredictions) {
            this.props.save(pool, predictions.predictions)
              .then(() => this.setState({ activeStep: activeStep + 1, error: '' }))
              .catch(err => console.log('Error: ', err));
          } else {
            this.setState({ error: intl.formatMessage(messages.predictionError) });
          }
          break;
        case lastStep:
          this.props.onSubmit(pool.info, apiPredictions)
            .then(poolAddress => Router.pushRoute(`/pools/${pool.address}?prediction=success`))
            .catch(err => console.error('Error: ', err));
          break;
        default:
          throw new Error('unexpected error');
      }
    };

    handleBack = () => {
      const { activeStep } = this.state;
      this.setState({
        activeStep: activeStep - 1,
      });
    };

    render() {
      const { classes, intl, pool } = this.props;
      const { activeStep, error } = this.state;

      return (
        <div className={classes.root}>
          <Typography className={classes.headingPrimary} variant="headline" align="center" gutterBottom>
            {intl.formatMessage(messages.headingPrimary, { poolName: pool.info.name })}
          </Typography>
          <div className={classes.stepper}>
            {this.renderStepper(this.getSteps(), activeStep)}
          </div>
          <Typography className={classes.headingSecondary} variant="title" gutterBottom>
            {`${activeStep}. ${this.getSteps()[activeStep - 1]}`}
          </Typography>
          {this.getStepContent(activeStep)}
          <Typography className={classes.errorMessage} variant="caption">
            {`${error}`}
          </Typography>
          {this.renderNavigator(activeStep)}
        </div>
      );
    }
}


const mapStateToProps = state => ({
  form: state.forms.joinPool,
  apiPredictions: state.predictions.apiPredictions ? state.predictions.apiPredictions : [],
});

export default withStyles(styles)(injectIntl(connect(mapStateToProps)(JoinPoolLayout)));
