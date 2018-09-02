import web3 from './web3';
import ContestPoolFactory from './contracts/abi/ContestPoolFactory.json';

const instance = new web3.eth.Contract(
  ContestPoolFactory.abi,
  process.env.WEB3_FACTORY_ADDRESS
);

export default instance;
