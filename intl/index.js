import _ from 'lodash';
import navigation from './navigation';
import home from './home';
import createPool from './pages/create-pool';
import roadmap from './roadmap';
import metamask from './metamask';
import dashboard from './dashboard/dashboard';
import dashboardlist from './dashboard/dashboardlist';
import metamasklocked from './metamasklocked';
import header from './header';
import matches from './matches';

import joinpool from './joinpool';
import myPool from './myPool';

// agregar las traducciones de los componentes a este arreglo
const componentMsg = [
  myPool,
  navigation,
  home,
  createPool,
  roadmap,
  metamask,
  dashboard,
  dashboardlist,
  metamasklocked,
  header,
  matches,
  joinpool
];

export default () => {
  const messages = _.reduce(
    componentMsg,
    (msg1, msg2) => {
      return _.merge(msg1, msg2);
    },
    {}
  );
  return messages;
};
