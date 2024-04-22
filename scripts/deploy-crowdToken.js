const hre = require("hardhat");

async function main() {
  const CrowdTank = await ethers.getContractFactory("CrowdTank");
  const crowdTank = await CrowdTank.deploy();

  console.log("CrowdTank deployed to:",crowdTank.target);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});