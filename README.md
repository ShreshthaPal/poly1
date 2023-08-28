
# polyproof 1
This readme file described about my Polyproof module 1 project that is used for breezing tokens on different network.
# description
Contract Declaration: The contract IcecreamsNFT is declared, and it inherits from ERC721A.
State Variables:
address public owner: Stores the address of the owner of the contract.
string private baseUrl: Stores the base URL for the NFTs. This is typically used to construct the full URL of the metadata associated with each token.
string public prompt: Stores a prompt description related to ice cream.
uint256 public maxQuantity: Defines the maximum number of tokens that can be minted.
Constructor: The constructor initializes the contract with a name ("IcecreamsNFT") and a symbol ("INFT"). It also sets the contract deployer's address as the owner.
Modifier: The onlyOwner modifier restricts certain functions to be callable only by the contract owner.
Minting Function: The mint function allows the contract owner to mint new NFTs. It takes an address (to) to assign ownership to and a token ID. It also checks whether the maximum number of tokens has been reached before minting.
Base URI Override: The _baseURI function is overridden to return the base URL for the NFTs. This function is used to construct the full metadata URL for each token.
Prompt Description Function: The getPromptDescription function allows anyone to retrieve the stored prompt description related to ice cream.
# Author
Shrestha pal


