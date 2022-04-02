const hre = require("hardhat");

async function main() {

  const FNFT = await hre.ethers.getContractFactory("Fnft");
  const fnft = await FNFT.deploy();

  await fnft.deployed();

  console.log("FNFT deployed to:", fnft.address);

}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  //0x5FbDB2315678afecb367f032d93F642f64180aa3