import qa from './qa';
import dev from './dev';
import prod from './prod';

const environmentsConf = new Map();
environmentsConf.set('development', dev);
environmentsConf.set('test', dev);
environmentsConf.set('qa', qa);
environmentsConf.set('production', prod);

/*const environment = process.env.NODE_ENV;


const currentConf = environmentsConf.get(environment);

if (typeof currentConf === 'undefined') {
  throw new Error(`Configuration for environment NODE_ENV = ${environment} not found.`);
}

console.log(`Web app is using the ${currentConf.name} configuration.`);
console.log('Web app is using configuration.', currentConf);
*/
const currentConf = {};

export default currentConf;
