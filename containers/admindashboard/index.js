import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('process.env.ENDPOINT_URL');

const AdminDashboard = () => <Admin dataProvider={dataProvider} />;

export default AdminDashboard;
