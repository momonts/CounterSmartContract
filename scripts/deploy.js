async function main() {
    const [deployer] = await ethers.getSigners();

    const TokenFactory = await ethers.getContractFactory("SimpleCounter", deployer);
    
    const token = await TokenFactory.deploy();
    await token.waitForDeployment();

    console.log("Deployer Account:", deployer.address);
    console.log("Token deployed to:", await token.getAddress());
}

main()
.then(()=> process.exit(0))
.catch((error) => {
    console.error("Error deploying contract:", error)
    process.exit(1);
});