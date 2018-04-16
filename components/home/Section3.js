import React, { Component } from "react";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import { injectIntl, defineMessages, FormattedMessage } from "react-intl";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";

const messages = defineMessages({
  homeSection3Title1: {
    id: "home.section3.title1",
    defaultMessage: "How does it work?",
    description: "home > section3"
  },
  homeSection3Title2: {
    id: "home.section3.title2",
    defaultMessage: "Create a Pool & Invite Friends",
    description: "home > section3"
  },
  homeSection3Title3: {
    id: "home.section3.title3",
    defaultMessage:
      "Name the pool and determine the entry amount to play in the pool. If you don´t have a crypto wallet learn here.",
    description: "home > section3"
  },
  homeSection3Title4: {
    id: "home.section3.title4",
    defaultMessage:
      "The more participants, the bigger the prize. The pool is secured by a Smart Contract.",
    description: "home > section3"
  },
  homeSection3Title5: {
    id: "home.section3.title5",
    defaultMessage: "Enter prediction",
    description: "home > section3"
  },
  homeSection3Title6: {
    id: "home.section3.title6",
    defaultMessage:
      "Will Costa Rica win against Brazil? This predictions will be saved in the Blockchain. You must enter your predictions before the event starts.",
    description: "home > section3"
  },
  homeSection3Title7: {
    id: "home.section3.title7",
    defaultMessage: "Are you winning?",
    description: "home > section3"
  },
  homeSection3Title8: {
    id: "home.section3.title8",
    defaultMessage:
      "If you are winning, and there’s no chance someone can beat you, publish your high score to the blockchain! The smart contract will validate you are winning and record your high score, if it is true the pool might be yours. The more participants, the bigger the prize. The pool is secured by Smart Contracts.",
    description: "home > section3"
  },
  homeSection3Title9: {
    id: "home.section3.title9",
    defaultMessage: "Fake it until you... somebody can say otherwise!",
    description: "home > section3"
  },
  homeSection3Title10: {
    id: "home.section3.title10",
    defaultMessage: "Fake it until you... somebody can say otherwise!",
    description: "home > section3"
  }
});

class Section3 extends Component {
  render() {
    const { intl } = this.props;
    return (
      <div
        style={{
          paddingTop: "5em",
          backgroundColor: "#374785"
        }}
      >
        <div className="container">
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Typography
                align="center"
                variant="display2"
                gutterBottom
                style={{
                  color: "#fff"
                }}
              >
                {intl.formatMessage(messages.homeSection3Title1)}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardContent align="center">
                <img
                  src="../../static/Invitefriend.png"
                  width="200"
                  height="80"
                />
                <Typography
                  variant="display1"
                  gutterBottom
                  style={{
                    color: "#fff"
                  }}
                >
                  {intl.formatMessage(messages.homeSection3Title2)}
                </Typography>
                <Grid container spacing={24}>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      align="justify"
                      variant="headline"
                      gutterBottom
                      style={{
                        color: "#fff"
                      }}
                    >
                      {intl.formatMessage(messages.homeSection3Title3)}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      align="justify"
                      variant="headline"
                      gutterBottom
                      style={{
                        color: "#fff"
                      }}
                    >
                      {intl.formatMessage(messages.homeSection3Title4)}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardContent align="center">
                <img src="../../static/grupo36.png" width="120" height="80" />

                <Typography
                  align="center"
                  variant="display1"
                  gutterBottom
                  style={{
                    color: "#fff"
                  }}
                >
                  {intl.formatMessage(messages.homeSection3Title5)}
                </Typography>
                <Typography
                  variant="headline"
                  align="justify"
                  style={{ color: "#fff" }}
                >
                  {intl.formatMessage(messages.homeSection3Title6)}
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
              <CardContent align="center">
                <img src="../../static/grupo35.png" width="120" height="80" />
                <Typography
                  gutterBottom
                  variant="display1"
                  component="h2"
                  style={{ color: "#fff" }}
                >
                  {intl.formatMessage(messages.homeSection3Title7)}
                </Typography>
                <Typography
                  variant="headline"
                  align="justify"
                  style={{ color: "#fff" }}
                >
                  {intl.formatMessage(messages.homeSection3Title8)}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardContent align="center">
                <img src="../../static/grupo37.png" width="280" height="80" />
                <Typography
                  gutterBottom
                  variant="display1"
                  component="h2"
                  align="center"
                  style={{ color: "#fff" }}
                >
                  {intl.formatMessage(messages.homeSection3Title9)}
                </Typography>
                <Typography
                  variant="headline"
                  align="justify"
                  style={{ color: "#fff" }}
                >
                  {intl.formatMessage(messages.homeSection3Title10)}
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default injectIntl(Section3);
