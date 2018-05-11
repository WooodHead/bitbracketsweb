import web3 from './web3';
import ContestPool from './contracts/abi/ContestPool.json';
// import KEYS from '../conf/keys';

const getContestPoolInstance = address => new web3.eth.Contract(ContestPool.abi, address);


export default getContestPoolInstance;
