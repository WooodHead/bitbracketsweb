import web3 from './web3';
import ContestPool from './contracts/abi/ContestPool.json';
// import KEYS from '../conf/keys';

const instance = new web3.eth.Contract(ContestPool.abi);

export default instance;
