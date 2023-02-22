import { utils, Wallet } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import dotenv from "dotenv";

dotenv.config();

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the Greeter contract`);

  // Initialize the wallet.
  const wallet = new Wallet(process.env.PRIVATE_KEY || "");

  // Create deployer object and load the artifact of the contract we want to deploy.
  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact("WithdrawTest");

  const create2Contract = await deployer.deploy(artifact, []);

  // Show the contract info.
  const contractAddress = create2Contract.address;
  console.log(`${artifact.contractName} was deployed to ${contractAddress}`);
  //0x675838Bf0441271A8eBd31c0D89d666A3B1620bC
}
