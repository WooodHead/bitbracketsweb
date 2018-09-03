import React from 'react';
import { Admin, Resource } from 'react-admin';
// import jsonServerProvider from 'ra-data-json-server';
import createHistory from 'history/createMemoryHistory';
import dataProvider from './dataProvider/';
import ContestList from './contestsResources/contestList';
import ContestCreate from './contestsResources/contestCreate';

// const dataProvider = jsonServerProvider(process.env.ENDPOINT_URL);

const history = createHistory();

const AdminDashboard = () => (
  <Admin
    title="BitBrackets Admin Panel"
    history={history}
    dataProvider={dataProvider}
  >
    <Resource name="contests" list={ContestList} create={ContestCreate} />
  </Admin>
);

export default AdminDashboard;
