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
npx hardhat run scripts/deploy.js --network localhost
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
