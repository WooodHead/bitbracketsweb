import _ from "lodash";
import navigation from "./navigation";
import home from "./home";
import createPool from "./pages/create-pool";
import roadmap from "./roadmap";
import metamask from "./metamask";
import dashboard from "./dashboard/dashboard";
import dashboardlist from "./dashboard/dashboardlist";

// agregar las traducciones de los componentes a este arreglo
const componentMsg = [navigation, home, createPool, roadmap, metamask, dashboard, dashboardlist];

export default () => {
  const messages = _.reduce(
    componentMsg,
    function(msg1, msg2) {
      return _.merge(msg1, msg2);
    },
    {}
  );
  return messages;
};
