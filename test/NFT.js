const { expect } = require("chai");

describe("NFT", function () {

	it("Should return the right name and symbol", async function () {

		const nft = await hre.ethers.getContractFactory("NFT");
		const NFT = await nft.deploy("NFT", "MCN");
		await NFT.deployed();
		expect(await NFT.name()).to.equal("NFT");
		expect(await NFT.symbol()).to.equal("MCN");

	});

});