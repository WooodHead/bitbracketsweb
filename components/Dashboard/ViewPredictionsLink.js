/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../../routes';

const ViewPredictionsLink = ({
  text, status, poolAddress, playerAddress,
}) => {
  const linkUrl = `/pools/${poolAddress}/prediction/${playerAddress}`;
  return (
    <div>
      <Link route={linkUrl}>{text}</Link>
      {status}
    </div>
  );
};

ViewPredictionsLink.propTypes = {
  text: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  poolAddress: PropTypes.string.isRequired,
  playerAddress: PropTypes.string.isRequired,
};

export default ViewPredictionsLink;
