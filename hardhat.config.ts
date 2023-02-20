require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
require("@matterlabs/hardhat-zksync-deploy");
require("@matterlabs/hardhat-zksync-solc");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  zksolc: {
    version: "1.3.1",
    compilerSource: "binary",
    settings: {},
  },
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/pQ_i8o-4xJTQPfhVJH1AzIPB7mpIdbh7",
      chainId: 5,
      timeout: 100000,
      accounts: [process.env.PRIVATE_KEY]
    },
    zkTestnet: {
      url: "https://zksync2-testnet.zksync.dev",
      ethNetwork: "goerli",
      zksync: true,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_APIKEY
  }
};
