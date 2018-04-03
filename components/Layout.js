import React, { Component } from "react";
import Head from "./Header";
import Navigation from "./Navigation/Navigation";
import Footer from "../components/Footer/Footer";

class Layout extends Component {
  render() {
    return (
      <div>
        <Head title="BitBrackets" />
        <Navigation />

        {this.props.children}
        <div className="footer">
          <Footer />
        </div>

        <style jsx>{`
          .footer {
          }
        `}</style>
      </div>
    );
  }
}

export default Layout;
