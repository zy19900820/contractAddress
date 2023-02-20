const zkSync = require("zksync-web3")

async function createAddress() {
    console.log(zkSync.utils.createAddress("0x06902C817113Db7f0EcCf5D17bD5d1bdf22731Ec", 0))
  }

createAddress()