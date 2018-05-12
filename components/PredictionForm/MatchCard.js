import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';


const styles = theme => ({
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    container: {
        // width: '90%',
        margin: theme.spacing.unit,
    },
    controls: {
        display: 'flex',
        flexDirection: 'column',        
        justifyContent: 'center',
        alignItems: 'center',
    },
    disabled: {
        background: 'linear-gradient(45deg, #e72564, #e72564)',
        color: 'white',
    }
});

const MatchCard = ({ classes, match, prediction, update, read }) => {

    return (
        <Card className={classes.card}>
            <Grid container className={classes.container} spacing={16}>
                <Grid item className={classes.controls} xs={4}>
                    <Button
                        variant="fab"
                        color={prediction === match.home ? "primary" : "default" }
                        onClick={() => update(match.index, match.home)}
                        classes={{
                            disabled: prediction === match.home ? classes.disabled : "",
                        }}
                        disabled={read}
                    >
                        {match.homeAbbr}
                    </Button>
                </Grid>
                <Grid item className={classes.controls} xs={4}>
                    <Button
                        variant="fab"
                        color={prediction === "" ? "primary" : "default" }
                        onClick={() => update(match.index, "")}
                        classes={{
                            disabled: prediction === "" ? classes.disabled : "",
                        }}
                        disabled={read}
                    >
                        TIE
                    </Button>
                </Grid>
                <Grid item className={classes.controls} xs={4}>
                    <Button
                        variant="fab"
                        color={prediction === match.away ? "primary" : "default" }
                        onClick={() => update(match.index, match.away)}
                        classes={{
                            disabled: prediction === match.away ? classes.disabled : "",
                        }}
                        disabled={read}
                    >
                        {match.awayAbbr}
                    </Button>
                </Grid>
            </Grid>
            <Grid container className={classes.container} spacing={16}>
                <Grid item className={classes.controls} xs={4}>
                    <Typography>{match.homeName}</Typography>
                </Grid>
                <Grid item className={classes.controls} xs={4}>
                    <Typography>-</Typography>
                </Grid>
                <Grid item className={classes.controls} xs={4}>
                    <Typography>{match.awayName}</Typography>
                </Grid>
            </Grid>
        </Card>
    );
};

export default withStyles(styles)(MatchCard);