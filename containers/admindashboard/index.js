import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import createHistory from 'history/createMemoryHistory';
import ContestList from './contestList';

const dataProvider = jsonServerProvider(process.env.ENDPOINT_URL);

const history = createHistory();

const AdminDashboard = () => (
    <Admin history={history} dataProvider={dataProvider} >
        <Resource name="contests" list={ContestList} />
    </Admin>
);

export default AdminDashboard;
