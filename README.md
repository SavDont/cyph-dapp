# cyph-dapp
An end to end encrypted password manager dApp implementation in React using [CosmJS](https://github.com/cosmos/cosmjs).
This dApp first attempts to connect to your local Keplr wallet to interact with the blockchain. Users are then asked to provide a master key. This master key is then used to encrypt/decrypt your passwords using [Crypto-JS](https://github.com/brix/crypto-js) AES functions. All updates to your passwords are first encrypted before sending to the blockchain for storage.

## Demo
This implementation queries and executes on a smart contract deployed to the Cosmos testnet sandynet. The smart contract code can be found [here](https://github.com/SavDont/cw-cyph).

[Link to demo](https://savdontamsetti.com/cyph-dapp)

## How to run locally

1. In `cyph-dapp` directory run:
  ```shell
  yarn install
  ```
2. Start a local page connected to sandynet:
   ```shell
   yarn start:sandynet
   ```
3. Visit `localhost:3000/cyph-dapp`

## Note
This code has not been audited or reviewed by a cryptographer. This app is purely meant to be a proof of concept. Please use at your own risk.