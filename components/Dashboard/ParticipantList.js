/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';

import * as actions from '../../actions';
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

class ParticipantList extends React.Component {
  componentWillMount() {
    const { pool } = this.props;
    this.props.loadPoolParticipants(pool.address);
  }

  render() {
    const { classes, players } = this.props;
    return (
      <div className={classes.box}>
        <HeaderParticipantList players={players} />

        <Grid className={classes.list}>
          {' '}
          <ListTableParticipant players={players} />
        </Grid>

        <div className={classes.listResponsive}>
          <ResponsiveListTableParticipant players={players} />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ pool }) {
  return {
    players: pool.players,
  };
}

ParticipantList.defaultProps = {
  players: [],
};

ParticipantList.propTypes = {
  classes: PropTypes.object.isRequired,
<<<<<<< HEAD
  pool: PropTypes.object.isRequired,
  loadPoolParticipants: PropTypes.func.isRequired,
  players: PropTypes.array,
=======
  players: PropTypes.array.isRequired,
>>>>>>> 374d4497a2ea36e1050b31445e09632f0c99298e
};

export default connect(mapStateToProps, actions)(withStyles(styles)(ParticipantList));
