import React from "react";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";

import Layout from "../components/Layout";
import App from "../components/App";
import messages from "../intl/messages";
import IntlExample from "../components/examples/IntlExample";

addLocaleData(en);
addLocaleData(es);

const language = "en"; //TODO: Create a redux state for managing language

export default () => (
  <IntlProvider locale={language} messages={messages[language]}>
    <Layout>
      <App />
      <IntlExample />
    </Layout>
  </IntlProvider>
);
