import React, { Component } from "react";

import Navbar from "../common/Navbar";

class FirstNavbar extends Component {
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
          styleNav={{ float: "right" }}
          linkBrand="/"
          brandname="BitBrackets"
          styleBrandName={{ color: "#3ffeca" }}
          linkName1="Sign Up"
          link1="/signup"
          linkName2="Log In "
          link2="/login"
          className="description"
          title="Language"
        />

        <style jsx>{``}</style>
      </div>
    );
  }
}

export default FirstNavbar;
