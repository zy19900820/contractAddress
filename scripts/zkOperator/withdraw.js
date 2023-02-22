require("dotenv").config();
const zkSync = require("zksync-web3")
const ethers = require("ethers")


async function main() {
    const ethProvider = new ethers.providers.JsonRpcProvider(process.env.GOERLI_URL)
    const syncProvider = new zkSync.Provider("https://zksync2-testnet.zksync.dev")

    const priKey = process.env.PRIVATE_KEY

    const syncWallet = new zkSync.Wallet(priKey, syncProvider, ethProvider)

    const abi = [
        "function withdraw() external",
        "function withdrawErc20(address)"
    ]

    const contractWithdraw = new ethers.Contract("0x675838Bf0441271A8eBd31c0D89d666A3B1620bC", abi, syncWallet);
    // const txWithdraw = await contractWithdraw.withdraw()
    // console.log("txWithdraw:", txWithdraw)
    //success
 
    const txWithdraw = await contractWithdraw.withdrawErc20("0x000000000000000000000000000000000000800A")
    console.log("txWithdraw:", txWithdraw)
    //fail
}

main()
