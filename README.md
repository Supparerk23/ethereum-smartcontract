# ethereum-smartcontract
```shell
npx hardhat help
```
## Installation
```shell
npm install --save-dev hardhat
```

## Compiling your contracts

```shell
npx hardhat compile
```

To force a compilation you can use the `--force` argument, or run `npx hardhat clean` to clear the cache and delete the artifacts.

## Development

#### - Connecting a wallet or Dapp to Hardhat Network
```shell
npx hardhat node
npx hardhat run scripts/deploy.js --network {network name}
```

## Testing
```shell
npx hardhat test
REPORT_GAS=true npx hardhat test
```

## Deploying your contracts
```shell
npx hardhat compile
npx hardhat run scripts/deploy.js
```

## Teach & Tools

| Name | Note |
| ------ | ------ | 
| [Hardhat](https://hardhat.org/) ||
| [Ganache](https://trufflesuite.com/ganache/) ||
| [Openzeppelin](https://docs.openzeppelin.com/contracts/4.x/) | Contracts Library |
| [NFT on Hardhat Tutorials](https://learn.figment.io/tutorials/create-nft-smart-contract-with-hardhat) ||
| [Chainlink](https://chain.link/) | Oracle Network |
| [Polygon Scan](https://polygonscan.com/) ||
| [Polygon Faucet](https://faucet.polygon.technology/)| Get Test Tokens|
| [Polygon Mumbai](https://mumbai.polygonscan.com/)| Mumbai Network|
| [Open Sea Testnet](https://testnets.opensea.io/)||
