const rlp = require('rlp');
const keccak = require('keccak');
const web3 = require('web3')
const { getContractAddress } = require('ethers/lib/utils');

function testRlp() {
    const encodedData = rlp.encode([
        '0x06902C817113Db7f0EcCf5D17bD5d1bdf22731Ec', // address from which contract is to be deployed
        web3.utils.toHex(2659) // hex encoded nonce of address that will be used for contract deployment
      ]);
      
      const buffer = new Buffer.from(encodedData)
      
      const contractAddress = `0x${keccak('keccak256').update(buffer).digest('hex').substring(24)}`
      console.log({contractAddress})
}

console.log(getContractAddress({from:"0x06902C817113Db7f0EcCf5D17bD5d1bdf22731Ec", nonce:2659}))


