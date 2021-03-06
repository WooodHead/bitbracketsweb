import React, { Component } from 'react';
import { connect } from 'react-redux';
import { injectIntl, defineMessages, FormattedMessage } from 'react-intl';
import { Control, Form, actions } from 'react-redux-form';

import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
// import { FormLabel } from 'material-ui/Form';
// import ExpansionPanel, {
//   ExpansionPanelSummary,
//   ExpansionPanelDetails,
// } from 'material-ui/ExpansionPanel';
// import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  headingTertiary: {
    fontWeight: 'bold',
    marginBottom: theme.spacing.unit * 2
  },
  formBox: {
    backgroundColor: '#fff',
    padding: '20px',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      width: '60%',
      backgroundColor: 'white',
      border: '2px solid lightgray',
      borderRadius: '5px',
      padding: theme.spacing.unit * 3
    }
  },
  textField: {
    marginBottom: theme.spacing.unit
    // width: '60%',
  },
  division: {
    alignSelf: 'center',
    width: '100%',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  expansionPanel: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 2
  }
});

const messages = defineMessages({
  headingTertiary2: {
    id: 'headingTertiary2',
    defaultMessage: 'Payment Details',
    description: ''
  },
  entryLabel: {
    id: 'entryLabel',
    defaultMessage: 'Entry Price',
    description: ''
  },
  feeLabel: {
    id: 'feeLabel',
    defaultMessage: 'Pool Creation Fee',
    description: ''
  },
  totalLabel: {
    id: 'totalLabel',
    defaultMessage: 'TOTAL',
    description: ''
  }
});

class PaymentForm extends Component {
  renderPaymentDetails() {
    const { classes, intl, forms, contest } = this.props;

    return (
      <Form className={classes.formBox} model="createPool">
        <Typography className={classes.headingTertiary} variant="subheading">
          {intl.formatMessage(messages.headingTertiary2)}
        </Typography>
        <Grid container alignItems="baseline">
          <Grid item xs={3}>
            <Typography>{intl.formatMessage(messages.feeLabel)}</Typography>
          </Grid>
          <Grid item xs={9}>
            <Control.text
              className={classes.textField}
              model=".entryFee"
              component={TextField}
              disabled
              InputProps={{ disableUnderline: true }}
              helperText="ETH"
            />
          </Grid>
        </Grid>

        <Divider className={classes.division} />

        <Grid container alignItems="baseline">
          <Grid item xs={3}>
            <Typography>{intl.formatMessage(messages.totalLabel)}</Typography>
          </Grid>
          <Grid item xs={9}>
            <Control.text
              className={classes.textField}
              model=".entryFee"
              component={TextField}
              disabled
              InputProps={{ disableUnderline: true }}
              helperText="ETH"
            />
          </Grid>
        </Grid>
      </Form>
    );
  }

  render() {
    return (
      // this.renderPayment()
      this.renderPaymentDetails()
    );
  }
}

const mapStateToProps = ({ forms }) => ({
  form: forms.createPool
});

const ConnectedPaymentForm = connect(mapStateToProps)(PaymentForm);

export default withStyles(styles)(injectIntl(ConnectedPaymentForm));
