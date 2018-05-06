/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, defineMessages } from 'react-intl';
import Typography from 'material-ui/Typography';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import { withStyles } from 'material-ui/styles';


const messages = defineMessages({
  headingTertiary1: {
    id: 'headingTertiary1',
    defaultMessage: 'You Need To Install MetaMask to Continue',
    description: '',
  },
  help: {
    id: 'help',
    defaultMessage: 'Here some help:',
    description: '',
  },
  installHeader: {
    id: 'installHeader',
    defaultMessage: 'How to Install MetaMask',
    description: '',
  },
  installDescription: {
    id: 'installDescription',
    defaultMessage: '...',
    description: '',
  },
  etherHeader: {
    id: 'etherHeader',
    defaultMessage: 'Getting Ether Your Digital Currency',
    description: '',
  },
  etherDescription: {
    id: 'etherDescription',
    defaultMessage: '...',
    description: '',
  },
  sendHeader: {
    id: 'sendHeader',
    defaultMessage: 'How to Send ETH to MetaMask',
    description: '',
  },
  sendDescription: {
    id: 'sendDescription',
    defaultMessage: '...',
    description: '',
  },
  headingTertiary2: {
    id: 'headingTertiary2',
    defaultMessage: 'Payment Details',
    description: '',
  },
  entryLabel: {
    id: 'entryLabel',
    defaultMessage: 'Entry Price',
    description: '',
  },
  feeLabel: {
    id: 'feeLabel',
    defaultMessage: 'Entry Fee',
    description: '',
  },
  totalLabel: {
    id: 'totalLabel',
    defaultMessage: 'TOTAL',
    description: '',
  },
});

const styles = theme => ({
  headingTertiary: {
    fontWeight: 'bold',
    marginBottom: theme.spacing.unit * 2,
  },
  formBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    backgroundColor: 'white',
    border: '2px solid lightgray',
    borderRadius: '5px',
    padding: theme.spacing.unit * 3,
  },
  textField: {
    marginBottom: theme.spacing.unit,
    // width: '60%',
  },
  division: {
    alignSelf: 'center',
    width: '100%',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  expansionPanel: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 2,
  },
});

const MetaMaskNotInstalled = ({ intl, classes }) => (
  <div>
    <Typography className={classes.headingTertiary} variant="subheading">
      {intl.formatMessage(messages.headingTertiary1)}
    </Typography>

    <Typography>
      {intl.formatMessage(messages.help)}
    </Typography>

    <div className={classes.expansionPanel}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{intl.formatMessage(messages.installHeader)}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {intl.formatMessage(messages.installDescription)}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{intl.formatMessage(messages.etherHeader)}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {intl.formatMessage(messages.etherDescription)}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{intl.formatMessage(messages.sendHeader)}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {intl.formatMessage(messages.sendDescription)}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  </div>
);

MetaMaskNotInstalled.propTypes = {
  intl: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

// MetaMaskNotInstalled.getInitialProps = () => ({});

export default withStyles(styles)(injectIntl(MetaMaskNotInstalled));
