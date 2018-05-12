import web3 from './web3';
import ContestPool from './contracts/abi/ContestPool.json';
// import KEYS from '../conf/keys';

const getContestPoolInstance = async (address) => {
  console.info('loading contract address: ', address);
  return new web3.eth.Contract(ContestPool.abi, address);
};


export default getContestPoolInstance;
