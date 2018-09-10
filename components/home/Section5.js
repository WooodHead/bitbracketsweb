//

import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from 'material-ui/Card';
import CardContent from 'material-ui/Card/CardContent';
import CardMedia from 'material-ui/Card/CardMedia';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';

import { injectIntl, defineMessages, FormattedMessage } from 'react-intl';

const messages = defineMessages({
  homeSection5Title1: {
    id: 'home.section5.title1',
    defaultMessage: 'Play your favorite sport events with Cryptocurrency',
    description: 'home > section3'
  }
});

const styles = theme => ({
  card: {
    display: 'flex'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 151,
    height: 151
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  }
});

class Section5 extends Component {
  render() {
    const { intl, classes, theme } = this.props;
    return (
      <div
        style={{
          // background: '#418BFF',
          padding: '12%',
          textAlign: 'center'
        }}
      >
        <div
          variant="display1"
          gutterBottom
          align="center"
          style={{ color: '#fff' }}
        >
          {intl.formatMessage(messages.homeSection5Title1)}
        </div>
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography variant="headline">Live From Space</Typography>
              <Typography variant="subheading" color="textSecondary">
                Mac Miller
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <IconButton aria-label="Previous">
                {theme.direction === 'rtl'
                  ? '  <SkipNextIcon />'
                  : '  <SkipPreviousIcon />'}
              </IconButton>
              <IconButton aria-label="Play/pause">play</IconButton>
              <IconButton aria-label="Next">
                {theme.direction === 'rtl'
                  ? '  <SkipPreviousIcon />'
                  : '  <SkipNextIcon />'}
              </IconButton>
            </div>
          </div>
          <CardMedia
            component="video"
            src="../../static/Create Pool video 480p.mov"
            title="Live from space album cover"
          />
        </Card>
        );
        {/* <MailchimpSubscribe /> */}
      </div>
    );
  }
}

export default injectIntl(withStyles(styles, { withTheme: true })(Section5));
