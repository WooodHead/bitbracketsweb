/* eslint-disable react/forbid-prop-types */
import React from 'react';

const Status = () => {
  return (
    <div styles={{ flex: 1, 'justify-content': 'space-around' }}>
      <li>NODE_ENV</li> {process.env.NODE_ENV}
      <li>ENDPOINT_URL</li> {process.env.ENDPOINT_URL}
      <li>WEB3_CONTEST_NAME</li> {process.env.WEB3_CONTEST_NAME}
      <li>WEB3_FACTORY_ADDRESS</li>
      {process.env.WEB3_FACTORY_ADDRESS}
      <li>WEB3_INFURA_URL</li> {process.env.WEB3_INFURA_URL}
    </div>
  );
};

export default Status;
