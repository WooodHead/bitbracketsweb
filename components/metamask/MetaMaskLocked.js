
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, defineMessages } from 'react-intl';
import Typography from 'material-ui/Typography';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';


const messages = defineMessages({
  metalockedtitle: {
    id: 'metalockedtitle',
    defaultMessage: 'Your MetaMask is locked',
    description: '',
  },
  unlockedmeta: {
    id: 'unlockedmeta',
    defaultMessage: 'Simply open MetaMask and follow the instructions to unlock it.',
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


  root: {
    marginTop: '100px',
    marginBottom: '100px',
    flexGrow: 1,
    textAlign: 'center',
    justify: 'center',
  },
  image: {
    '&:hover': {
      animation: 'shake 0.5s',
      animationIterationCount: 'infinite',
    },
  },


});


class MetamaskLocked extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {

  }

  render() {
    const { classes, intl } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography className={classes.headingTertiary} variant="headline">
              {intl.formatMessage(messages.metalockedtitle)}
            </Typography>


          </Grid>

          <Grid item xs={12}>
            <Typography variant="subheading" className={classes.help}>
              {intl.formatMessage(messages.unlockedmeta)}

            </Typography>

          </Grid>


        </Grid>

        <div className={classes.image}>
          <img src="/static/metalocked.png" alt="metamask" height="250" width="350" />


        </div>
      </div>
    );
  }
}

MetamaskLocked.propTypes = {
  intl: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

MetamaskLocked.getInitialProps = ctx => ({});

export default withStyles(styles)(injectIntl(MetamaskLocked));
