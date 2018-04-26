import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';

const styles = theme => ({
    card: {

    },
    textField: {
        backgroundColor: 'lightgray',
        textAlign: 'center',
    },
});

const MatchCard = ({ classes }) => {
    return (
        <Card className={classes.card}>
            <CardContent>
                <TextField
                    className={classes.textField}
                    type="number"
                    // value={0}
                    // onChange={this.handleChange('age')}
                    inputProps={{
                        className: classes.textField,
                    }}
                />
            </CardContent>
        </Card>
    );
};

export default withStyles(styles)(MatchCard);