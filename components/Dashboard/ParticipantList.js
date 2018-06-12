/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { CircularProgress } from 'material-ui/Progress';
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
    [theme.breakpoints.down('sm')]: {
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

  renderParticipantList = () => {
    const {
      classes,
      players,
      loadingPlayers,
      error,
      pool,
    } = this.props;

    if (loadingPlayers) {
      return <CircularProgress />;
    }

    if (error) {
      return (
        <div className={classes.box}>
          An error ocurred while loading players list. Please try refreshing your browser
        </div>
      );
    }

    return (
      <div>
        <Grid className={classes.list}>
          {' '}
          <ListTableParticipant players={players} poolAddress={pool.address} />
        </Grid>

        <div className={classes.listResponsive}>
          <ResponsiveListTableParticipant players={players} poolAddress={pool.address} />
        </div>
      </div>
    );
  };

  render() {
    const {
      classes,
      players,
      pool,
    } = this.props;

    return (
      <div className={classes.box}>
        <HeaderParticipantList pool={pool} players={players} />
        {this.renderParticipantList()}
      </div>
    );
  }
}

function mapStateToProps({ pool }) {
  return {
    players: pool.info.players,
    loadingPlayers: pool.loadingPlayers,
    error: pool.error,
  };
}

ParticipantList.defaultProps = {
  players: [],
  loadingPlayers: true,
  error: undefined,
};

ParticipantList.propTypes = {
  classes: PropTypes.object.isRequired,
  pool: PropTypes.object.isRequired,
  loadPoolParticipants: PropTypes.func.isRequired,
  players: PropTypes.array,
  loadingPlayers: PropTypes.bool,
  error: PropTypes.object,
};

export default connect(mapStateToProps, actions)(withStyles(styles)(ParticipantList));
