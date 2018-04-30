import _ from 'lodash';
import { createSelector } from 'reselect';

const matchesSelector = state => state.matches;

const getGroups = (matches) => {
    const groups = _.uniq(_.map(matches, (match => match.data.group)));

    return groups;
};

export default createSelector(
    matchesSelector,
    getGroups,
);