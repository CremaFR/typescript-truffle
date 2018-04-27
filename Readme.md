## Readme



## Installation

Clone the projet then

`npm install`


## Geth

We are using Geth instead of Testrpc for our developpment because new web3.js doesn't support http connection. So we're using geth websockets

install geth on MacOS

`brew tap ethereum/ethereum`
`brew install ethereum`

### Installation

TODO see geth

## Ganache

[Ganache](https://github.com/trufflesuite/ganache) can be used instead of geth.

truffle.js is currently configured to use ganache so nothing to do right now

## Truffle

Make sure you're following truffle standard packaging (/contracts and /migrations) before running the following command

`truffle compile`

`truffle migrate`

Do not forget to replace the `from` field with your address inside `truffle.js`

## Run


`truffle develop` to instanciate local blockchain with Ganache

`npm start` and it should work ! you'll be able to interact with my VoteContract using your web application :)


## troubleshooting

### Windows

You might need to run this in case `npm install` fails

`npm install --global --production windows-build-tool`