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
    buttonWin: {
        backgroundColor: 'green',
        '&:hover': {
            backgroundColor: 'green',
        },
    },
    buttonLose: {
        backgroundColor: 'red',
        '&:hover': {
            backgroundColor: 'red',
        },
    },
    buttonTie: {
        backgroundColor: 'orange',
        '&:hover': {
            backgroundColor: 'orange',
        },
    },
    buttonNeutral: {
        backgroundColor: 'gray',
        '&:hover': {
            backgroundColor: 'gray',
        },
    },
});

const MatchCard = ({ classes, match }) => {
    return (
        <Card className={classes.card}>
            <Grid container className={classes.container} spacing={16}>
                <Grid item className={classes.controls} xs={4}>
                    <Button
                        variant="fab"
                        className={classes.buttonSuccess}
                    >
                        
                    </Button>
                </Grid>
                <Grid item className={classes.controls} xs={4}>
                    <Button
                        variant="fab"
                        className={classes.buttonSuccess}
                    >
                        
                    </Button>
                </Grid>
                <Grid item className={classes.controls} xs={4}>
                    <Button
                        variant="fab"
                        className={classes.buttonSuccess}
                    >
                        
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