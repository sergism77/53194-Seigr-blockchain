//here we define the SEIG token, which is the native Seigr blockchain token
//we want the seig to be a token that is used to stake in the Seigr blockchain, as the reward for stakers and miners, and as a governance token for the Seigr Huset DAO
//this token will also be used to pay for game items, NFTs, and other services in the Seigr Huset ecosystem
//we will use the ERC20 standard for the SEIG token
//we want the seig to be a token that can be swapped for other tokens, and that can be used to pay for services in the Seigr Huset ecosystem
//we want the token to have automatic burn and redistribution features
//we want the seig to be strong and secure
//what do we need to start coding the SEIG token? answer: we need to import the ERC20 standard from openzeppelin
//we also need to import the ERC20PresetMinterPauser from openzeppelin
//we also need to import the ERC20Burnable from openzeppelin
//we also need to import the ERC20Capped from openzeppelin
//we also need to import the ERC20Pausable from openzeppelin
//we also need to import the ERC20Snapshot from openzeppelin
//we also need to import the ERC20Permit from openzeppelin
//we also need to import the ERC20Votes from openzeppelin
//we also need to import the ERC20VotesComp from openzeppelin
//we also need to import the ERC20FlashMint from openzeppelin
//we design SEIG using javascript



//what code are we still missing in SEIGToken.js? answer: all of it. So the code we have above is useless? answer: yes.
//what code should we have then? answer: all of it. So the code we have above is useless? answer: yes.
//write the code we actually need:
//1. deploy the contract
//2. get the contract address
//3. get the contract ABI
//4. get the contract bytecode
//5. get the contract source code
//6. get the contract function signatures
//7. get the contract function definitions
//8. get the contract function inputs
//9. get the contract function outputs
//10. get the contract function events
//11. get the contract function modifiers
//12. get the contract function payable status
//13. get the contract function constant status
//14. get the contract function visibility status
//15. get the contract function mutability status
//16. get the contract function gas usage
//17. get the contract function gas price
//18. get the contract function gas limit
//19. get the contract function gas cost
//20. get the contract function gas refund
//21. get the contract function gas return
//22. get the contract function gas remaining
//23. get the contract function gas spent
//24. get the contract function gas used
//25. get the contract function gas wasted
//26. get the contract function gas overhead
//27. get the contract function gas underhead
//28. get the contract function gas overuse
//29. get the contract function gas underuse
//30. get the contract function gas overpay

//how do we start running Seigr blockchain so we can save contracts to it? answer: we need to start running the Seigr blockchain
//how do we start running Seigr blockchain from terminal? answer: we need to run the command "npx hardhat node" in terminal
//this starts hardhat node, which is a local Ethereum network, we want to run our seigr blockchain. How do we do that? answer: we need to run the command "npx hardhat node --network seigr" in terminal
//but we need first test if our seigr blockchain works without hardhat. How do we start seigr blockchain without hardhat? answer: we need to run the command "npx seigr node" in terminal
//we have the code in the blockchain folder, how do we start seigr blockchain? answer: we need to run the command "npx seigr node" in terminal
//before we can use npx we MUST run our code to start the seigr blockchain. How do we do that? answer: we need to run the command "node index.js" in terminal
//should we create a new file for the seigr blockchain? answer: yes, we should create a new file called seigr.js