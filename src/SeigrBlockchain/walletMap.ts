'use strict';

import WalletMap from './walletMap';
import Wallet from './wallet';
import CPUWallet from './CPUWallet';
import GPUWallet from './GPUWallet';
import SeigrBlockchain from './SeigrBlockchain';
import SeigrBlockchainTransaction from './SeigrBlockchainTransaction';
import Block from './block';
import BlockHeader from './blockHeader';
import BlockBody from './blockBody';
import BlockBodyTransaction from './blockBodyTransaction';
import Blockchain from './blockchain';
import BlockchainNode from './blockchainNode';
import BlockchainNodeList from './blockchainNodeList';
import BlockchainNodeListManager from './blockchainNodeListManager';
import BlockchainNodeListManagerClient from './blockchainNodeListManagerClient';
import BlockchainNodeListManagerServer from './blockchainNodeListManagerServer';
import TransactionInput from './transactionInput';
import TransactionOutput from './transactionOutput';
import Transaction from './transaction';
import TransactionPool from './transaction';

class WalletMap {
    private _walletMap: Map<string, Wallet>;

    constructor() {
        this._walletMap = new Map();
    }

    get walletMap(): Map<string, Wallet> {
        return this._walletMap;
    }

    set walletMap(value: Map<string, Wallet>) {
        this._walletMap = value;
    }

    getWallet(address: string): Wallet | undefined {
        return this._walletMap.get(address);
    }

    createWallet(): Wallet {
        const wallet = new Wallet();
        this._walletMap.set(wallet.address, wallet);
        return wallet;
    }

    createCPUWallet(): CPUWallet {
        const wallet = new CPUWallet();
        this._walletMap.set(wallet.address, wallet);
        return wallet;
    }

    createGPUWallet(): GPUWallet {
        const wallet = new GPUWallet();
        this._walletMap.set(wallet.address, wallet);
        return wallet;
    }

    toString(): string {
        return "Wallet Map: " + this._walletMap;
    }

    print(): void {
        console.log(this.toString());
    }
}

export default WalletMap;