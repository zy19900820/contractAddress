require("dotenv").config();
const zkSync = require("zksync-web3")
const ethers = require("ethers")


async function main() {
    const ethProvider = new ethers.providers.JsonRpcProvider(process.env.GOERLI_URL)
    const syncProvider = new zkSync.Provider("https://zksync2-testnet.zksync.dev")

    const priKey = process.env.PRIVATE_KEY

    const syncWallet = new zkSync.Wallet(priKey, syncProvider, ethProvider)

    const tx = await syncWallet.transfer({
        to: "0x675838Bf0441271A8eBd31c0D89d666A3B1620bC",
        token: ethers.constants.AddressZero,
        amount: ethers.utils.parseEther("0.001"),
    });
    console.log(tx)
}

main()
