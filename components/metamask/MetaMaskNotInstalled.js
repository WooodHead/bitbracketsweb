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
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';


const messages = defineMessages({
  headingTertiary1: {
    id: 'headingTertiary1',
    defaultMessage: 'You Need To Install MetaMask to Continue',
    description: '',
  },
  help: {
    id: 'help',
    defaultMessage: 'Follow these steps:',
    description: '',
  },
  installHeader: {
    id: 'installHeader',
    defaultMessage: 'How to Install MetaMask',
    description: '',
  },
  installDescription: {
    id: 'installDescription',
    defaultMessage: 'Add MetaMask extension - Go to metamask page',
    description: '',
  },
  installDescription1: {
    id: 'installDescription1',
    defaultMessage: 'here',
    description: '',
  },
  installDescription2: {
    id: 'installDescription2',
    defaultMessage: 'Then Create an account. You are given a seed phrase that can be used to restore all the accounts you ever create withing Metamask.',
    description: '',
  },
  etherHeader: {
    id: 'etherHeader',
    defaultMessage: 'Getting Ether Your Digital Currency',
    description: '',
  },
  etherDescription: {
    id: 'etherDescription',
    defaultMessage: 'You will need to purchase ETH from an exchange, and then transfer the ETH from your exchange wallet to your MetaMask wallet',
    description: '',
  },
  etherDescription1: {
    id: 'etherDescription1',
    defaultMessage: 'You cannot use USD with BitBrackets pools — any currencies need to be converted into ETH first.',
    description: '',
  },
  etherDescription2: {
    id: 'etherDescription2',
    defaultMessage: 'You can try BitBrackets with play money if you are using the Rinkeby test platform at https://rinkeby.bitbrackets.io, follow this link to load MetaMask with play ether',
    description: '',
  },
  sendHeader: {
    id: 'sendHeader',
    defaultMessage: 'How to Send ETH to MetaMask',
    description: '',
  },
  sendDescription: {
    id: 'sendDescription',
    defaultMessage: 'If you want to try BitBrackets with Play money follow the instructions here to load play money into your wallet:',
    description: '',
  },
  sendDescription2: {
    id: 'sendDescription2',
    defaultMessage: 'If you want to try with Play money follow the instructions here to load play money into your wallet:',
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
    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
    },
  },
  help: {
    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
    },
  },
  formBox: {
    // display: 'flex',
    // flexDirection: 'column',
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
    [theme.breakpoints.up('md')]: {
      margin: 'auto',
      paddingLeft: '300px',
      paddingRight: '300px',
    },
  },
  root: {
    marginTop: '100px',
    flexGrow: 1,
    textAlign: 'center',
    justify: 'center',
  },

  rootPaper: theme.mixins.gutters({
    paddingTop: 56,
    paddingBottom: 56,
    paddingLeft: 170,

    marginTop: theme.spacing.unit * 3,
    margin: 'auto',


  }),
  images: {
    [theme.breakpoints.down('md')]: {
      marginLeft: '45px',
    },
  },

});

const MetaMaskNotInstalled = ({ intl, classes }) => (
  <div className={classes.root}>
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Typography className={classes.headingTertiary} variant="display2">
          {intl.formatMessage(messages.headingTertiary1)}
        </Typography>
        <img src="/static/metamask.png" alt="metamask" height="150" width="130" />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="display2" className={classes.help}>
          {intl.formatMessage(messages.help)}

        </Typography>

      </Grid>
      <div />


      <Grid item xs={12}>
        <div className={classes.expansionPanel}>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{intl.formatMessage(messages.installHeader)}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>

              <ol style={{ textAlign: 'left' }}>
                <li><Typography>{intl.formatMessage(messages.installDescription)}</Typography>
                  <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer">
                    <Typography>{intl.formatMessage(messages.installDescription1)}</Typography>
                  </a>
                </li>

                <img src="./../../static/metamaskpic.png" alt="metamask" height="150" width="150" />
                <li><Typography>{intl.formatMessage(messages.installDescription2)}</Typography>
                </li>

              </ol>


            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                {intl.formatMessage(messages.etherHeader)}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>

              <ol style={{ textAlign: 'left' }}>
                <li><Typography>{intl.formatMessage(messages.etherDescription)}   </Typography>
                  <a href="https://blockgeeks.com/guides/best-cryptocurrency-exchanges/" target="_blank" rel="noopener noreferrer">
                    <Typography>https://blockgeeks.com/guides/best-cryptocurrency-exchanges/   </Typography>
                  </a>
                </li>

                <li>
                  <Typography>{intl.formatMessage(messages.etherDescription1)}</Typography>
                </li>
                <li>
                  <Typography>{intl.formatMessage(messages.etherDescription2)}</Typography>
                  <a href="https://faucet.rinkeby.io/" target="_blank" rel="noopener noreferrer">
                    <Typography>Rinkeby Authenticated Faucet</Typography>
                  </a>
                </li>

              </ol>


            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{intl.formatMessage(messages.sendHeader)}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>

              <ol style={{ textAlign: 'left' }}>
                <li> <Typography>{intl.formatMessage(messages.sendDescription)}</Typography>
                  <a href="https://faucet.rinkeby.io/" target="_blank" rel="noopener noreferrer">
                    <Typography>Rinkeby Authenticated Faucet</Typography>
                  </a>
                </li>


              </ol>


            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </Grid>


    </Grid>


  </div>
);

MetaMaskNotInstalled.propTypes = {
  intl: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

// MetaMaskNotInstalled.getInitialProps = () => ({});

export default withStyles(styles)(injectIntl(MetaMaskNotInstalled));

// type metamask in the search bar
// add metamaks to chrome with chrome extensions wait till
// the instalation is completed , then go to metamask oficial website ,
// then click at the icon in the upper right corner
// a pop-up window will apear you will see privacy statement which should be double confirmed
// then create a password and re-enter it then press crate button
// then you will see the window containing 12 words you will need them to restore your account that´s why you should copy and save
// in a text file
// then click on the advanced setting in your account window and choose copy address this is your wallet adress you should
// save it in the created text file now you are ready to become an investor refill etherium wallet and transfer a desirable sum to our
// contract address

