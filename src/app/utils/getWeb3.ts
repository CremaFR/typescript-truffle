// import Web3 from 'web3'
import Web3 =  require('web3');

declare global {
  interface Window { web3?: Web3; }
}


let getWeb3 = new Promise(function(resolve, reject) {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  window.addEventListener('load', function() {
    var results;
    var web3 = window.web3;

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
      // Use Mist/MetaMask's provider.
      web3 = new Web3(web3.currentProvider)

      console.log('Injected web3 detected.');

      resolve(web3)
    } else {
      // Fallback to localhost if no web3 injection.
      web3 = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:8546'));
      // web3 = new Web3('http://localhost:8545');
      console.log('No web3 instance injected, using Local web3.', web3);
      resolve(web3)
    }
  })
})

export default getWeb3
