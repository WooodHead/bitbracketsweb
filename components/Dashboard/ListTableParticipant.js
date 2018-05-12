/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
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
    return (null

    );
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


ListTableParticipant.propTypes = {
  classes: PropTypes.object.isRequired,
  players: PropTypes.array.isRequired,
};

export default withStyles(styles)(ListTableParticipant);
