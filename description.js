//we are going to create all the functions that we need to create the GUI in separate files and import them here.
//we will create a navbar with 7 buttons: Home, Wallet, Node, Explorer, Address Book, Settings, About
//we will create a footer with 3 buttons: Send, Receive, History
//the Home page will show the login if the user has not logged in yet or the dashboard if the user has logged in
//the Wallet page will show the user's wallet address and balance. From this page users will be able to send and receive transactions, check their TX history, and generate a proof of payment. From this page users will also be able to create a new wallet, import an existing wallet, and switch wallets.
//the Node page will show the node's status and the blockchain's status. From this page users will be able to start/stop the node, start/stop mining, and manage the node's settings.
//the Explorer page will show the blockchain's current block height, current block hash, current block difficulty, current block nonce, current block timestamp, current block transactions, current block miner, current block reward, current block size, current block merkle root, and current block previous hash. From this page users will be able to check transactions by supplying the transaction ID
//the Address Book page will allow users to save wallet addresses with notes. Users will be able to send transactions to saved addresses from this page.
//the Settings page will allow users to manage their node's settings, manage their wallet's settings, and manage their address book's settings.
//the About page will show information about the blockchain, the node, the wallet, and the GUI.
//the Send button will allow users to send transactions
//the Receive button will allow users to receive transactions
//the History button will allow users to check their TX history
//the navbar will be fixed at the top of the page
//the footer will be fixed at the bottom of the page
//the navbar and footer will be visible on all pages

//the Seigr wallet GUI is the only way users can connect with the Seigr blockchain
//Seigr is a blockchain that is designed to be used by the general public, but specially by beekeepers and researchers
//every running Seigr node that is fully synced and has a wallet with a balance of 1000 Seig or more will be able to become a validator node if they want to
//the Seigr blockchain is an hybrid proof of work and proof stake blockchain that uses the SHA-3 algorithm
//the Seigr blockchain must be ERC-20, ERC-721 and ERC-1155 compatible
//the Seigr blockchain must be compatible with the Ethereum Virtual Machine
//the Seigr blockchain must be compatible with the Ethereum JSON RPC API
//the native currency of the Seigr blockchain is the Seig
//Seigr is gasless
//Seigr is feeless
//Seigr is permissionless
//Seigr is censorship resistant
//Seigr is decentralized
//Seigr blockchain's ID number is 53194
//all peers will communicate with each other using the TCP protocol and the port 53194
//the Seigr blockchain will have a block time of 60 seconds
//the Seigr blockchain will have a block reward of 0.1 Seig
//the block reward will be distributed to the miner of the block
//the block difficulty will be adjusted every 10 blocks
//the Seigr blockchain will have a maximum supply of 1977000002007 Seig
//full synced nodes can start mining
//all nodes with Seig balance can stake Seig and earn a 2% bimonthly reward (if they lock stake for 2 months) or a 15% anual reward (if they lock stake for 1 year). Stake rewards will be distributed to the stakers every 10 blocks.
//all blockchain data will be decentralized and stored in the blockchain
//the size of blocks will increase or decrease in accordance with network demands
//users will be able to send transactions to other users, to smart contracts, and to the blockchain itself
//the only fee that users will have to pay is the transaction fee, that will be paid in Seig. The fee will be 0.001% of the transaction amount
//the Seig will have 18 decimals
//all peer nodes will be able to run a full node
//all peer nodes will be able to run a light node
//all peer nodes will be able to run a full node with a wallet
//all peer nodes will be able to run a light node with a wallet
//all peer nodes will be able to run a full node with a wallet and a miner
//light nodes won't be able to mine, but they can stake Seig
//full nodes will also be able to stake Seig
//all blockchain will be managed from the Seigr wallet GUI
//there will be games, NFTs, and other applications built on top of the Seigr blockchain
//the Seigr blockchain will be able to run smart contracts
//the Seigr blockchain will be able to run decentralized applications
//the Seigr blockchain will be able to run decentralized exchanges
//the Seigr blockchain will be able to run decentralized oracles
//the Seigr blockchain will be able to run decentralized autonomous organizations
//everytime the Seigr wallet GUI runs it will check if there is a new version available
//everytime the Seigr GUI runs it will search for peers
//the GUI will automatically connect to the best peer
//the GUI will automatically connect to the best peer with the best latency
//the GUI will automatically connect to the best peer with the best latency and the best download speed
//the GUI will automatically connect to the best peer with the best latency and the best upload speed
//the GUI will automatically manage peer connections so the user doesn't have to and the network is always fully connected
//the GUI will automatically manage peer connections so the user doesn't have to and the network is always fully connected and fully synced
//we are building the Seigr blockchain to be the best blockchain for beekeepers and researchers
//we are building the Seigr blockchain using javascript, electron forge and node.js
//peers will not be able to see other peers' IP addresses
//peers will not be able to see other peers' ports
//peers will not be able to see other peers' MAC addresses
//peers will not be able to see other peers' private keys
//peers' wallets will be encrypted
//peers' wallets will be encrypted using AES-256
//peers' wallets will be encrypted using AES-256 and a 256 bit key
//the blockchain will be encrypted
//the blockchain will be encrypted using AES-256
//the blockchain will be encrypted using AES-256 and a 256 bit key
//the GUI will create a folder called Seigr-blockchain in the user's home directory
//the GUI will create a folder called Seigr-blockchain in the user's home directory and will store all blockchain data in a subfolder called data
//the GUI will create a folder called Seigr-blockchain in the user's home directory and will store all blockchain data in a subfolder called data and will store all wallet data in a subfolder called wallet
//the GUI will act both as client and server for the blockchain
//the GUI will act both as client and server for the blockchain and will act both as client and server for the wallet
//Seigr blockchain must be secure and easy to use
//Seigr blockchain must be secure against DDOS attacks, phishing, spoofing, and other attacks
//Seigr blockchain must be secure against DDOS attacks, phishing, spoofing, and other attacks by using the latest security protocols
//the blockchain will be end to end encrypted
//the blockchain will be end to end encrypted using AES-256
//the blockchain will be end to end encrypted using AES-256 and a 256 bit key
//the GUI will be end to end encrypted
//Only the GUI will be able to decrypt the blockchain
//we will start running the Seigr blockchain from one node and then we will add more nodes
//Seigr blockchain's DAO is called Seigr Huset DAO
//Seigr Huset DAO will be a decentralized autonomous organization that will manage the Seigr blockchain
//Seig will be ASIC resistant 
//Seig will be ASIC resistant by using the SHA-3 algorithm
//Seig will be ASIC resistant by using the SHA-3 algorithm and the Keccak-256 hash function
//Seigr blockchain will be able to connect to the Ethereum blockchain and polygon network using the Ethereum JSON RPC API and the polygon JSON RPC API
//Seigr blockchain will be able to connect to the Ethereum blockchain and polygon network using the Ethereum JSON RPC API and the polygon JSON RPC API and will be able to send transactions to the Ethereum blockchain and polygon network
//those transactions will cost gas depending on the Ethereum and polygon network gas prices
//Seig must be able to be exchanged for Ethereum and polygon network tokens
//Seig must be able to be exchanged for Ethereum and polygon network tokens using decentralized exchanges
//Seig must be able to be exchanged for Ethereum and polygon network tokens using decentralized exchanges like Uniswap, SushiSwap, and QuickSwap
//Seig must be able to be exchanged for Ethereum and polygon network tokens using decentralized exchanges like Uniswap, SushiSwap, and QuickSwap and centralized exchanges like Binance, Coinbase, and Kraken
//Seig must have an automatic burn function that will be trigged when tokens are swaped 
//Seig must have an automatic burn function that will be trigged when tokens are swaped using decentralized exchanges
//The GUI will have a NFT marketplace
//the GUI will have a list of available dApps so users can install the apps they want to use and access to them from the GUI
//users of seigr blockchain will have access to all available dApps from the GUI but they will have to install the dApps they want to use
//since dApps are stored in the blockchain, users will have access to all available dApps from the GUI. But the GUI won't show the dApps interface until they install (activate) the ones they want to use
//users wallet address will be used to store all data they submit to the blockchain and interact with dApps
//user's wallets will be the only ones that can decrypt the data they submit to the blockchain (only some data will be accessible for research purposes).
//users will be able to use the GUI to interact with dApps and submit data to the blockchain

//all the blockchain code is in the SeigrBlockchain folder
//the GUI will use the SeigrBlockchain folder to run the blockchain
//the GUI will use the SeigrBlockchain folder to run the blockchain and the wallet
//the GUI will use the SeigrBlockchain folder to run the blockchain and the wallet and the miner
//the GUI will use the SeigrBlockchain folder to run the blockchain and the wallet and the miner and the dApps
//the GUI will use the SeigrBlockchain folder to run the blockchain and the wallet and the miner and the dApps and the NFT marketplace
//the GUI will use the SeigrBlockchain folder to run the blockchain and the wallet and the miner and the dApps and the NFT marketplace and the DAO
//the GUI will use the SeigrBlockchain folder to run the blockchain and the wallet and the miner and the dApps and the NFT marketplace and the DAO and the decentralized exchanges
//the GUI will use the SeigrBlockchain folder to create the Seigr-blockchain folder in the user's home directory
//the GUI will use the SeigrBlockchain folder to create the Seigr-blockchain folder in the user's home directory and will store all blockchain data in a subfolder called data
//the GUI will use the SeigrBlockchain folder to create the Seigr-blockchain folder in the user's home directory and will store all blockchain data in a subfolder called data and will store all wallet data in a subfolder called wallets
//the GUI will use the SeigrBlockchain to manage the seigr network and connect all peers
