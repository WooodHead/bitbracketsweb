import React from "react";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";
import Banner from "../components/common/Banner";

import Layout from "../components/Layout";

export default () => (
  <Layout>
    <Banner header="LogIn" subheader="BitBrackets" />
    <h1> Este es el Layout LOGIN</h1>
  </Layout>
);
