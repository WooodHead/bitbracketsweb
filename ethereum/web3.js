import Web3 from 'web3';
import conf from '../conf/';

let web3temp;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3temp = new Web3(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask
  // console.log('infura', conf.web3.infuraUrl);
  const provider = new Web3.providers.HttpProvider(conf.web3.infuraUrl);
  web3temp = new Web3(provider);
}

const web3 = web3temp;

export default web3;
