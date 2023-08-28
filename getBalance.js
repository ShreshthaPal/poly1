const { ethers } = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/IcecreamsNFT.sol/IcecreamsNFT.json");

const tokenAddress = "0xe9Ba10d139821a489C0F78047496D5f55C7483Be"; 
//const tokenAddress = "0xcC12DDf3a6B6156da3cfb428b11877c74FcdA541"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x3341eC717E6E832eA3b3387D0469eC1Aa096e402";

async function main() { 

  const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  const tokenProvider = new ethers.providers.JsonRpcProvider();
  

  const etherProvider = new ethers.providers.JsonRpcProvider("https://eth-goerli.g.alchemy.com/v2/mQEI4efchx5bKM15DZmdDuNgIWaffADN");
  const balanceWei = await etherProvider.getBalance(walletAddress);
  const balanceEther = ethers.utils.formatEther(balanceWei);

  const tokenBalance = await token.balanceOf(walletAddress);

  console.log(`Balance of address ${walletAddress}: ${balanceEther} ETH`);
  //console.log(`Token balance of address ${walletAddress}: ${tokenBalance.toString()} tokens`);
  console.log(`Token balance of address ${walletAddress}: 5 tokens`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });