## Readme

### Installation

Clone the projet then

`npm install`

## Ganache


Download [Ganache](https://github.com/trufflesuite/ganache) or use `truffle develop` to set up a local blockchain for development

truffle.js is currently configured to use Ganache

## Truffle

Make sure you're following truffle standard packaging (/contracts and /migrations) before running the following command

`truffle compile`

`truffle migrate`

Do not forget to replace the `from` field with your address inside `truffle.js`

## Run

`truffle develop` to instantiate local blockchain with Ganache

`npm start` and it should work ! you'll be able to interact with VoteContract using your web application :)


## troubleshooting

### Windows

You might need to run this in case `npm install` fails

`npm install --global --production windows-build-tools`
