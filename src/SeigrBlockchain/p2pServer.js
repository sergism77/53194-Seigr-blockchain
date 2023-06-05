const Websocket = require('ws');


const P2P_PORT =  53194;
const peers = process.env.PEERS ? process.env.PEERS.split(',') : []; //if there is no PEERS in the environment, then use an empty array

class P2pServer {
    constructor(blockchain) {
        this.blockchain = blockchain;
        this.sockets = [];
    }

    //this is the method that will start the server
    listen() {  
        const server = new Websocket.Server({ port: P2P_PORT }); //this is the server that will be listening on the P2P_PORT

        //this is the event listener that will be listening for a connection
        server.on('connection', socket => this.connectSocket(socket));

        this.connectToPeers();

        console.log(`Listening for peer-to-peer connections on: ${P2P_PORT}`);
    }

    //this is the method that will connect to peers
    connectToPeers() { 
        peers.forEach(peer => {
            //ws://localhost:53194
            const socket = new Websocket(peer);

            //this is the event listener that will be listening for a connection
            socket.on('open', () => this.connectSocket(socket));
        });
    }

    //this is the method that will connect a socket
    connectSocket(socket) {
        this.sockets.push(socket);
        console.log('Socket connected');

        this.messageHandler(socket);

        this.sendChain(socket);
    }

    //this is the method that will handle messages
    messageHandler(socket) {
        socket.on('message', message => {
            const data = JSON.parse(message);

            this.blockchain.replaceChain(data);
        });
    }

    //this is the method that will send the chain
    sendChain(socket) {
        socket.send(JSON.stringify(this.blockchain.chain));
    }

    //this is the method that will sync chains
    syncChains() {
        this.sockets.forEach(socket => this.sendChain(socket));
    }

    //start creating blocks if the node is fully synced
    mineBlocks () {
        if (blockchain.chain.length === 0) {
            console.log('blockchain is empty');
            console.log('creating genesis block');
            mineGenesisBlock({ genesisBlock });
            console.log('genesis block created');
            console.log('creating genesis transaction pool');
            mineGenesisTransactionPool({ genesisTransaction });
            console.log('genesis transaction pool created');
            console.log('creating genesis blockchain');
            mineGenesisBlockchain({ genesisBlock });
            console.log('genesis blockchain created');
            console.log('creating genesis block pool');
            mineGenesisBlockPool({ genesisBlock });
            console.log('genesis block pool created');
            console.log('creating genesis transaction pool reward timestamp');
            mineGenesisTransactionPoolRewardTimestamp({ genesisTransactionPool });
            console.log('genesis transaction pool reward timestamp created');
            console.log('creating genesis transaction pool reward input');
            mineGenesisTransactionPoolRewardInput({ genesisTransactionPool });
            console.log('genesis transaction pool reward input created');
            console.log('creating genesis transaction pool reward output');
            mineGenesisTransactionPoolRewardOutput({ genesisTransactionPool });
            console.log('genesis transaction pool reward output created');
            console.log('creating genesis transaction pool reward hash');
            mineGenesisTransactionPoolRewardHash({ genesisTransactionPool });
            console.log('genesis transaction pool reward hash created');
            console.log('creating genesis transaction pool reward signature');
            mineGenesisTransactionPoolRewardSignature({ genesisTransactionPool });
            console.log('genesis transaction pool reward signature created');
            console.log('creating genesis transaction pool reward public key');
            mineGenesisTransactionPoolRewardPublicKey({ genesisTransactionPool });
            console.log('genesis transaction pool reward public key created');
            console.log('creating genesis transaction pool reward amount');
            mineGenesisTransactionPoolRewardAmount({ genesisTransactionPool });
            console.log('genesis transaction pool reward amount created');
            console.log('creating genesis transaction pool reward address');
            mineGenesisTransactionPoolRewardAddress({ genesisTransactionPool });
            console.log('genesis transaction pool reward address created');
            console.log('creating genesis transaction pool reward');
            mineGenesisTransactionPoolReward({ genesisTransactionPool });
            console.log('genesis transaction pool reward created');
            console.log('creating genesis transaction pool reward transaction');
            mineGenesisTransactionPoolRewardTransaction({ genesisTransactionPool });
            console.log('genesis transaction pool reward transaction created');
            console.log('creating genesis transaction pool reward transaction input');
            mineGenesisTransactionPoolRewardTransactionInput({ genesisTransactionPool });
            console.log('genesis transaction pool reward transaction input created');
            console.log('creating genesis transaction pool reward transaction output');
            mineGenesisTransactionPoolRewardTransactionOutput({ genesisTransactionPool });
            console.log('genesis transaction pool reward transaction output created');
            console.log('creating genesis transaction pool reward transaction hash');
            mineGenesisTransactionPoolRewardTransactionHash({ genesisTransactionPool });
            console.log('genesis transaction pool reward transaction hash created');
            console.log('creating genesis transaction pool reward transaction signature');
            mineGenesisTransactionPoolRewardTransactionSignature({ genesisTransactionPool });
            console.log('genesis transaction pool reward transaction signature created');
            console.log('creating genesis transaction pool reward transaction public key');
            mineGenesisTransactionPoolRewardTransactionPublicKey({ genesisTransactionPool });
            console.log('genesis transaction pool reward transaction public key created');
            console.log('creating genesis transaction pool reward transaction amount');
            mineGenesisTransactionPoolRewardTransactionAmount({ genesisTransactionPool });
            console.log('genesis transaction pool reward transaction amount created');
            console.log('creating genesis transaction pool reward transaction address');
            mineGenesisTransactionPoolRewardTransactionAddress({ genesisTransactionPool });
            console.log('genesis transaction pool reward transaction address created');
            console.log('creating genesis transaction pool reward transaction');
            
            //create a new block and add it to the blockchain
            console.log('creating new block');
            createBlock({ blockPool, transactionPool, blockchain, walletPool });
            console.log('new block created');
            console.log('adding new block to blockchain');
            blockchain.addBlock({ block });
            console.log('new block added to blockchain');
            console.log('broadcasting new block to network');
            P2pServer.broadcastBlock(block);
            console.log('new block broadcasted to network');
            console.log('creating new transaction pool');
            createTransactionPool({ transactionPool });
            console.log('new transaction pool created');
            console.log('broadcasting new transaction pool to network');
            P2pServer.broadcastTransactionPool(transactionPool);
            console.log('new transaction pool broadcasted to network');
            console.log('creating new block pool');
            createBlockPool({ blockPool });
            console.log('new block pool created');
            console.log('broadcasting new block pool to network');
            P2pServer.broadcastBlockPool(blockPool);
            console.log('new block pool broadcasted to network');
            console.log('creating new transaction pool reward timestamp');
            createTransactionPoolRewardTimestamp({ transactionPool });
            console.log('new transaction pool reward timestamp created');
            console.log('broadcasting new transaction pool reward timestamp to network');
            P2pServer.broadcastTransactionPoolRewardTimestamp(transactionPool);
            console.log('new transaction pool reward timestamp broadcasted to network');
            console.log('creating new transaction pool reward input');
            createTransactionPoolRewardInput({ transactionPool });
            console.log('new transaction pool reward input created');
            console.log('broadcasting new transaction pool reward input to network');
            P2pServer.broadcastTransactionPoolRewardInput(transactionPool);
            console.log('new transaction pool reward input broadcasted to network');
            console.log('creating new transaction pool reward output');
            createTransactionPoolRewardOutput({ transactionPool });
            console.log('new transaction pool reward output created');
            console.log('broadcasting new transaction pool reward output to network');
            P2pServer.broadcastTransactionPoolRewardOutput(transactionPool);
            console.log('new transaction pool reward output broadcasted to network');
            console.log('creating new transaction pool reward hash');
            createTransactionPoolRewardHash({ transactionPool });
            console.log('new transaction pool reward hash created');
            console.log('broadcasting new transaction pool reward hash to network');
            P2pServer.broadcastTransactionPoolRewardHash(transactionPool);
            console.log('new transaction pool reward hash broadcasted to network');

            //create a new transaction pool reward
            console.log('creating new transaction pool reward');
            createTransactionPoolReward({ transactionPool });
            console.log('new transaction pool reward created');
            console.log('broadcasting new transaction pool reward to network');
            P2pServer.broadcastTransactionPoolReward(transactionPool);
            console.log('new transaction pool reward broadcasted to network');

            //create a new transaction pool reward transaction
            console.log('creating new transaction pool reward transaction');
            createTransactionPoolRewardTransaction({ transactionPool });
            console.log('new transaction pool reward transaction created');
            console.log('broadcasting new transaction pool reward transaction to network');
            P2pServer.broadcastTransactionPoolRewardTransaction(transactionPool);
            console.log('new transaction pool reward transaction broadcasted to network');

            //create a new transaction pool reward transaction input
            console.log('creating new transaction pool reward transaction input');
            createTransactionPoolRewardTransactionInput({ transactionPool });
            console.log('new transaction pool reward transaction input created');
            console.log('broadcasting new transaction pool reward transaction input to network');
            P2pServer.broadcastTransactionPoolRewardTransactionInput(transactionPool);
            console.log('new transaction pool reward transaction input broadcasted to network');

            //create a new transaction pool reward transaction output
            console.log('creating new transaction pool reward transaction output');
            createTransactionPoolRewardTransactionOutput({ transactionPool });
            console.log('new transaction pool reward transaction output created');
            console.log('broadcasting new transaction pool reward transaction output to network');
            P2pServer.broadcastTransactionPoolRewardTransactionOutput(transactionPool);
            console.log('new transaction pool reward transaction output broadcasted to network');

            //create a new transaction pool reward transaction hash
            console.log('creating new transaction pool reward transaction hash');
            createTransactionPoolRewardTransactionHash({ transactionPool });
            console.log('new transaction pool reward transaction hash created');
            console.log('broadcasting new transaction pool reward transaction hash to network');
            P2pServer.broadcastTransactionPoolRewardTransactionHash(transactionPool);
            console.log('new transaction pool reward transaction hash broadcasted to network');

            //create a new transaction pool reward transaction signature
            console.log('creating new transaction pool reward transaction signature');
            createTransactionPoolRewardTransactionSignature({ transactionPool });
            console.log('new transaction pool reward transaction signature created');
            console.log('broadcasting new transaction pool reward transaction signature to network');
            P2pServer.broadcastTransactionPoolRewardTransactionSignature(transactionPool);
            console.log('new transaction pool reward transaction signature broadcasted to network');

            //create a new transaction pool reward transaction public key
            console.log('creating new transaction pool reward transaction public key');
            createTransactionPoolRewardTransactionPublicKey({ transactionPool });
            console.log('new transaction pool reward transaction public key created');
            console.log('broadcasting new transaction pool reward transaction public key to network');
            P2pServer.broadcastTransactionPoolRewardTransactionPublicKey(transactionPool);
            console.log('new transaction pool reward transaction public key broadcasted to network');

            //create a new transaction pool reward transaction timestamp
            console.log('creating new transaction pool reward transaction timestamp');
            createTransactionPoolRewardTransactionTimestamp({ transactionPool });
            console.log('new transaction pool reward transaction timestamp created');
            console.log('broadcasting new transaction pool reward transaction timestamp to network');
            P2pServer.broadcastTransactionPoolRewardTransactionTimestamp(transactionPool);
            console.log('new transaction pool reward transaction timestamp broadcasted to network');

            //create a new transaction pool reward transaction id
            console.log('creating new transaction pool reward transaction id');
            createTransactionPoolRewardTransactionId({ transactionPool });
            console.log('new transaction pool reward transaction id created');
            console.log('broadcasting new transaction pool reward transaction id to network');
            P2pServer.broadcastTransactionPoolRewardTransactionId(transactionPool);
            console.log('new transaction pool reward transaction id broadcasted to network');

            //create a new block pool 
            console.log('creating new block pool');
            createBlockPool({ blockPool });
            console.log('new block pool created');
            console.log('broadcasting new block pool to network');
            P2pServer.broadcastBlockPool(blockPool);
            console.log('new block pool broadcasted to network');

            //create a new block pool block
            console.log('creating new block pool block');
            createBlockPoolBlock({ blockPool });
            console.log('new block pool block created');
            console.log('broadcasting new block pool block to network');
            P2pServer.broadcastBlockPoolBlock(blockPool);
            console.log('new block pool block broadcasted to network');

            //create a new block pool block header
            console.log('creating new block pool block header');
            createBlockPoolBlockHeader({ blockPool });
            console.log('new block pool block header created');
            console.log('broadcasting new block pool block header to network');
            P2pServer.broadcastBlockPoolBlockHeader(blockPool);
            console.log('new block pool block header broadcasted to network');

            //create a new block pool block header hash
            console.log('creating new block pool block header hash');
            createBlockPoolBlockHeaderHash({ blockPool });
            console.log('new block pool block header hash created');
            console.log('broadcasting new block pool block header hash to network');
            P2pServer.broadcastBlockPoolBlockHeaderHash(blockPool);
            console.log('new block pool block header hash broadcasted to network');

            //create a new block pool block header previous hash
            console.log('creating new block pool block header previous hash');
            createBlockPoolBlockHeaderPreviousHash({ blockPool });
            console.log('new block pool block header previous hash created');
            console.log('broadcasting new block pool block header previous hash to network');
            P2pServer.broadcastBlockPoolBlockHeaderPreviousHash(blockPool);
            console.log('new block pool block header previous hash broadcasted to network');


            //create a new block pool block header timestamp
            console.log('creating new block pool block header timestamp');
            createBlockPoolBlockHeaderTimestamp({ blockPool });
            console.log('new block pool block header timestamp created');
            console.log('broadcasting new block pool block header timestamp to network');
            P2pServer.broadcastBlockPoolBlockHeaderTimestamp(blockPool);
            console.log('new block pool block header timestamp broadcasted to network');

            //create a new block pool block header merkle root
            console.log('creating new block pool block header merkle root');
            createBlockPoolBlockHeaderMerkleRoot({ blockPool });
            console.log('new block pool block header merkle root created');
            console.log('broadcasting new block pool block header merkle root to network');
            P2pServer.broadcastBlockPoolBlockHeaderMerkleRoot(blockPool);
            console.log('new block pool block header merkle root broadcasted to network');

            //create a new block pool block header difficulty target
            console.log('creating new block pool block header difficulty target');
            createBlockPoolBlockHeaderDifficultyTarget({ blockPool });
            console.log('new block pool block header difficulty target created');
            console.log('broadcasting new block pool block header difficulty target to network');
            P2pServer.broadcastBlockPoolBlockHeaderDifficultyTarget(blockPool);
            console.log('new block pool block header difficulty target broadcasted to network');

            //create a new block pool block header nonce
            console.log('creating new block pool block header nonce');
            createBlockPoolBlockHeaderNonce({ blockPool });
            console.log('new block pool block header nonce created');
            console.log('broadcasting new block pool block header nonce to network');
            P2pServer.broadcastBlockPoolBlockHeaderNonce(blockPool);
            console.log('new block pool block header nonce broadcasted to network');

            //create a new block pool block body
            console.log('creating new block pool block body');
            createBlockPoolBlockBody({ blockPool });
            console.log('new block pool block body created');
            console.log('broadcasting new block pool block body to network');
            P2pServer.broadcastBlockPoolBlockBody(blockPool);
            console.log('new block pool block body broadcasted to network');

            //create a new block pool block body transaction
            console.log('creating new block pool block body transaction');
            createBlockPoolBlockBodyTransaction({ blockPool });
            console.log('new block pool block body transaction created');
            console.log('broadcasting new block pool block body transaction to network');
            P2pServer.broadcastBlockPoolBlockBodyTransaction(blockPool);
            console.log('new block pool block body transaction broadcasted to network');

            //create a new block pool block body transaction id
            console.log('creating new block pool block body transaction id');
            createBlockPoolBlockBodyTransactionId({ blockPool });
            console.log('new block pool block body transaction id created');
            console.log('broadcasting new block pool block body transaction id to network');
            P2pServer.broadcastBlockPoolBlockBodyTransactionId(blockPool);
            console.log('new block pool block body transaction id broadcasted to network');

            //create a new block pool block body transaction input
            console.log('creating new block pool block body transaction input');
            createBlockPoolBlockBodyTransactionInput({ blockPool });
            console.log('new block pool block body transaction input created');
            console.log('broadcasting new block pool block body transaction input to network');
            P2pServer.broadcastBlockPoolBlockBodyTransactionInput(blockPool);
            console.log('new block pool block body transaction input broadcasted to network');

            //create a new block pool block body transaction input id
            console.log('creating new block pool block body transaction input id');
            createBlockPoolBlockBodyTransactionInputId({ blockPool });
            console.log('new block pool block body transaction input id created');
            console.log('broadcasting new block pool block body transaction input id to network');
            P2pServer.broadcastBlockPoolBlockBodyTransactionInputId(blockPool);
            console.log('new block pool block body transaction input id broadcasted to network');

            //create a new block pool block body transaction input unlock script
            console.log('creating new block pool block body transaction input unlock script');
            createBlockPoolBlockBodyTransactionInputUnlockScript({ blockPool });
            console.log('new block pool block body transaction input unlock script created');
            console.log('broadcasting new block pool block body transaction input unlock script to network');
            P2pServer.broadcastBlockPoolBlockBodyTransactionInputUnlockScript(blockPool);
            console.log('new block pool block body transaction input unlock script broadcasted to network');

            //create a new block pool block body transaction input unlock script signature



}

class listen {
    constructor() {
        this.sockets = [];
    }

    listen() {
        const server = new Websocket.Server({ port: P2P_PORT });

        server.on('connection', socket => this.connectSocket(socket));

        console.log(`Listening for peer-to-peer connections on: ${P2P_PORT}`);
    }

    connectSocket(socket) {
        this.sockets.push(socket);
        console.log('Socket connected');

        this.messageHandler(socket);
    }

    messageHandler(socket) {
        socket.on('message', message => {
            const data = JSON.parse(message);

            console.log(data);
        });
    }
}

class connectToPeers {
    constructor() {
        this.sockets = [];
    }

    connectToPeers() {
        peers.forEach(peer => {
            //ws://localhost:53194
            const socket = new Websocket(peer);

            socket.on('open', () => this.connectSocket(socket));
        });
    }

    connectSocket(socket) {
        this.sockets.push(socket);
        console.log('Socket connected');

        this.messageHandler(socket);
    }

    messageHandler(socket) {
        socket.on('message', message => {
            const data = JSON.parse(message);

            console.log(data);
        });
    }
}




module.exports = { P2pServer, listen, connectToPeers }