import web3 from './web3';
import ContestPool from './contracts/abi/ContestPool.json';

const getContestPoolInstance = async address => {
  console.info('loading contract address: ', address);
  return new web3.eth.Contract(ContestPool.abi, address);
};

export default getContestPoolInstance;
