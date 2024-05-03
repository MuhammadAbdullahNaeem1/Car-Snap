const ImageStorage = artifacts.require("ImageStorage");

module.exports = function(deployer) {
    const feeRecipientAddress = "0x66028F30C92a8aE44A67be6f2E784782B4cBB7c0"; // Specify the address of the fee recipient
    deployer.deploy(ImageStorage, feeRecipientAddress);
};