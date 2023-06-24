'use strict';

import BlockchainNode from './blockchainNode';

class BlockchainNodeList {
    private blockchainNodeList: BlockchainNode[];

    constructor() {
        this.blockchainNodeList = [];
    }

    //adds a blockchain node to the blockchain node list
    public addBlockchainNode(blockchainNode: BlockchainNode): void {
        this.blockchainNodeList.push(blockchainNode);
    }

    //removes a blockchain node from the blockchain node list
    public removeBlockchainNode(blockchainNode: BlockchainNode): void {
        this.blockchainNodeList = this.blockchainNodeList.filter(node => node.nodeUrl !== blockchainNode.nodeUrl);
    }

    //returns the blockchain node list
    public getBlockchainNodeList(): BlockchainNode[] {
        return this.blockchainNodeList;
    }

    //returns the string representation of the blockchain node list
    public toString(): string {
        let blockchainNodeListString = "Blockchain Node List: \n";
        for (let i = 0; i < this.blockchainNodeList.length; i++) {
            blockchainNodeListString += this.blockchainNodeList[i].toString() + "\n";
        }
        return blockchainNodeListString;
    }
}

export default BlockchainNodeList;