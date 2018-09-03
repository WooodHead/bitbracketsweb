import React from 'react';
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin';

const ContestCreate = props => (
  <Create title="Create Contest Definition" {...props}>
    <SimpleForm>
      <TextInput label="Contest Name" source="contestName" />
      {/* <TextInput label="Fee ??" source="fee" /> */}
      <DateInput
        label="Start Time"
        source="startTime"
        defaultValue={new Date()}
      />
      <DateInput label="End Time" source="endTime" defaultValue={new Date()} />
      <TextInput label="Grace Time in Hours" source="graceTime" />
      <TextInput label="Max Balance in ETH" source="maxBalance" />
      <TextInput label="Manager Fee %" source="managerFee" />
      <TextInput label="Platform Fee %" source="platformFee" />
    </SimpleForm>
  </Create>
);

export default ContestCreate;
