/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { injectIntl, defineMessages } from 'react-intl';
import ViewPredictionsLink from './ViewPredictionsLink';


import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

const messages = defineMessages({
  PlayersAddress: {
    id: 'PlayersAddress',
    defaultMessage: 'Players Address',
    description: 'Players Address',
  },
  lonelyhere: {
    id: 'lonelyhere',
    defaultMessage: 'It’s a little bit lonely here... Invite some friends',
    description: 'lonely here',
  },
  Predictions: {
    id: 'Predictions',
    defaultMessage: 'Predictions',
    description: 'Predictions',
  },
  Score: {
    id: 'Score',
    defaultMessage: 'Score',
    description: 'Score',
  },
  viewpredictions: {
    id: 'viewpredictions',
    defaultMessage: 'view predictions',
    description: 'viewpredictions',
  },
});

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 2,
    overflowX: 'auto',
  },
  table: {
    // minWidth: 200
  },
});

function ListTableParticipant(props) {
  const {
    players, classes, intl, poolAddress,
  } = props;
  if (players.length === 0) {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={4}>
          <Typography style={{ fontWeight: '500', color: 'grey' }} variant="headline" gutterBottom>
            {intl.formatMessage(messages.lonelyhere)}

          </Typography>
        </Grid>
      </Grid>);
  }

  return (
    <div className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>
              {' '}
              <Typography style={{ color: '#616161' }} variant="subheading" gutterBottom>
                {intl.formatMessage(messages.PlayersAddress)}
              </Typography>
            </TableCell>
            <TableCell>
              {' '}
              <Typography style={{ color: '#616161' }} variant="subheading" gutterBottom>
                {intl.formatMessage(messages.Predictions)}
              </Typography>
            </TableCell>
            <TableCell>
              {' '}
              <Typography style={{ color: '#616161' }} variant="subheading" gutterBottom>
                {intl.formatMessage(messages.Score)}
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map(n => (
            <TableRow key={Math.random()}>
              <TableCell>
                {' '}
                <Typography style={{ fontWeight: '500' }} variant="subheading" gutterBottom>
                  {n.address}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography style={{ fontWeight: '500' }} variant="subheading" gutterBottom>
                  <ViewPredictionsLink
                    text={intl.formatMessage(messages.viewpredictions)}
                    status={n.status}
                    playerAddress={n.address}
                    poolAddress={poolAddress}
                  />
                  {/* {intl.formatMessage(messages.viewpredictions)} */}
                </Typography>
              </TableCell>
              <TableCell>
                {' '}
                <Typography style={{ fontWeight: '500' }} variant="subheading" gutterBottom>
                  {n.score}
                  {/* {n.makePick} */}
                </Typography>
              </TableCell>
            </TableRow>
              ))}
        </TableBody>
      </Table>

    </div>
  );
}

ListTableParticipant.defaultProps = {
  players: [],
};

ListTableParticipant.propTypes = {
  poolAddress: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  players: PropTypes.array,
  intl: PropTypes.object.isRequired,
};

export default injectIntl(withStyles(styles)(ListTableParticipant));
