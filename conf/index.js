import testing from './testing';
import prod from './prod';

// keys.js - figure out what set of credentials to return.
let configTemp;

if (process.env.NODE_ENV === 'production') {
  // we are in production - return the prod set of keys.
  console.info('production');
  configTemp = prod;
} else {
  // we are in development - return the dev keys.
  console.info('dev');
  configTemp = testing;
}

const config = configTemp;

export default config;
