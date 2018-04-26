import React, { Component } from "react";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import { injectIntl, defineMessages, FormattedMessage } from "react-intl";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";

const messages = defineMessages({
  homeSection4Title1: {
    id: "home.section4.title1",
    defaultMessage: "Claim the prize",
    description: "home > section3"
  },
  homeSection4Title2: {
    id: "home.section4.title2",
    defaultMessage: "The Balance of the pool goes to the winner",
    description: "home > section3"
  },
  homeSection4Title3: {
    id: "home.section4.title3",
    defaultMessage: "If you are the pool creator you will win a ",
    description: "home > section3"
  },
  homeSection4Title4: {
    id: "home.section4.title4",
    defaultMessage: "fee of the pool for helping to spread crypto awareness",
    description: "home > section3"
  }
});

class Section4 extends Component {
  render() {
    const { intl } = this.props;
    return (
      <div style={{ marginTop: "2em", marginBottom: "2em", marginLeft: "1em" }}>
        <div className="container">
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6} align="center">
              <img src="../../static/img4.png" width="200" height="200" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="display2"
                align="justify"
                gutterBottom
                style={{ color: "black", fontWeight: "500" }}
              >
                {intl.formatMessage(messages.homeSection4Title1)}
              </Typography>
              <Typography
                variant="headline"
                align="justify"
                style={{
                  color: "black",
                  fontWeight: "400",
                  letterSpacing: "0.5px"
                }}
              >
                {intl.formatMessage(messages.homeSection4Title2)}
                <br />
                {intl.formatMessage(messages.homeSection4Title3)}

                <span style={{ color: "#E72459" }}>%</span>
                {intl.formatMessage(messages.homeSection4Title4)}
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default injectIntl(Section4);
