/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, defineMessages } from 'react-intl';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

import { withStyles } from 'material-ui/styles';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { CircularProgress } from 'material-ui/Progress';

import web3 from '../../ethereum/web3';
import PoolSetupForm from './PoolSetupForm';
import ReviewDetailsForm from './ReviewDetailsForm';
import PaymentForm from './PaymentForm';
import withMetaMask from '../HOC/withMetaMask';
import { Router } from '../../routes';

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
});

const messages = defineMessages({
  headingPrimary: {
    id: 'headingPrimary',
    defaultMessage: 'Create Pool',
    description: 'Create Pool Page -> Create Pool Form -> Primary Tittle',
  },
  poolSetupStep: {
    id: 'poolSetupStep',
    defaultMessage: 'Pool Setup',
    description: 'Create Pool Page -> Create Pool Form -> Pool Setup Step',
  },
  reviewDetailsStep: {
    id: 'reviewDetailsStep',
    defaultMessage: 'Review Details',
    description: 'Create Pool Page -> Create Pool Form -> Review Details Step',
  },
  paymentStep: {
    id: 'paymentStep',
    defaultMessage: 'Payment',
    description: 'Create Pool Page -> Create Pool Form -> Payment Step',
  },
  backButton: {
    id: 'backButton',
    defaultMessage: 'Back',
    description: 'Create Pool Page -> Create Pool Form -> Back Step Button Label',
  },
  nextButton: {
    id: 'nextButton',
    defaultMessage: 'Next',
    description: 'Create Pool Page -> Create Pool Form -> Next Step Button Label',
  },
  finishButton: {
    id: 'finishButton',
    defaultMessage: 'Finish',
    description: 'Create Pool Page -> Create Pool Form -> Finish Steps Button Label',
  },
});

const FEE = '10000000000000000';

class CreatePoolForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 1,
    };
  }

  componentWillMount() {
    this.props.dispatch(actions.change('createPool.entryFee', web3.utils.fromWei(FEE, 'ether')));
  }

  getSteps() {
    const { intl } = this.props;

    return [
      intl.formatMessage(messages.poolSetupStep),
      intl.formatMessage(messages.reviewDetailsStep),
      intl.formatMessage(messages.paymentStep),
    ];
  }


  getStepContent = (stepIndex) => {
    const { contest } = this.props;
    // const PoolSetupWithMM = withMetaMask(PoolSetupForm);
    // const ReviewDetailsWithMM = withMetaMask(ReviewDetailsForm);
    const PaymentFormWithMM = withMetaMask(PaymentForm);
    switch (stepIndex) {
      case 1:
        return <PoolSetupForm />;
      case 2:
        return <ReviewDetailsForm />;
      case 3:
        return <PaymentFormWithMM contest={contest} />;
      default:
        return 'Unknown stepIndex';
    }
  }

    handleNext = async (event) => {
      event.preventDefault();
      const { activeStep } = this.state;
      const { pool, form, contest } = this.props;
      const lastStep = this.getSteps().length;

      switch (activeStep) {
        case 1:
          this.props.dispatch(actions.submit('createPool'));
          if (form.$form.valid) {
            this.props.onNext(pool);
            this.setState({ activeStep: activeStep + 1 });
          }
          break;
        case 2:
          if (form.$form.valid) this.setState({ activeStep: activeStep + 1 });
          break;
        case lastStep:
          pool.contestName = contest;
          pool.fee = FEE;
          // TODO: Message to tell user it will be redirected in a few moments
          // TODO: update state on error
          this.props.onSubmit(pool)
            .then(poolAddress => Router.pushRoute(`/pools/${poolAddress}`))
            .catch(err => console.error('Error: ', err));
          break;
        default:
          break;
      }
    };

    handleBack = () => {
      const { activeStep } = this.state;
      this.setState({
        activeStep: activeStep - 1,
      });
    };

    handleSubmit = () => {

    }

    renderNavigator(activeStep) {
      const {
        classes, intl, form, pool,
      } = this.props;

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
            disabled={!(form.terms.value && form.rules.value) || pool.loading}
          >
            {activeStep === this.getSteps().length ?
                            intl.formatMessage(messages.finishButton)
                            : intl.formatMessage(messages.nextButton)}
          </Button>
          {pool.loading && <CircularProgress size={24} className={classes.buttonProgress} />}
        </div>
      );
    }

    renderStepper = (steps, activeStep) => (
      <Stepper activeStep={activeStep - 1} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
                        ))}
      </Stepper>
    )

    render() {
      const { classes, intl, contest } = this.props;
      const { activeStep } = this.state;

      return (
        <div className={classes.root}>
          <Typography className={classes.headingPrimary} variant="headline" align="center" gutterBottom>
            {intl.formatMessage(messages.headingPrimary)} {`${contest}`}
          </Typography>
          <div className={classes.stepper}>
            {this.renderStepper(this.getSteps(), activeStep)}
          </div>
          <Typography className={classes.headingSecondary} variant="title" gutterBottom>
            {`${activeStep}. ${this.getSteps()[activeStep - 1]}`}
          </Typography>
          {this.getStepContent(activeStep)}
          {this.renderNavigator(activeStep)}
        </div>
      );
    }
}

CreatePoolForm.propTypes = {
  contest: PropTypes.string.isRequired,
  intl: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};


const mapStateToProps = ({ forms }) => ({
  form: forms.createPool,
});

export default withStyles(styles)(injectIntl(connect(mapStateToProps)(CreatePoolForm)));
