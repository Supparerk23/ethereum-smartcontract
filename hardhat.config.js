require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task("deploy", "Deploy the smart contracts", async(taskArgs, hre) => {

  const nft = await hre.ethers.getContractFactory("NFT");
  const NFT = await nft.deploy(process.env.NAME_ASSET, process.env.SYMBOL);

  await NFT.deployed();

  // await hre.run("verify:verify", {
  //   address: NFT.address,
  //   constructorArguments: [
  //     process.env.NAME_ASSET,
  //     process.env.SYMBOL
  //   ]
  // })

})

module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: "https://matic-testnet-archive-rpc.bwarelabs.com",
      accounts: [
        process.env.PRIVATE_KEY,
      ]
    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_KEY,
  }
};
