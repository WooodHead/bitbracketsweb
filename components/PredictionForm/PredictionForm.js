/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, defineMessages } from 'react-intl';
import _ from 'lodash';
import Typography from 'material-ui/Typography';


import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import MatchCard from './MatchCard';

const styles = theme => ({
  form: {
    width: '80%',
    paddingTop: theme.spacing.unit * 2,
  },
  tabs: {

  },
  matches: {
    padding: theme.spacing.unit * 2,
  },
  tabName: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: '#E91E63',
    fontSize: '24px',
  },
});

const messages = defineMessages({
  group: {
    id: 'group',
    defaultMessage: 'Group',
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

    renderTabContent() {
      const { activeTab } = this.state;
      const {
        classes, matches, groups, predictions, update, read,
      } = this.props;

      return (
        <Grid container className={classes.matches} spacing={16}>
          {_.filter(matches, match => match.data.group === groups[activeTab])
                    .map(match =>
                    
                      (
                        
                        <Grid item xs={12} sm={6} key={match.index}>
                          <MatchCard

                            match={match}
                            prediction={predictions[match.index] ? predictions[match.index].prediction : null}
                            update={update}
                            read={read}
                          />
                        </Grid>
                    ))}
        </Grid>
      );
    }

    render() {
      const {
        classes, groups, intl,
      } = this.props;
      const { activeTab } = this.state;
      // console.info('predictionForm predictions', predictions);
      const renderTabsName = (
        <div>

          {activeTab === 0 && <div>{intl.formatMessage(messages.group)} A</div>}
          {activeTab === 1 && <div>{intl.formatMessage(messages.group)} B</div>}
          {activeTab === 2 && <div>{intl.formatMessage(messages.group)} C</div>}
          {activeTab === 3 && <div>{intl.formatMessage(messages.group)} D</div>}
          {activeTab === 4 && <div>{intl.formatMessage(messages.group)} E</div>}
          {activeTab === 5 && <div>{intl.formatMessage(messages.group)} F</div>}
          {activeTab === 6 && <div>{intl.formatMessage(messages.group)} G</div>}
          {activeTab === 7 && <div>{intl.formatMessage(messages.group)} H</div>}
        </div>);

      return (
        <Paper className={classes.form}>
          <Typography variant="title" gutterBottom className={classes.tabName}>
            {renderTabsName}

          </Typography>

          {this.renderTabContent()}
          <Tabs
            className={classes.tabs}
            value={this.state.activeTab}
            onChange={this.handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
            {groups.map(group => <Tab key={group} label={`${intl.formatMessage(messages.group)}- ${group}`} />)}
          </Tabs>
        </Paper>
      );
    }
}

PredictionForm.defaultProps = {
  predictions: {},
  update: PropTypes.func,
  read: PropTypes.bool,
};

PredictionForm.propTypes = {
  classes: PropTypes.object.isRequired,
  matches: PropTypes.object.isRequired,
  predictions: PropTypes.object,
  update: PropTypes.func,
  read: PropTypes.bool,
  groups: PropTypes.array.isRequired,
  intl: PropTypes.object.isRequired,
};
export default withStyles(styles)(injectIntl(PredictionForm));
