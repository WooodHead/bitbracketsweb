import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 2,
    overflowX: "auto"
  },
  table: {
    // minWidth: 200
  }
});

function ListTableParticipant(props) {
  const { classes, list } = props;

  return (
    <div className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>
              {" "}
              <Typography
                style={{ color: "grey", fontWeight: "500" }}
                variant="title"
                gutterBottom
              >
                Name
              </Typography>
            </TableCell>
            <TableCell>
              {" "}
              <Typography
                style={{ color: "grey", fontWeight: "500" }}
                variant="title"
                gutterBottom
              >
                Predictions
              </Typography>
            </TableCell>
            <TableCell>
              {" "}
              <Typography
                style={{ color: "grey", fontWeight: "500" }}
                variant="title"
                gutterBottom
              >
                Score
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.players.map(n => {
            return (
              <TableRow key={Math.random()}>
                <TableCell>
                  {" "}
                  <Typography
                    style={{ fontWeight: "500" }}
                    variant="headline"
                    gutterBottom
                  >
                    {n.playerName}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    style={{ fontWeight: "500" }}
                    variant="headline"
                    gutterBottom
                  >
                    view predictions {n.status}
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography
                    style={{ fontWeight: "500" }}
                    variant="headline"
                    gutterBottom
                  >
                    {n.score}
                    {/* {n.makePick} */}
                  </Typography>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Typography
        style={{ fontWeight: "500", color: "grey" }}
        variant="headline"
        gutterBottom
      >
        It’s a little bit lonely here... Invite some friends
      </Typography>
    </div>
  );
}

ListTableParticipant.propTypes = {
  classes: PropTypes.object.isRequired,
  list: PropTypes.object.isRequired
};

export default withStyles(styles)(ListTableParticipant);
