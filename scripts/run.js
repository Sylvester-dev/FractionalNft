const hre = require("hardhat");

async function main() {

  const FNFT = await hre.ethers.getContractFactory("Fnft");
  const fnft = await FNFT.deploy();

  await fnft.deployed();

  console.log("FNFT deployed to:", fnft.address);

  const mintTxn = await fnft.mint("1", "22");
  await mintTxn.wait();
  console.log("MINTED");
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
