import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";
require('dotenv').config();

const key = process.env.ALCHEMY_URL;
const priv = process.env.PRIVATE_KEY

module.exports = {
zksolc: { 
  version: "1.3.8", 
  compilerSource: "binary", 
  settings: { 
    optimizer: { 
      enabled: true, 
      mode: "z", 
    }, 
  }, 
}, 
  defaultNetwork: "zkSyncTestnet",

  networks: {
    goerli:{
      url: `${key}`,
      accounts: [`${priv}`],
    },
    zkSyncTestnet: {
      url: "https://testnet.era.zksync.dev",
      ethNetwork: "goerli", // RPC URL of the network (e.g. `https://goerli.infura.io/v3/<API_KEY>`)
      zksync: true,
    },
  },
  solidity: {
    version: "0.8.8",
  },
};
