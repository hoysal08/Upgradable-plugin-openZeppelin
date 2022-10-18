const {ethers,upgrades} =require("hardhat")

async function main(){
  const NUM2=await ethers.getContractFactory("NUM2")
  console.log("NUM1 is upgrading ....");
  const num2=await upgrades.upgradeProxy('0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',NUM2);
  await num2.deployed();
  console.log("NUM1 upgraded to: ",num2.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//NUM1 deployed at :  0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
//NUM1 upgraded to:  0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0