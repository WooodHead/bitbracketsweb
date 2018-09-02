/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';

import FirstNavbar from './FirstNavbar';

function Navigation(props) {
  const { languageSelect } = props;
  return (
    <div>
      <FirstNavbar languageSelect={languageSelect} />

      <style jsx>
        {`
          @media (max-width: 425px) {
            .navbar {
              visibility: hidden;
              display: none;
            }
          }
          @media (min-width: 426px) {
            .navbarResponsive {
              visibility: hidden;
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
}
Navigation.propTypes = {
  languageSelect: PropTypes.object.isRequired
};

export default Navigation;
