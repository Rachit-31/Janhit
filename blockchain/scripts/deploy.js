const { ethers } = require("hardhat");

async function main() {
  const CivicIssue = await ethers.getContractFactory("CivicIssue");
  const contract = await CivicIssue.deploy();
  await contract.deployed();
  console.log("CivicIssue deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
