import React from "react";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";
import Banner from "../components/common/Banner";

import Layout from "../components/Layout";

export default () => (
  <Layout>
    <Banner header="Results" subheader="BitBrackets" />
    <h1> Este es el Layout RESULTS</h1>
  </Layout>
);
