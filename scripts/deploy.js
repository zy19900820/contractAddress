// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const create2Factory = await hre.ethers.getContractFactory("Create2");
  const create2Contract = await create2Factory.deploy();

  await create2Contract.deployed();

  console.log(
    `deployed to ${create2Contract.address}` //0xa86827573cda428e95b79B34FDDD9377F601CaBe
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
