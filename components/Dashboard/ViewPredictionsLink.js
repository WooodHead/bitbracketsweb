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
      <Link prefetch href={linkUrl} route={linkUrl}>
        <a>{text}</a>
      </Link>
      {status}
    </div>
  );
};

ViewPredictionsLink.defaultProps = {
  status: undefined,

};
ViewPredictionsLink.propTypes = {
  text: PropTypes.string.isRequired,
  status: PropTypes.string,
  poolAddress: PropTypes.string.isRequired,
  playerAddress: PropTypes.string.isRequired,
};

export default ViewPredictionsLink;
