import React, { Component } from "react";

import Navbar from "../common/Navbar";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar
          style={{
            background: "#323150",
            margin: 0,
            borderColor: "#323150",
            borderRadius: 0
          }}
          styleNav={{ float: "left" }}
          linkName1="Home"
          link1="/"
          linkName2="Contest "
          link2="/contest"
          linkName3="FAQ"
          link3="/faq"
          linkName4="Rules"
          link4="/rules"
          className="description"
        />

        <style jsx>{``}</style>
      </div>
    );
  }
}

export default Navigation;
