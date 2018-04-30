import React, { Component } from 'react';
import { injectIntl, defineMessages, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import _ from 'lodash';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { CircularProgress } from 'material-ui/Progress';
import MatchCard from './MatchCard';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    headingPrimary: {
        fontWeight: 'bold',
        marginTop: theme.spacing.unit * 3,
    },
    headingSecondary: {
        fontWeight: 'bold',
        width: '60%',
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
    },
    form: {
        width: '80%',
        paddingTop: theme.spacing.unit * 2,
    },
    tabs: {

    },
    matches: {
        padding: theme.spacing.unit * 2,
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
});

const messages = defineMessages({
    headingPrimary: {
        id: 'PredictionForm.headingPrimary',
        defaultMessage: '[MY] Predictions',
        description: '',
    },
    headingSecondary: {
        id: 'PredictionForm.headingSecondary',
        defaultMessage: '[NAME] Crypto Pool',
        description: '',
    },
    group: {
        id: 'PredictionForm.group',
        defaultMessage: 'Group',
        description: '',
    },
    backButton: {
        id: 'PredictionForm.backButton',
        defaultMessage: 'Back to Pool Dashboard',
        description: '',
    },
    finishButton: {
        id: 'PredictionForm.finishButton',
        defaultMessage: 'Save',
        description: '',
    },
});

class PredictionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
        };
    }

    handleTabChange = (event, value) => {
        this.setState({ activeTab: value });
    };

    renderTabForm() {
        const { classes, intl, groups } = this.props;
        return (
            <Paper className={classes.form}>
                <Tabs
                    className={classes.tabs}
                    value={this.state.activeTab}
                    onChange={this.handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    {groups.map(group => <Tab key={group} label={group} />)}
                </Tabs>
                {this.renderTabContent()}
            </Paper>
        );
    }

    renderTabContent() {
        const { activeTab } = this.state;
        const { classes, intl, matches, groups } = this.props;

        return (
            <Grid container className={classes.matches} spacing={16}>
                {_.filter(matches, match => match.data.group === groups[activeTab])
                  .map(match => 
                    <Grid item xs={6} key={match.index}>
                        <MatchCard match={match} />
                    </Grid>
                )}
            </Grid>
        );
    }

    render() {
        const { classes, intl } = this.props;
        const { activeStep } = this.state;

        return (
            <div className={classes.root}>
                <Typography className={classes.headingPrimary} variant="headline" align="center" gutterBottom>
                    {intl.formatMessage(messages.headingPrimary)}
                </Typography>
                <Typography className={classes.headingSecondary} variant="headline" align="center" gutterBottom>
                    {intl.formatMessage(messages.headingSecondary)}
                </Typography>
                {this.renderTabForm()}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        form: state.forms.joinPool,
    };
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps)(PredictionForm)));