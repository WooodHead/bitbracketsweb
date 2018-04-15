import React from "react";
import { IntlProvider, addLocaleData } from "react-intl";
import withRoot from "../md/withRoot";
import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";

import Layout from "../components/Layout";
import IndexDashboard from "../components/Dashboard/IndexDashboard";

const poolDashboard = () => (
  <Layout>
    <IndexDashboard />
  </Layout>
);
export default withRoot(poolDashboard);
