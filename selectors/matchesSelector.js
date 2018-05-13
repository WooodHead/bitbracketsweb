import _ from 'lodash';
import { createSelector } from 'reselect';

const matchesSelector = state => state.contest.matches;
const teamsSelector = state => state.contest.teams;

const getGroups = (matches, teams) => {
    const result = _.map(matches, (match => {
        return {
            ...match,
            homeName: teams[match.home].name,
            homeAbbr: teams[match.home].team,
            awayName: teams[match.away].name,
            awayAbbr: teams[match.away].team,
        } 
    }));

    return _.mapKeys(result, 'index');
};

export default createSelector(
    matchesSelector,
    teamsSelector,
    getGroups,
);