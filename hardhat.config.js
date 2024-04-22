require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

task("accounts","Prints the list of the accounts",async (taskArgs,hre)=> {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts){
    console.log(account.address);
  }
});

const SEPOLIA_RPC = process.env.SEPOLIA_RPC
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  etherscan: {
    apiKey:{
      sepolia:ETHERSCAN_API_KEY
    }
  },
  
  networks:{
    sepolia:{
      url:SEPOLIA_RPC || "",
      accounts:PRIVATE_KEY !== undefined ? [PRIVATE_KEY]:[]
    }
  },

};
