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
    buttonSelected: {
        backgroundColor: 'green',
        '&:hover': {
            backgroundColor: 'green',
        },
    },
});

const MatchCard = ({ classes, match, prediction, update }) => {
    return (
        <Card className={classes.card}>
            <Grid container className={classes.container} spacing={16}>
                <Grid item className={classes.controls} xs={4}>
                    <Button
                        variant="fab"
                        color={prediction === "H" ? "primary" : "" }
                        onClick={() => update(match.index, "H")}
                    >
                        H
                    </Button>
                </Grid>
                <Grid item className={classes.controls} xs={4}>
                    <Button
                        variant="fab"
                        color={prediction === "T" ? "primary" : "" }
                        onClick={() => update(match.index, "T")}                        
                    >
                        T
                    </Button>
                </Grid>
                <Grid item className={classes.controls} xs={4}>
                    <Button
                        variant="fab"
                        color={prediction === "A" ? "primary" : "" }
                        onClick={() => update(match.index, "A")}                        
                    >
                        A
                    </Button>
                </Grid>
            </Grid>
            <Grid container className={classes.container} spacing={16}>
                <Grid item className={classes.controls} xs={4}>
                    <Typography>{match.home}</Typography>
                </Grid>
                <Grid item className={classes.controls} xs={4}>
                    <Typography>-</Typography>
                </Grid>
                <Grid item className={classes.controls} xs={4}>
                    <Typography>{match.away}</Typography>
                </Grid>
            </Grid>
        </Card>
    );
};

export default withStyles(styles)(MatchCard);