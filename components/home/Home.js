/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Banner from './Banner';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import BannerResponsivo from './BannerResponsivo';


const styles = theme => ({
  rootWeb: {
    padding: theme.spacing.unit,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
   
  },
  rootResponsive: {
    padding: theme.spacing.unit,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
   
  },
});

function Home(props) {
  const { classes } = props;
  return (
    <div>
      <div className={classes.rootWeb}>
        <Banner />
      </div>
      <div className={classes.rootResponsive}>
        <BannerResponsivo />
      </div>

      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />

    </div>
  );
}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
