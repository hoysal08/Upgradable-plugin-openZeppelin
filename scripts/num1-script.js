const {ethers,upgrades} =require("hardhat")

async function main(){
  const NUM1=await ethers.getContractFactory("NUM1")
  const num1=await upgrades.deployProxy(NUM1,[10],{
    initializer:'update'
  });
 
  await num1.deployed();
  console.log("NUM1 deployed at : ",num1.address)
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//NUM1 deployed at :  0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0