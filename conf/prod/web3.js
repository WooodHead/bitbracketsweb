// Configutation for Web3 in "template" environment.
const WEB3 = {
  networks: ['main', 'ropsten', 'kovan', 'rinkeby'],
  interval: 1000,
  factoryAddress: process.env.FACTORY_ADDR,
  infuraUrl: process.env.INFURA_KEY,
  contestName: process.env.CONTEST_NAME
};

module.exports = WEB3;
