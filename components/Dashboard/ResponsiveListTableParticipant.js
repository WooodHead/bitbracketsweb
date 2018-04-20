import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";

import Grid from "material-ui/Grid";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 2,
    overflowX: "auto"
  },
  table: {}
});

let id = 0;
function createData(name, pickstatus, makepick) {
  id += 1;
  return { id, name, pickstatus, makepick };
}

const data = [
  createData("Pamela Lizzeth Rivera Laitano", "no picks", "Makes picks"),
  createData("Douglas Edgardo Molina Rivera", "no picks", "Makes picks")
];

function ResponsiveListTableParticipant(props) {
  const { classes } = props;

  return (
    <div>
      <div>
        {data.map(n => {
          return (
            <div key={n.id}>
              <Grid container spacing={24}>
                <Grid item xs={6}>
                  <Typography
                    style={{ fontWeight: "400" }}
                    variant="headline"
                    gutterBottom
                  >
                    Name:
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    display="flex"
                    justify-content="flex-end"
                    style={{ fontWeight: "500" }}
                    variant="headline"
                    gutterBottom
                  >
                    {n.name}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={24}>
                <Grid item xs={6}>
                  <Typography
                    style={{ fontWeight: "400" }}
                    variant="headline"
                    gutterBottom
                  >
                    Pick Status:
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    display="flex"
                    justify-content="flex-end"
                    style={{ fontWeight: "500" }}
                    variant="headline"
                    gutterBottom
                  >
                    {n.pickstatus}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={24}>
                <Grid item xs={12} align="center">
                  <Typography
                    style={{ fontWeight: "600" }}
                    variant="headline"
                    gutterBottom
                  >
                    {n.makepick}
                  </Typography>
                </Grid>
              </Grid>
              <Divider />
            </div>
          );
        })}
      </div>
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

ResponsiveListTableParticipant.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ResponsiveListTableParticipant);
