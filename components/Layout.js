import React, { Component } from "react";
import Head from "./Header";
import Navigation from "./Navigation";

class Layout extends Component {
  render() {
    return (
      <div>
        <Head title="BitBrackets" />
        <Navigation />

        {this.props.children}
        <style jsx>{``}</style>
      </div>
    );
  }
}

export default Layout;
