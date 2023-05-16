const { createHash } = require('crypto');
const { randomBytes } = require('crypto');
const { createWriteStream } = require('fs');
const { createReadStream } = require('fs');
const { createInterface } = require('readline');
const { createCipheriv } = require('crypto');
const { createDecipheriv } = require('crypto');
const { createECDH } = require('crypto');
const { createSign } = require('crypto');
const { createVerify } = require('crypto');
const { createPrivateKey } = require('crypto');
const { createPublicKey } = require('crypto');
const { createSecretKey } = require('crypto');
const { createTransaction } = require('./createTransaction.js');
const { createBlock } = require('./createBlock.js');
const { createGenesisBlock } = require('./createGenesisBlock.js');
const { createMerkleTree } = require('./createMerkleTree.js');
const { createMerkleRoot } = require('./createMerkleRoot.js');
const { createMerkleProof } = require('./createMerkleProof.js');
const { createMerklePath } = require('./createMerklePath.js');
const { createMerkleBranch } = require('./createMerkleBranch.js');
const { createMerkleLeaf } = require('./createMerkleLeaf.js');
const { createMerkleNode } = require('./createMerkleNode.js');
const { createMerkleParent } = require('./createMerkleParent.js');
const { createMerkleChild } = require('./createMerkleChild.js');
const { createMerkleParentNode } = require('./createMerkleParentNode.js');
const { createMerkleChildNode } = require('./createMerkleChildNode.js');
const { createMerkleParentNodeHash } = require('./createMerkleParentNodeHash.js');
const { createMerkleChildNodeHash } = require('./createMerkleChildNodeHash.js');
const { createMerkleParentNodeHashes } = require('./createMerkleParentNodeHashes.js');
const { createMerkleChildNodeHashes } = require('./createMerkleChildNodeHashes.js');
const { createMerkleParentNodeHashesArray } = require('./createMerkleParentNodeHashesArray.js');
const { createMerkleChildNodeHashesArray } = require('./createMerkleChildNodeHashesArray.js');

const { createMerkleParentNodeHashesArrayString } = require('./createMerkleParentNodeHashesArrayString.js');
const { createMerkleChildNodeHashesArrayString } = require('./createMerkleChildNodeHashesArrayString.js');

const { createMerkleParentNodeHashesString } = require('./createMerkleParentNodeHashesString.js');
const { createMerkleChildNodeHashesString } = require('./createMerkleChildNodeHashesString.js');

const { createMerkleParentNodeHashString } = require('./createMerkleParentNodeHashString.js');
const { createMerkleChildNodeHashString } = require('./createMerkleChildNodeHashString.js');

const { createMerkleParentNodeHashesArrayBuffer } = require('./createMerkleParentNodeHashesArrayBuffer.js');
const { createMerkleChildNodeHashesArrayBuffer } = require('./createMerkleChildNodeHashesArrayBuffer.js');

const { createMerkleParentNodeHashesBuffer } = require('./createMerkleParentNodeHashesBuffer.js');
const { createMerkleChildNodeHashesBuffer } = require('./createMerkleChildNodeHashesBuffer.js');

const { createMerkleParentNodeHashBuffer } = require('./createMerkleParentNodeHashBuffer.js');
const { createMerkleChildNodeHashBuffer } = require('./createMerkleChildNodeHashBuffer.js');

const { createMerkleParentNodeHashesArrayHex } = require('./createMerkleParentNodeHashesArrayHex.js');
const { createMerkleChildNodeHashesArrayHex } = require('./createMerkleChildNodeHashesArrayHex.js');

const { createMerkleParentNodeHashesHex } = require('./createMerkleParentNodeHashesHex.js');
const { createMerkleChildNodeHashesHex } = require('./createMerkleChildNodeHashesHex.js');

const { createMerkleParentNodeHashHex } = require('./createMerkleParentNodeHashHex.js');
const { createMerkleChildNodeHashHex } = require('./createMerkleChildNodeHashHex.js');

const { createMerkleParentNodeHashesArrayBase64 } = require('./createMerkleParentNodeHashesArrayBase64.js');
const { createMerkleChildNodeHashesArrayBase64 } = require('./createMerkleChildNodeHashesArrayBase64.js');

const { createMerkleParentNodeHashesBase64 } = require('./createMerkleParentNodeHashesBase64.js');
const { createMerkleChildNodeHashesBase64 } = require('./createMerkleChildNodeHashesBase64.js');

const { createMerkleParentNodeHashBase64 } = require('./createMerkleParentNodeHashBase64.js');
const { createMerkleChildNodeHashBase64 } = require('./createMerkleChildNodeHashBase64.js');

const { createMerkleParentNodeHashesArrayBinary } = require('./createMerkleParentNodeHashesArrayBinary.js');
const { createMerkleChildNodeHashesArrayBinary } = require('./createMerkleChildNodeHashesArrayBinary.js');

const { createMerkleParentNodeHashesBinary } = require('./createMerkleParentNodeHashesBinary.js');
const { createMerkleChildNodeHashesBinary } = require('./createMerkleChildNodeHashesBinary.js');

const { createMerkleParentNodeHashBinary } = require('./createMerkleParentNodeHashBinary.js');
const { createMerkleChildNodeHashBinary } = require('./createMerkleChildNodeHashBinary.js');

class createWallet {
    constructor() {
        this.wallet = {};
        this.wallet.privateKey = '';
        this.wallet.publicKey = '';
        this.wallet.address = '';
        this.wallet.wallet = '';

    }

    createGenesisWallet() {
        let wallet = {};
        wallet.privateKey = this.createPrivateKey();
        wallet.publicKey = this.createPublicKey(wallet.privateKey);
        wallet.address = this.createAddress(wallet.publicKey);
        wallet.wallet = this.createWalletFile(wallet);
        return wallet;
    }


    createWallet() {
        let wallet = {};
        wallet.privateKey = this.createPrivateKey();
        wallet.publicKey = this.createPublicKey(wallet.privateKey);
        wallet.address = this.createAddress(wallet.publicKey);
        wallet.wallet = this.createWalletFile(wallet);
        return wallet;
    }

    createPrivateKey() {
        return createPrivateKey();
    }

    createPublicKey(privateKey) {
        return createPublicKey(privateKey);
    }

    createAddress(publicKey) {
        return createAddress(publicKey);
    }

    createWalletFile(wallet) {
        return createWalletFile(wallet);
    }

    createTransaction() {
        return createTransaction();
    }

    createBlock() {
        return createBlock();
    }

    createGenesisBlock() {
        return createGenesisBlock();
    }

    createMerkleTree() { 
        return createMerkleTree();
    }

    createMerkleRoot() {
        return createMerkleRoot();
    }

    createMerkleProof() {
        return createMerkleProof();
    }

    createMerklePath() {
        return createMerklePath();
    }

    createMerkleBranch() {
        return createMerkleBranch();
    }

    createMerkleLeaf() {
        return createMerkleLeaf();
    }

    createMerkleNode() {
        return createMerkleNode();
    }

    createMerkleParent() {
        return createMerkleParent();
    }

    createMerkleChild() {
        return createMerkleChild();
    }

    createMerkleParentNode() {
        return createMerkleParentNode();
    }

    createMerkleChildNode() {
        return createMerkleChildNode();
    }

    createMerkleParentNodeHash() {
        return createMerkleParentNodeHash();
    }

    createMerkleChildNodeHash() {
        return createMerkleChildNodeHash();
    }

    createMerkleParentNodeHashes() {
        return createMerkleParentNodeHashes();
    }

    createMerkleChildNodeHashes() {
        return createMerkleChildNodeHashes();
    }

    createMerkleParentNodeHashesArray() {
        return createMerkleParentNodeHashesArray();
    }

    createMerkleChildNodeHashesArray() {
        return createMerkleChildNodeHashesArray();
    }

    createMerkleParentNodeHashesArrayString() {
        return createMerkleParentNodeHashesArrayString();
    }

    createMerkleChildNodeHashesArrayString() {
        return createMerkleChildNodeHashesArrayString();
    }

    createMerkleParentNodeHashesString() {
        return createMerkleParentNodeHashesString();
    }

    createMerkleChildNodeHashesString() {
        return createMerkleChildNodeHashesString();
    }

    createMerkleParentNodeHashString() {
        return createMerkleParentNodeHashString();
    }

    createMerkleChildNodeHashString() {
        return createMerkleChildNodeHashString();
    }

    createMerkleParentNodeHashesArrayBuffer() {
        return createMerkleParentNodeHashesArrayBuffer();
    }

    createMerkleChildNodeHashesArrayBuffer() {
        return createMerkleChildNodeHashesArrayBuffer();
    }

    createMerkleParentNodeHashesBuffer() {
        return createMerkleParentNodeHashesBuffer();
    }

    createMerkleChildNodeHashesBuffer() {
        return createMerkleChildNodeHashesBuffer();
    }

    createMerkleParentNodeHashBuffer() {
        return createMerkleParentNodeHashBuffer();
    }

    createMerkleChildNodeHashBuffer() {
        return createMerkleChildNodeHashBuffer();
    }

    createMerkleParentNodeHashesArrayHex() {
        return createMerkleParentNodeHashesArrayHex();
    }

    createMerkleChildNodeHashesArrayHex() {
        return createMerkleChildNodeHashesArrayHex();
    }

    createMerkleParentNodeHashesHex() {
        return createMerkleParentNodeHashesHex();
    }

    createMerkleChildNodeHashesHex() {
        return createMerkleChildNodeHashesHex();
    }

    createMerkleParentNodeHashHex() {
        return createMerkleParentNodeHashHex();
    }

    createMerkleChildNodeHashHex() {
        return createMerkleChildNodeHashHex();
    }

    createMerkleParentNodeHashesArrayBase64() {
        return createMerkleParentNodeHashesArrayBase64();
    }

    createMerkleChildNodeHashesArrayBase64() {
        return createMerkleChildNodeHashesArrayBase64();
    }

    createMerkleParentNodeHashesBase64() {
        return createMerkleParentNodeHashesBase64();
    }

    createMerkleChildNodeHashesBase64() {
        return createMerkleChildNodeHashesBase64();
    }

    createMerkleParentNodeHashBase64() {
        return createMerkleParentNodeHashBase64();
    }

    createMerkleChildNodeHashBase64() {
        return createMerkleChildNodeHashBase64();
    }

    createMerkleParentNodeHashesArrayBinary() {
        return createMerkleParentNodeHashesArrayBinary();
    }

    createMerkleChildNodeHashesArrayBinary() {
        return createMerkleChildNodeHashesArrayBinary();
    }

    createMerkleParentNodeHashesBinary() {
        return createMerkleParentNodeHashesBinary();
    }

    createMerkleChildNodeHashesBinary() {
        return createMerkleChildNodeHashesBinary();
    }

    createMerkleParentNodeHashBinary() {
        return createMerkleParentNodeHashBinary();
    }

    createMerkleChildNodeHashBinary() {
        return createMerkleChildNodeHashBinary();
    }

}

module.exports = createWallet;