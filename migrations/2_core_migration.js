const Ownable = artifacts.require("coffeecore/Ownable");

module.exports = function(deployer) {
  deployer.deploy(Ownable);
};
