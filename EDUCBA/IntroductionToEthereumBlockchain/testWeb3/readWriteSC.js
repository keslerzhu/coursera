const {Web3} = require('web3');

const web3 = new Web3( new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

const contractAddress = "0xD13B845253FA3097F2F1AF96D9Fbd80FC4A1a200";

const contractABI = [
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "_newValue",
				"type": "int256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const contract = new web3.eth.Contract(contractABI, contractAddress);

// write
async function writeValue(value) {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    const gas = await contract.methods.setValue(value).estimateGas();

    try {
        const receipt = await contract.methods.setValue(value).send({ from: account, gas: gas });
        console.log("Transaction successful:", receipt.transactionHash);
    } catch (error) {
        console.error("Error writing value:", error);
    }
}

// read
async function readValue() {
    try{
        const value = await contract.methods.getValue().call();
        console.log("Current value:", value);
    } catch (error) {
        console.error("Error reading value:", error);
    }
}


async function main() {
    await readValue();
    await writeValue(999);
    await readValue();

}

main();