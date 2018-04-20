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

let id = 0;
function createData(name, status, makePick) {
  id += 1;
  return { id, name, status, makePick };
}

const data = [
  createData("Chuck Norris", "No Picks Made", "makePick"),
  createData("Pamela Lizzeth Rivera Laitano", "updated picks", "makePick"),
  createData("Douglas", "No Picks Made", "makePick"),
  createData("Gabriel", "updated picks", "makePick")
];

function ListTableParticipant(props) {
  const { classes } = props;

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
                Picks Status
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell>
                  {" "}
                  <Typography
                    style={{ fontWeight: "500" }}
                    variant="headline"
                    gutterBottom
                  >
                    {n.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    style={{ fontWeight: "500" }}
                    variant="headline"
                    gutterBottom
                  >
                    {n.status}{" "}
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography
                    style={{ fontWeight: "600" }}
                    variant="headline"
                    gutterBottom
                  >
                    {n.makePick}{" "}
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
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListTableParticipant);
