import React, { Component } from "react";
import { IntlProvider, addLocaleData } from "react-intl";
import { connect } from "react-redux";

import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";

import Head from "./Header";
import Navigation from "./Navigation/Navigation";

import initMessages from "../intl/";

import Footer from "../components/Footer/Footer";

const language = "es"; //TODO: Create a redux state for managing language
addLocaleData([...en, ...es]);
const messages = initMessages();

console.log("messages", messages);

class Layout extends Component {
  render() {
    console.log("esto son los mensajes", messages[language]);
    return (
      <IntlProvider locale={language} messages={messages[language]}>
        <div>
          <Head title="BitBrackets" />

          <Navigation />

          {this.props.children}
          <Footer />
        </div>
      </IntlProvider>
    );
  }
}

export default Layout;
