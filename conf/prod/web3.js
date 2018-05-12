// Configutation for Web3 in "template" environment.
const WEB3 = {
  networks: ['main', 'ropsten', 'kovan', 'rinkeby'],
  interval: 1000,
  factoryAddress: '0x5a8e3d814f77b68d1283b29899df4f6b0a7e4564',
  infuraUrl: process.env.INFURA_KEY,
};

module.exports = WEB3;
