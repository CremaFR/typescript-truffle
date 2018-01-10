## Readme



## Installation

Clone the projet then

`npm install`


## Geth

We are using Geth instead of Testrpc for our developpment because new web3.js doesn't support http connection. So we're using geth websockets

install geth on MacOS

`brew tap ethereum/ethereum
 brew install ethereum`

### Installation

TODO see geth

### Set up environment

First create our blockchain using Geth

Make sure to init some ether in the genesis.json for your adresses !

`geth --datadir pnet init genesis.json`

`--datadir folderName` is to store your blockchain state so you don't have to republish your contracts each time you reboot geth

Now simply launch your blockchain with

`geth --rpc --rpccorsdomain "*" --ws  --wsorigins "*"  --networkid 16 --datadir pnet/ --port "30303" --nodiscover console`

And inside Geth console unlock your account to be allowed to deploy your contract with truffle with

`personal.unlockAccount('0xMyAddr', 'password')`

Now you can start mining to validate your transaction with

`miner.start()` and stop mining with `miner.stop()`

## Truffle

Make sure you're following truffle standard packaging (/contracts and /migrations) before running the following command

`truffle compile`

`truffle migrate`

Do not forget to replace the `from` field with your address inside `truffle.js`

## Run

`npm start` and it should work ! you'll be able to interact with my VoteContract using your web application :)