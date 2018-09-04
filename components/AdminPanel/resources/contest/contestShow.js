import React from 'react';
import { Show, SimpleShowLayout, TextField, DateField } from 'react-admin';

const ContestShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="contestName" />
      {/* <DateField label="Start Time" source="startTime" />
      <DateField label="End Time" source="endTime" defaultValue={new Date()} />
      <TextField label="Grace Time in Hours" source="graceTime" />
      <TextField label="Max Balance in ETH" source="maxBalance" />
      <TextField label="Manager Fee %" source="managerFee" />
      <TextField label="Platform Fee %" source="platformFee" /> */}
    </SimpleShowLayout>
  </Show>
);

export default ContestShow;
