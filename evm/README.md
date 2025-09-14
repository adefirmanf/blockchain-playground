# EVM Test
This project is designed for deploying smart contracts on EVM-compatible testnets using Hardhat 3.

## Why this project exist? 
The goal is to reduce dependency on other teams for E2E testing. Instead of waiting for a new chain to be deployed and waiting for mint/burn testing, we can deploy our own token to a testnet.
Deploying tokens often takes extra effort, but with reusable code, the process becomes much simpler and faster.

## Prequisites
* Node.js - 23.9.0
* Mise (optional): Version manager (similar to nvm or asdf)
* Alchemy API / Other RPC API
* Metamask ($0.001 on your mainnet account)

# How to deploy our first smart contract
Determine the next chain of project what we need to create. Let's say the next chain is Sei (https://www.sei.io/). 

1. Install Metamask and follow the setup guide from their official documentation.
2. In Metamask, switch to the Mainnet network and ensure you have $0.001 on your mainnet.
	* Why? To deploy contracts on a testnet, you’ll need testnet tokens (to cover gas fees).
3. WIP...