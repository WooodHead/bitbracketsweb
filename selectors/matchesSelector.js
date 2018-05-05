import _ from 'lodash';
import { createSelector } from 'reselect';

const matchesSelector = state => state.contest.matches;
const teamsSelector = state => state.contest.teams;

const getGroups = (matches, teams) => {
    const result = _.map(matches, (match => {
        return {...match, home: teams[match.home].name, away: teams[match.away].name} 
    }));

    return _.mapKeys(result, 'index');
};

export default createSelector(
    matchesSelector,
    teamsSelector,
    getGroups,
);