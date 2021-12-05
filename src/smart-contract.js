import web3 from './web3';
const address = "0x2d3FFE3146067d8c656C987b59e705d125960E58";


const abi =[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "accounts",
		"outputs": [
			{
				"internalType": "bool",
				"name": "is_validator",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "exists",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "asset_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "asset_type",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "owner_address",
				"type": "address"
			}
		],
		"name": "add_asset_to_blockchain",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "asset_type",
				"type": "string"
			}
		],
		"name": "add_supported_asset",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "validator_address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "asset_type",
				"type": "string"
			}
		],
		"name": "add_validator",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "add_wallet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "address_asset",
		"outputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "consent_to_sell",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "exists",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "price_to_sell",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner_address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "asset_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "asset_price",
				"type": "uint256"
			}
		],
		"name": "buy_asset",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "asset_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "asset_price",
				"type": "uint256"
			}
		],
		"name": "consent_to_sell",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "supported_assets",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "validator_asset",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// @ts-ignore
export default new web3.eth.Contract(abi, address);