import web3 from './web3';
import ContestPoolFactory from './contracts/abi/ContestPoolFactory.json';
import KEYS from '../conf/keys';

const instance = new web3.eth.Contract(
  JSON.parse(ContestPoolFactory),
  KEYS.address,
);

export default instance;
