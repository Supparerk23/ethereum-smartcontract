// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract NFT is ERC721 {

	constructor(string memory name, string memory symbol) ERC721(name, symbol){

		console.log("name", name);

        console.log("symbol", symbol);

        console.log("msg.sender", msg.sender); //msg.sender is the address that initially deploys a contract

	}
}