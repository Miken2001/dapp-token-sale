const EdToken = artifacts.require("./EdToken.sol");

module.exports = function(deployer) {
  deployer.deploy(EdToken);
};
