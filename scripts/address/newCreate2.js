const zkSync = require("zksync-web3")
const ethers = require("ethers")
require("dotenv").config()

async function createAddress() {
  const ethProvider = new ethers.providers.JsonRpcProvider("https://eth-goerli.g.alchemy.com/v2/pQ_i8o-4xJTQPfhVJH1AzIPB7mpIdbh7")
  const syncProvider = new zkSync.Provider("https://zksync2-testnet.zksync.dev")

  const priKey = process.env.PRIVATE_KEY

  const syncWallet = new zkSync.Wallet(priKey, syncProvider, ethProvider)

  const abi = [
    "function create2(bytes32) public",
    "function getTestAddress(uint256) public view returns(address)"
  ]

   const contract = new ethers.Contract("0xAB3569093F9E7d23b78416dE3E8C487A44CDb659", abi, syncWallet);
  // const tx = await contract.create2("0x0000000000000000000000000000000000000000000000000000000000000000");
  // //0x28e66328503fe3dc35b09f8f880c1d72c2f8401c001ae5ef4c2513190e1f6c89
  // await tx.wait()

   const address = await contract.getTestAddress(0);
  //0xab3569093f9e7d23b78416de3e8c487a44cdb659 (blockcount) 0x60D4DaB63adCbF45Ae1C094eeDf1e52d343F6772(reak)
   console.log(address)
}

createAddress()