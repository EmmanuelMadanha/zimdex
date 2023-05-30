require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${process.env.J7_jGHvBIWilfT877LMf9KNC_i89nR4R}`,
      accounts: [`0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266${process.env.PRIVATE_KEY}`]
    }
  }
};
