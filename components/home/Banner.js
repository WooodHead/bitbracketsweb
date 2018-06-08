import React, { Component } from "react";
import Typography from "material-ui/Typography";

class Banner extends Component {
  render() {
    return (
      <div className="root">
        <Typography
          align="center"
          variant="display4"
          gutterBottom
          style={{ color: "#fff", paddingTop: "1em", fontWeight: "500" }}
        >
          BitBrackets
        </Typography>
        <Typography
          align="center"
          variant="display2"
          gutterBottom
          style={{ color: "#fff", fontWeight: "400" }}
        >
          Russia 2018
        </Typography>

        <style jsx>{`
          .root {
            background: url(static/background1.svg);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 80% 80%;
            padding-bottom: 350px;
            text-align: center;
            background-attachment:fixed;
          }
        `}</style>
      </div>
    );
  }
}

export default Banner;
