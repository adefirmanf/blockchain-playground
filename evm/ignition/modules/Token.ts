import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("TokenModule", (m) => {
	const owner = m.getAccount(0);
	const token = m.contract("Token", [owner, "TestXSGD", "TXSGD"]);

	// Mint initial supply (1 million tokens with 18 decimals)
	const initialSupply = "1000000000000000000000000"; // 1,000,000 tokens in wei

	m.call(token, "mint", [owner, initialSupply], {
		id: "mintInitialSupply"
	});

	return { token };
});
