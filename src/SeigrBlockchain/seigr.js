// Version: 0.0.3
// Description: Seigr Blockchain
// Language: JavaScript

const blockchain = require('./blockchain.js');
const block = require('./block.js');
const transaction = require('./transaction.js');
const wallet = require('./wallet.js');
const miner = require('./miner.js');
const node = require('./node.js');
const network = require('./network.js');
const peer = require('./peer.js');
const peerlist = require('./peer.js');
const peerlistitem = require('./peer.js');
const os = require('os');
const fs = require('fs-extra');
const homeDir = os.homedir();
const osPathSeparator = os.platform() === 'win32' ? '\\' : '/'; 'linux' ? '/' : '/';  'darwin' ? '/' : '/'; 'freebsd' ? '/' : '/'; 'openbsd' ? '/' : '/'; 'sunos' ? '/' : '/'; 'mac' ? '/' : '/'; 'win64' ? '\\' : '/';
const homeDirPath = `${homeDir}${osPathSeparator}`;


class seigr {
    constructor() {
        this.blockchain = blockchain;
        this.block = block;
        this.transaction = transaction;
        this.wallet = wallet;
        this.miner = miner;
        this.node = node;
        this.network = network;
        this.peer = peer;
        this.peerlist = peerlist;
        this.peerlistitem = peerlistitem;
    }
}

const seigr = new seigr();



const seigrBlockchainDir = `${homeDir}${osPathSeparator}SeigrBlockchain`;
if (!fs.existsSync(seigrBlockchainDir)) {
    fs.mkdirSync(seigrBlockchainDir);
}

const walletDir = `${homeDir}${osPathSeparator}SeigrBlockchain${osPathSeparator}Wallets`;
if (!fs.existsSync(walletDir)) {
    fs.mkdirSync(walletDir);
}

const dataDir = `${homeDir}${osPathSeparator}SeigrBlockchain${osPathSeparator}Data`;
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

const nodeDir = `${homeDir}${osPathSeparator}SeigrBlockchain${osPathSeparator}Data${osPathSeparator}Nodes`;
if (!fs.existsSync(nodeDir)) {
    fs.mkdirSync(nodeDir);
}

const peerDir = `${homeDir}${osPathSeparator}SeigrBlockchain${osPathSeparator}Data${osPathSeparator}Peers`;
if (!fs.existsSync(peerDir)) {
    fs.mkdirSync(peerDir);
}

const peerlistDir = `${homeDir}${osPathSeparator}SeigrBlockchain${osPathSeparator}Data${osPathSeparator}Peerlists`;
if (!fs.existsSync(peerlistDir)) {
    fs.mkdirSync(peerlistDir);
}

const peerlistitemDir = `${homeDir}${osPathSeparator}SeigrBlockchain${osPathSeparator}Data${osPathSeparator}Peerlistitems`;
if (!fs.existsSync(peerlistitemDir)) {
    fs.mkdirSync(peerlistitemDir);
}

const blockchainDir = `${homeDir}${osPathSeparator}SeigrBlockchain${osPathSeparator}Data${osPathSeparator}Blockchains`;
if (!fs.existsSync(blockchainDir)) {
    fs.mkdirSync(blockchainDir);
}

const blockDir = `${homeDir}${osPathSeparator}SeigrBlockchain${osPathSeparator}Data${osPathSeparator}Blocks`;
if (!fs.existsSync(blockDir)) {
    fs.mkdirSync(blockDir);
}

const transactionDir = `${homeDir}${osPathSeparator}SeigrBlockchain${osPathSeparator}Data${osPathSeparator}Transactions`;
if (!fs.existsSync(transactionDir)) {
    fs.mkdirSync(transactionDir);
}

const minerDir = `${homeDir}${osPathSeparator}SeigrBlockchain${osPathSeparator}Data${osPathSeparator}Miners`;
if (!fs.existsSync(minerDir)) {
    fs.mkdirSync(minerDir);
}

const networkDir = `${homeDir}${osPathSeparator}SeigrBlockchain${osPathSeparator}Data${osPathSeparator}Networks`;
if (!fs.existsSync(networkDir)) {
    fs.mkdirSync(networkDir);
}

const walletFile = `${homeDir}${osPathSeparator}SeigrBlockchain${osPathSeparator}Wallets${osPathSeparator}wallet.json`;
if (!fs.existsSync(walletFile)) {
    fs.writeFileSync(walletFile, JSON.stringify(seigr.wallet.createWallet()));
}

const nodeFile = `${homeDir}${osPathSeparator}SeigrBlockchain${osPathSeparator}Data${osPathSeparator}Nodes${osPathSeparator}node.json`;
if (!fs.existsSync(nodeFile)) {
    fs.writeFileSync(nodeFile, JSON.stringify(seigr.node.createNode()));
}

const peerFile = `${homeDir}${osPathSeparator}SeigrBlockchain${osPathSeparator}Data${osPathSeparator}Peers${osPathSeparator}peer.json`;
if (!fs.existsSync(peerFile)) {
    fs.writeFileSync(peerFile, JSON.stringify(seigr.peer.createPeer()));
}

const peerlistFile = `${homeDir}${osPathSeparator}SeigrBlockchain${osPathSeparator}Data${osPathSeparator}Peerlists${osPathSeparator}peerlist.json`;
if (!fs.existsSync(peerlistFile)) {
    fs.writeFileSync(peerlistFile, JSON.stringify(seigr.peerlist.createPeerlist()));
}

const peerlistitemFile = `${homeDir}${osPathSeparator}SeigrBlockchain${osPathSeparator}Data${osPathSeparator}Peerlistitems${osPathSeparator}peerlistitem.json`;
if (!fs.existsSync(peerlistitemFile)) {
    fs.writeFileSync(peerlistitemFile, JSON.stringify(seigr.peerlistitem.createPeerlistitem()));
}

const blockchainFile = `${homeDir}${osPathSeparator}SeigrBlockchain${osPathSeparator}Data${osPathSeparator}Blockchains${osPathSeparator}blockchain.json`;
if (!fs.existsSync(blockchainFile)) {
    fs.writeFileSync(blockchainFile, JSON.stringify(seigr.blockchain.createBlockchain()));
}

const blockFile = `${homeDir}${osPathSeparator}SeigrBlockchain${osPathSeparator}Data${osPathSeparator}Blocks${osPathSeparator}block.json`;
if (!fs.existsSync(blockFile)) {
    fs.writeFileSync(blockFile, JSON.stringify(seigr.block.createBlock()));
}

const transactionFile = `${homeDir}${osPathSeparator}SeigrBlockchain${osPathSeparator}Data${osPathSeparator}Transactions${osPathSeparator}transaction.json`;
if (!fs.existsSync(transactionFile)) {
    fs.writeFileSync(transactionFile, JSON.stringify(seigr.transaction.createTransaction()));
}

const minerFile = `${homeDir}${osPathSeparator}SeigrBlockchain${osPathSeparator}Data${osPathSeparator}Miners${osPathSeparator}miner.json`;
if (!fs.existsSync(minerFile)) {
    fs.writeFileSync(minerFile, JSON.stringify(seigr.miner.createMiner()));
}

const networkFile = `${homeDir}${osPathSeparator}SeigrBlockchain${osPathSeparator}Data${osPathSeparator}Networks${osPathSeparator}network.json`;
if (!fs.existsSync(networkFile)) {
    fs.writeFileSync(networkFile, JSON.stringify(seigr.network.createNetwork()));
}

const walletData = JSON.parse(fs.readFileSync(walletFile));
const nodeData = JSON.parse(fs.readFileSync(nodeFile));
const peerData = JSON.parse(fs.readFileSync(peerFile));
const peerlistData = JSON.parse(fs.readFileSync(peerlistFile));
const peerlistitemData = JSON.parse(fs.readFileSync(peerlistitemFile));
const blockchainData = JSON.parse(fs.readFileSync(blockchainFile));
const blockData = JSON.parse(fs.readFileSync(blockFile));
const transactionData = JSON.parse(fs.readFileSync(transactionFile));
const minerData = JSON.parse(fs.readFileSync(minerFile));
const networkData = JSON.parse(fs.readFileSync(networkFile));

const wallet = seigr.wallet.createWallet(walletData);
const node = seigr.node.createNode(nodeData);
const peer = seigr.peer.createPeer(peerData);
const peerlist = seigr.peerlist.createPeerlist(peerlistData);
const peerlistitem = seigr.peerlistitem.createPeerlistitem(peerlistitemData);
const blockchain = seigr.blockchain.createBlockchain(blockchainData);
const block = seigr.block.createBlock(blockData);
const transaction = seigr.transaction.createTransaction(transactionData);
const miner = seigr.miner.createMiner(minerData);
const network = seigr.network.createNetwork(networkData);

const walletList = seigr.wallet.createWalletList();
const nodeList = seigr.node.createNodeList();
const peerList = seigr.peer.createPeerList();
const peerlistList = seigr.peerlist.createPeerlistList();
const peerlistitemList = seigr.peerlistitem.createPeerlistitemList();
const blockchainList = seigr.blockchain.createBlockchainList();
const blockList = seigr.block.createBlockList();
const transactionList = seigr.transaction.createTransactionList();
const minerList = seigr.miner.createMinerList();
const networkList = seigr.network.createNetworkList();

const walletController = seigr.wallet.createWalletController();
const nodeController = seigr.node.createNodeController();
const peerController = seigr.peer.createPeerController();
const peerlistController = seigr.peerlist.createPeerlistController();
const peerlistitemController = seigr.peerlistitem.createPeerlistitemController();
const blockchainController = seigr.blockchain.createBlockchainController();
const blockController = seigr.block.createBlockController();
const transactionController = seigr.transaction.createTransactionController();
const minerController = seigr.miner.createMinerController();
const networkController = seigr.network.createNetworkController();

const walletService = seigr.wallet.createWalletService();
const nodeService = seigr.node.createNodeService();
const peerService = seigr.peer.createPeerService();
const peerlistService = seigr.peerlist.createPeerlistService();
const peerlistitemService = seigr.peerlistitem.createPeerlistitemService();
const blockchainService = seigr.blockchain.createBlockchainService();
const blockService = seigr.block.createBlockService();
const transactionService = seigr.transaction.createTransactionService();
const minerService = seigr.miner.createMinerService();
const networkService = seigr.network.createNetworkService();

const walletRouter = seigr.wallet.createWalletRouter();
const nodeRouter = seigr.node.createNodeRouter();
const peerRouter = seigr.peer.createPeerRouter();
const peerlistRouter = seigr.peerlist.createPeerlistRouter();
const peerlistitemRouter = seigr.peerlistitem.createPeerlistitemRouter();
const blockchainRouter = seigr.blockchain.createBlockchainRouter();
const blockRouter = seigr.block.createBlockRouter();
const transactionRouter = seigr.transaction.createTransactionRouter();
const minerRouter = seigr.miner.createMinerRouter();
const networkRouter = seigr.network.createNetworkRouter();

const walletApp = seigr.wallet.createWalletApp();
const nodeApp = seigr.node.createNodeApp();
const peerApp = seigr.peer.createPeerApp();
const peerlistApp = seigr.peerlist.createPeerlistApp();
const peerlistitemApp = seigr.peerlistitem.createPeerlistitemApp();
const blockchainApp = seigr.blockchain.createBlockchainApp();
const blockApp = seigr.block.createBlockApp();
const transactionApp = seigr.transaction.createTransactionApp();
const minerApp = seigr.miner.createMinerApp();
const networkApp = seigr.network.createNetworkApp();

const walletServer = seigr.wallet.createWalletServer();
const nodeServer = seigr.node.createNodeServer();
const peerServer = seigr.peer.createPeerServer();
const peerlistServer = seigr.peerlist.createPeerlistServer();
const peerlistitemServer = seigr.peerlistitem.createPeerlistitemServer();
const blockchainServer = seigr.blockchain.createBlockchainServer();
const blockServer = seigr.block.createBlockServer();
const transactionServer = seigr.transaction.createTransactionServer();
const minerServer = seigr.miner.createMinerServer();
const networkServer = seigr.network.createNetworkServer();

const walletClient = seigr.wallet.createWalletClient();
const nodeClient = seigr.node.createNodeClient();
const peerClient = seigr.peer.createPeerClient();
const peerlistClient = seigr.peerlist.createPeerlistClient();
const peerlistitemClient = seigr.peerlistitem.createPeerlistitemClient();
const blockchainClient = seigr.blockchain.createBlockchainClient();
const blockClient = seigr.block.createBlockClient();
const transactionClient = seigr.transaction.createTransactionClient();
const minerClient = seigr.miner.createMinerClient();
const networkClient = seigr.network.createNetworkClient();

const walletView = seigr.wallet.createWalletView();
const nodeView = seigr.node.createNodeView();
const peerView = seigr.peer.createPeerView();
const peerlistView = seigr.peerlist.createPeerlistView();
const peerlistitemView = seigr.peerlistitem.createPeerlistitemView();
const blockchainView = seigr.blockchain.createBlockchainView();
const blockView = seigr.block.createBlockView();
const transactionView = seigr.transaction.createTransactionView();
const minerView = seigr.miner.createMinerView();
const networkView = seigr.network.createNetworkView();

const walletModel = seigr.wallet.createWalletModel();
const nodeModel = seigr.node.createNodeModel();
const peerModel = seigr.peer.createPeerModel();
const peerlistModel = seigr.peerlist.createPeerlistModel();
const peerlistitemModel = seigr.peerlistitem.createPeerlistitemModel();
const blockchainModel = seigr.blockchain.createBlockchainModel();
const blockModel = seigr.block.createBlockModel();
const transactionModel = seigr.transaction.createTransactionModel();
const minerModel = seigr.miner.createMinerModel();
const networkModel = seigr.network.createNetworkModel();

const walletControllerList = seigr.wallet.createWalletControllerList();
const nodeControllerList = seigr.node.createNodeControllerList();
const peerControllerList = seigr.peer.createPeerControllerList();
const peerlistControllerList = seigr.peerlist.createPeerlistControllerList();
const peerlistitemControllerList = seigr.peerlistitem.createPeerlistitemControllerList();
const blockchainControllerList = seigr.blockchain.createBlockchainControllerList();
const blockControllerList = seigr.block.createBlockControllerList();
const transactionControllerList = seigr.transaction.createTransactionControllerList();
const minerControllerList = seigr.miner.createMinerControllerList();
const networkControllerList = seigr.network.createNetworkControllerList();

const walletServiceList = seigr.wallet.createWalletServiceList();
const nodeServiceList = seigr.node.createNodeServiceList();
const peerServiceList = seigr.peer.createPeerServiceList();
const peerlistServiceList = seigr.peerlist.createPeerlistServiceList();
const peerlistitemServiceList = seigr.peerlistitem.createPeerlistitemServiceList();
const blockchainServiceList = seigr.blockchain.createBlockchainServiceList();
const blockServiceList = seigr.block.createBlockServiceList();
const transactionServiceList = seigr.transaction.createTransactionServiceList();
const minerServiceList = seigr.miner.createMinerServiceList();
const networkServiceList = seigr.network.createNetworkServiceList();

const walletRouterList = seigr.wallet.createWalletRouterList();
const nodeRouterList = seigr.node.createNodeRouterList();
const peerRouterList = seigr.peer.createPeerRouterList();
const peerlistRouterList = seigr.peerlist.createPeerlistRouterList();
const peerlistitemRouterList = seigr.peerlistitem.createPeerlistitemRouterList();
const blockchainRouterList = seigr.blockchain.createBlockchainRouterList();
const blockRouterList = seigr.block.createBlockRouterList();
const transactionRouterList = seigr.transaction.createTransactionRouterList();
const minerRouterList = seigr.miner.createMinerRouterList();
const networkRouterList = seigr.network.createNetworkRouterList();

const walletAppList = seigr.wallet.createWalletAppList();
const nodeAppList = seigr.node.createNodeAppList();
const peerAppList = seigr.peer.createPeerAppList();
const peerlistAppList = seigr.peerlist.createPeerlistAppList();
const peerlistitemAppList = seigr.peerlistitem.createPeerlistitemAppList();
const blockchainAppList = seigr.blockchain.createBlockchainAppList();
const blockAppList = seigr.block.createBlockAppList();
const transactionAppList = seigr.transaction.createTransactionAppList();
const minerAppList = seigr.miner.createMinerAppList();
const networkAppList = seigr.network.createNetworkAppList();

const walletServerList = seigr.wallet.createWalletServerList();
const nodeServerList = seigr.node.createNodeServerList();
const peerServerList = seigr.peer.createPeerServerList();
const peerlistServerList = seigr.peerlist.createPeerlistServerList();
const peerlistitemServerList = seigr.peerlistitem.createPeerlistitemServerList();
const blockchainServerList = seigr.blockchain.createBlockchainServerList();
const blockServerList = seigr.block.createBlockServerList();
const transactionServerList = seigr.transaction.createTransactionServerList();
const minerServerList = seigr.miner.createMinerServerList();
const networkServerList = seigr.network.createNetworkServerList();

const walletClientList = seigr.wallet.createWalletClientList();
const nodeClientList = seigr.node.createNodeClientList();
const peerClientList = seigr.peer.createPeerClientList();
const peerlistClientList = seigr.peerlist.createPeerlistClientList();
const peerlistitemClientList = seigr.peerlistitem.createPeerlistitemClientList();
const blockchainClientList = seigr.blockchain.createBlockchainClientList();
const blockClientList = seigr.block.createBlockClientList();
const transactionClientList = seigr.transaction.createTransactionClientList();
const minerClientList = seigr.miner.createMinerClientList();
const networkClientList = seigr.network.createNetworkClientList();

const walletViewList = seigr.wallet.createWalletViewList();
const nodeViewList = seigr.node.createNodeViewList();
const peerViewList = seigr.peer.createPeerViewList();
const peerlistViewList = seigr.peerlist.createPeerlistViewList();
const peerlistitemViewList = seigr.peerlistitem.createPeerlistitemViewList();
const blockchainViewList = seigr.blockchain.createBlockchainViewList();
const blockViewList = seigr.block.createBlockViewList();
const transactionViewList = seigr.transaction.createTransactionViewList();
const minerViewList = seigr.miner.createMinerViewList();
const networkViewList = seigr.network.createNetworkViewList();

const walletModelList = seigr.wallet.createWalletModelList();
const nodeModelList = seigr.node.createNodeModelList();
const peerModelList = seigr.peer.createPeerModelList();
const peerlistModelList = seigr.peerlist.createPeerlistModelList();
const peerlistitemModelList = seigr.peerlistitem.createPeerlistitemModelList();
const blockchainModelList = seigr.blockchain.createBlockchainModelList();
const blockModelList = seigr.block.createBlockModelList();
const transactionModelList = seigr.transaction.createTransactionModelList();
const minerModelList = seigr.miner.createMinerModelList();
const networkModelList = seigr.network.createNetworkModelList();

