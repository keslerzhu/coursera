const {ethers, upgrades} = require("hardhat");

async function main() {
    const MyContract = await ethers.getContractFactory("MyContract");
    const myContract1 = await upgrades.deployProxy(MyContract, [1981], { initializer: 'setValue' });
    await myContract1.waitForDeployment();
    console.log("MyContract deployed to:", await myContract1.getAddress());
    //MyContract deployed to: 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});