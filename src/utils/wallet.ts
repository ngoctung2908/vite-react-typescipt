/**
 * Prompt the user to add BSC as a network on Metamask, or switch to BSC if the wallet is on a different network
 * @returns {boolean} true if the setup succeeded, false otherwise
 */
export const setupNetwork = async () => {
	const provider = window.ethereum;
	if (provider) {
		const chainId = parseInt(process.env.REACT_APP_CHAIN_ID || "1666700000", 10);
		try {
			await provider.request({
				method: "wallet_addEthereumChain",
				params: [
					{
						chainId: `0x${chainId.toString(16)}`,
						chainName: "Harmony Mainnet",
						nativeCurrency: {
							name: "ONE",
							symbol: "ONE",
							decimals: 18,
						},
						rpcUrls: [process.env.REACT_APP_NODE],
						blockExplorerUrls: [process.env.REACT_APP_BLOCK_EXPLORER_URL],
					},
				],
			});
			return true;
		} catch (error) {
			console.error("Failed to setup the network in Metamask:", error);
			return false;
		}
	} else {
		console.error("Can't setup the BSC network on metamask because window.ethereum is undefined");
		return false;
	}
};
