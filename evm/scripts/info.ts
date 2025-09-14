import { network } from "hardhat";

const { ethers } = await network.connect({
	network: "sepolia",
	chainType: "l1",
});

async function main() {
	const network = await ethers.provider.getNetwork();

	console.log("Network Name:", network.name);
	console.log("Chain ID:", network.chainId.toString());

	// Get current block number as well
	const blockNumber = await ethers.provider.getBlockNumber();
	console.log("Current Block:", blockNumber);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});