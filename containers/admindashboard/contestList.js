import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

const ContestList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" />
            <TextField source="startTime" />
            <TextField source="endTime" />
        </Datagrid>
    </List>
);

export default ContestList;
