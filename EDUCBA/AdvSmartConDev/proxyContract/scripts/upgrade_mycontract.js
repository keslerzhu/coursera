const {ethers, upgrades} = require("hardhat");

async function main() {
    const MyContractV2 = await ethers.getContractFactory("MyContractV2");
    await upgrades.upgradeProxy("0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0", MyContractV2);

    console.log("MyContract upgraded.");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
