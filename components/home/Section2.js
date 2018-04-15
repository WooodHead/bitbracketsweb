import React, { Component } from "react";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import { FormattedMessage } from "react-intl";

class Section2 extends Component {
  render() {
    return (
      <div className="container" style={{ paddingTop: "5em" }}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="display2"
              gutterBottom
              style={{ color: "black", fontWeight: "500" }}
            >
              <FormattedMessage id="home.section2.title1" />
              <br />
              <FormattedMessage id="home.section2.title2" />
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
              Create your own soccer pool using cryptocurrencies with your
              friends, pets, family, people in your office or crypto enthusiasts
              and start predicting who will win each match and win big.
              Cryptocurrencies are in and are growing, help the crypto community
              grow by inviting friends to play and spread the word.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              align="center"
              variant="display1"
              gutterBottom
              style={{ color: "#E72459", fontWeight: "400" }}
            >
              Easy <br /> Secure <br /> & Fun
            </Typography>
          </Grid>

          <style jsx>{``}</style>
        </Grid>
      </div>
    );
  }
}

export default Section2;
