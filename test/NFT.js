const { expect } = require("chai");
const { ethers } = require("hardhat");
require("dotenv").config();
describe("NFT Smart Contract Tests", function() {

	let NFT;

    this.beforeEach(async function() {
       	
       	const nft = await hre.ethers.getContractFactory("NFT");
		NFT = await nft.deploy(process.env.NAME_ASSET, process.env.SYMBOL);

		//await NFT.deployed();

    })

    it("Should return the right name and symbol", async function () {

    	expect(await NFT.name()).to.equal(process.env.NAME_ASSET);

		expect(await NFT.symbol()).to.equal(process.env.SYMBOL);

    });

    it("NFT is minted successfully", async function() {

    	[account1] = await ethers.getSigners();

	    expect(await NFT.balanceOf(account1.address)).to.equal(0);
	    
	    const tokenURI = "https://opensea-creatures-api.herokuapp.com/api/creature/1"
	    const tx = await NFT.connect(account1).mint(tokenURI);

	    expect(await NFT.balanceOf(account1.address)).to.equal(1);

    })

    it("tokenURI is set sucessfully", async function() {

    	[account1, account2] = await ethers.getSigners();

	    const tokenURI_1 = "https://opensea-creatures-api.herokuapp.com/api/creature/1"
	    const tokenURI_2 = "https://opensea-creatures-api.herokuapp.com/api/creature/2"

	    const tx1 = await NFT.connect(account1).mint(tokenURI_1);
	    const tx2 = await NFT.connect(account2).mint(tokenURI_2);

	    expect(await NFT.tokenURI(0)).to.equal(tokenURI_1);
	    expect(await NFT.tokenURI(1)).to.equal(tokenURI_2);

    })

});