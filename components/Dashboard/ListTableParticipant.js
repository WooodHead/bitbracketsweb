/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

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
  const { players, classes } = props;
  if (players.length === 0) {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={4}>
          <Typography style={{ fontWeight: '500', color: 'grey' }} variant="headline" gutterBottom>
      It’s a little bit lonely here... Invite some friends
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
                   Players Address
              </Typography>
            </TableCell>
            <TableCell>
              {' '}
              <Typography style={{ color: '#616161' }} variant="subheading" gutterBottom>
                    Predictions
              </Typography>
            </TableCell>
            <TableCell>
              {' '}
              <Typography style={{ color: '#616161' }} variant="subheading" gutterBottom>
                    Score
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
                      view predictions {n.status}
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
  classes: PropTypes.object.isRequired,
  players: PropTypes.array,
};

export default withStyles(styles)(ListTableParticipant);
