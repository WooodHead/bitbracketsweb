import web3 from './web3';
import ContestPoolFactory from './contracts/abi/ContestPoolFactory.json';
import CONF from '../conf/';

const instance = new web3.eth.Contract(
  ContestPoolFactory.abi,
  CONF.web3.factoryAddress,
);

export default instance;
