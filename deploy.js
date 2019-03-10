const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'magnet clog aim burden rigid era assault gadget whisper reopen party resemble',
    'https://rinkeby.infura.io/v3/d5b985e3c60741acb616f81334abd4e5'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: '0x' + bytecode })
        .send({gas: '1000000', from: accounts[0]});
    
	console.log(interface);
    console.log('Contract deployed to', result.options.address);
};
deploy();

