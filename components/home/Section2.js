import React, { Component } from "react";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import { injectIntl, defineMessages, FormattedMessage } from "react-intl";

const messages = defineMessages({
  homeSection2Title1: {
    id: "home.section2.title1",
    defaultMessage: "Be a die hard soccer & Crypto fan",
    description: "home > section2"
  },
  homeSection2Title2: {
    id: "home.section2.title2",
    defaultMessage: "this 2018 World Cup",
    description: "home > section2"
  },
  homeSection2Title3: {
    id: "home.section2.title3",
    defaultMessage:
      " Create your own soccer pool using cryptocurrencies with your friends, pets, family, people in your office or crypto enthusiasts and start predicting who will win each match and win big. Cryptocurrencies are in and are growing, help the crypto community grow by inviting friends to play and spread the word.",
    description: "home > section2"
  },
  homeSection2Title4: {
    id: "home.section2.title4",
    defaultMessage: "Easy",
    description: "home > section2"
  },
  homeSection2Title5: {
    id: "home.section2.title5",
    defaultMessage: "Secure",
    description: "home > section2"
  },
  homeSection2Title6: {
    id: "home.section2.title6",
    defaultMessage: "& Fun",
    description: "home > section2"
  }
});

class Section2 extends Component {
  render() {
    const { intl } = this.props;
    return (
      <div
        className="container"
        style={{ paddingTop: "5em", paddingBottom: "5em" }}
      >
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="display2"
              gutterBottom
              style={{ color: "black", fontWeight: "500" }}
            >
              {intl.formatMessage(messages.homeSection2Title1)}
              {/* <FormattedMessage id="home.section2.title1" /> */}
              <br />
              {intl.formatMessage(messages.homeSection2Title2)}
            </Typography>
            <Typography
              variant="headline"
              gutterBottom
              style={{
                color: "black",
                fontWeight: "400",
                letterSpacing: "0.5px"
              }}
            >
              {intl.formatMessage(messages.homeSection2Title3)}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              align="center"
              variant="display1"
              gutterBottom
              style={{ color: "#E72459", fontWeight: "400" }}
            >
              {intl.formatMessage(messages.homeSection2Title4)} <br />{" "}
              {intl.formatMessage(messages.homeSection2Title5)} <br />{" "}
              {intl.formatMessage(messages.homeSection2Title6)}
            </Typography>
          </Grid>

          <style jsx>{``}</style>
        </Grid>
      </div>
    );
  }
}

export default injectIntl(Section2);
