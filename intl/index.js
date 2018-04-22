import _ from "lodash";
import navigation from "./navigation";
import home from "./home";
import createPool from "./pages/create-pool";

// agregar las traducciones de los componentes a este arreglo
const componentMsg = [navigation, home, createPool];

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
