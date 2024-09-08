const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = Ignition(async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  console.log("Deploying Elon contract...");

  const elon = await deploy("Elon", {
    from: deployer,
    log: true,
  });

  console.log("Elon contract deployed to:", elon.address);
});

module.exports.tags = ["Elon"];
