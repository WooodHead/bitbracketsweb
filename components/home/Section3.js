import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { injectIntl, defineMessages, FormattedMessage } from 'react-intl';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import ScrollableAnchor from 'react-scrollable-anchor';

const messages = defineMessages({
  homeSection3Title1: {
    id: 'home.section3.title1',
    defaultMessage: 'How does it work?',
    description: 'home > section3'
  },
  homeSection3Title2: {
    id: 'home.section3.title2',
    defaultMessage: 'Create a Pool & Invite Friends',
    description: 'home > section3'
  },
  homeSection3Title3: {
    id: 'home.section3.title3',
    defaultMessage:
      'Name the pool and determine the entry amount to play in the pool. If you don´t have a crypto wallet learn here.',
    description: 'home > section3'
  },
  homeSection3Title4: {
    id: 'home.section3.title4',
    defaultMessage:
      'The more participants, the bigger the prize. The pool is secured by a Smart Contract.',
    description: 'home > section3'
  },
  homeSection3Title5: {
    id: 'home.section3.title5',
    defaultMessage: 'Enter prediction',
    description: 'home > section3'
  },
  homeSection3Title6: {
    id: 'home.section3.title6',
    defaultMessage:
      'Will Costa Rica win against Brazil? This predictions will be saved in the Blockchain. You must enter your predictions before the event starts.',
    description: 'home > section3'
  },
  homeSection3Title7: {
    id: 'home.section3.title7',
    defaultMessage: 'Are you winning?',
    description: 'home > section3'
  },
  homeSection3Title8: {
    id: 'home.section3.title8',
    defaultMessage:
      'If you are winning, and there’s no chance someone can beat you, publish your high score to the blockchain! The smart contract will validate you are winning and record your high score, if it is true the pool might be yours. The more participants, the bigger the prize. The pool is secured by Smart Contracts.',
    description: 'home > section3'
  },
  homeSection3Title9: {
    id: 'home.section3.title9',
    defaultMessage: 'Fake it until you... somebody can say otherwise!',
    description: 'home > section3'
  },
  homeSection3Title10: {
    id: 'home.section3.title10',
    defaultMessage: 'Fake it until you... somebody can say otherwise!',
    description: 'home > section3'
  }
});
const styles = theme => ({
  title: {
    color: '#616161',
    paddingTop: '1em',
    fontWeight: '500',
    fontSize: '28px'
  },
  Subtitle: {
    paddingTop: '1.5em',
    color: '#757575',

    fontSize: '21px'
  },
  text: {
    paddingTop: '1.5em',
    color: '#9E9E9E',
    lineHeight: '1.6',

    fontSize: '16px'
  }
});
class Section3 extends Component {
  render() {
    const { intl, classes } = this.props;
    return (
      <ScrollableAnchor id={'section3'}>
        <div
          style={{
            paddingTop: '5em'
          }}
        >
          <div className="container">
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <div align="center" className={classes.title}>
                  {intl.formatMessage(messages.homeSection3Title1)}
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <CardContent align="center">
                  <img
                    src="../../static/cellEther.png"
                    width="200"
                    height="200"
                    alt=""
                  />
                  <div className={classes.Subtitle}>
                    {intl.formatMessage(messages.homeSection3Title2)}
                  </div>
                  <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                      <div className={classes.text} align="justify">
                        {intl.formatMessage(messages.homeSection3Title3)}
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <div className={classes.text} align="justify">
                        {intl.formatMessage(messages.homeSection3Title4)}
                      </div>
                    </Grid>
                  </Grid>
                </CardContent>
              </Grid>
              <Grid item xs={12} sm={6}>
                <CardContent align="center">
                  <img
                    src="../../static/computerEther.png"
                    width="200"
                    height="200"
                    alt=""
                  />

                  <div className={classes.Subtitle} align="center">
                    {intl.formatMessage(messages.homeSection3Title5)}
                  </div>
                  <div className={classes.text} align="justify">
                    {intl.formatMessage(messages.homeSection3Title6)}
                  </div>
                </CardContent>
              </Grid>
            </Grid>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={6}>
                <CardContent align="center">
                  <img
                    src="../../static/computer.png"
                    width="200"
                    height="200"
                    alt=""
                  />
                  <div className={classes.Subtitle}>
                    {intl.formatMessage(messages.homeSection3Title7)}
                  </div>
                  <div className={classes.text} align="justify">
                    {intl.formatMessage(messages.homeSection3Title8)}
                  </div>
                </CardContent>
              </Grid>
              <Grid item xs={12} sm={6}>
                <CardContent align="center">
                  <img
                    src="../../static/computerperson.png"
                    width="200"
                    height="200"
                    alt=""
                  />
                  <div className={classes.Subtitle} align="center">
                    {intl.formatMessage(messages.homeSection3Title9)}
                  </div>
                  <div className={classes.text} align="justify">
                    {intl.formatMessage(messages.homeSection3Title10)}
                  </div>
                </CardContent>
              </Grid>
            </Grid>
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default injectIntl(withStyles(styles)(Section3));
