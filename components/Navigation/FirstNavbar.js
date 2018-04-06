import React, { Component } from "react";

import Navbar from "../common/Navbar";
import Button from "../common/Button";

/**
 *
 */
class FirstNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar
          style={{
            margin: 0,
            background: "#fff",
            border: "transparent",

            borderRadius: 0
          }}
          styleNav={{ float: "right" }}
          linkBrand="/"
          classNameImage="image"
          images="../../static/logo.png"
          brandname="BitBrackets"
          classNameBrandName="brandName"
          linkName1="How does it work?"
          link1="/howDoesItWork"
          linkName2="Rules "
          link2="/rules"
          linkName3="FAQ"
          link3="faq"
          linkName4="My Pools"
          link4="myPools"
          linkName5={
            <Button
              name="Start Pool"
              backgroundColor="#E72459"
              colorText="#fff"
            />
          }
          className="description"
          title="Language"
        />

        <style jsx>{``}</style>
      </div>
    );
  }
}

export default FirstNavbar;
