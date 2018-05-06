/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Grid from 'material-ui/Grid';

import ListTableParticipant from './ListTableParticipant';
import ResponsiveListTableParticipant from './ResponsiveListTableParticipant';
import HeaderParticipantList from './HeaderParticipantList';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
  box: {
    // display: "flex",

    marginTop: '3em',
    padding: '2em',

    justifyContent: 'center',

    backgroundColor: 'white',
    border: '1px solid lightgray',
    borderRadius: '5px',
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
  listResponsive: {
    [theme.breakpoints.up('md')]: {
      visibility: 'hidden',
      display: 'none',
    },
  },

  list: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      visibility: 'hidden',
      display: 'none',
    },
  },
});

function ParticipantList(props) {
  const { classes, list } = props;
  return (
    <div className={classes.box}>
      <HeaderParticipantList list={list} />

      <Grid className={classes.list}>
        {' '}
        <ListTableParticipant list={list} />
      </Grid>

      <div className={classes.listResponsive}>
        <ResponsiveListTableParticipant list={list} />
      </div>
    </div>
  );
}

ParticipantList.propTypes = {
  classes: PropTypes.object.isRequired,
  list: PropTypes.object.isRequired,
};

export default withStyles(styles)(ParticipantList);
