require("dotenv").config();
const zkSync = require("zksync-web3")
const ethers = require("ethers")


async function main() {
    const ethProvider = new ethers.providers.JsonRpcProvider(process.env.GOERLI_URL)
    const syncProvider = new zkSync.Provider("https://zksync2-testnet.zksync.dev")

    const priKey = process.env.PRIVATE_KEY

    const syncWallet = new zkSync.Wallet(priKey, syncProvider, ethProvider)

    const abi = [
        "function blockNumber() public view returns (uint256)"
    ]

    const contractWithdraw = new ethers.Contract("0xFB43d05f7a6cBcC39058Be4a85aC4f8b34dDaf53", abi, syncWallet);
    // const txWithdraw = await contractWithdraw.withdraw()
    // console.log("txWithdraw:", txWithdraw)
    //success
 
    const block = await contractWithdraw.blockNumber()
    console.log(ethers.utils.formatEther(block))
}

main()
