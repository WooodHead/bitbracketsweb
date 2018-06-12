// Configutation for Web3 in "template" environment.
const WEB3 = {
  networks: ['main', 'ropsten', 'kovan', 'rinkeby'],
  interval: 1000,
  factoryAddress: '0x2230747607ae54002a0a33da54511d54014c317e' || process.env.FACTORY_ADDR,
  infuraUrl: 'https://rinkeby.infura.io/x8dGVFhCSTJoQ7WJ4OIP' || process.env.INFURA_KEY,
  contestName: 'Russia2018Test' || process.env.CONTEST_NAME,
};

module.exports = WEB3;
