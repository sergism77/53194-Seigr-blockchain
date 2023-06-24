'use strict';

import SHA256 from 'crypto-js/sha256';

class SEIGTokenMiner {
    totalSupply: number = 0;
    name: string = "Seig";
    symbol: string = "SEIG";
    decimals: number = 18;
    owner: string;
    balanceOf: {[key: string]: number} = {};
    allowance: {[key: string]: {[key: string]: number}} = {};

    constructor(owner: string) {
        this.owner = owner;
        this.balanceOf[this.owner] = this.totalSupply;
    }

    transfer(to: string, value: number): boolean {
        if (value > this.balanceOf[msg.sender]) {
            throw new Error("Insufficient balance.");
        }
        this.balanceOf[msg.sender] -= value;
        this.balanceOf[to] += value;
        return true;
    }

    approve(spender: string, value: number): boolean {
        this.allowance[msg.sender][spender] = value;
        return true;
    }

    transferFrom(from: string, to: string, value: number): boolean {
        if (value > this.allowance[from][msg.sender]) {
            throw new Error("Insufficient allowance.");
        }

        if (value > this.balanceOf[from]) {
            throw new Error("Insufficient balance of 'from' account.");
        }
        this.allowance[from][msg.sender] -= value;
        this.balanceOf[from] -= value;
        this.balanceOf[to] += value;
        return true;
    }

    mint(to: string, value: number): boolean {
        if (msg.sender !== this.owner) {
            throw new Error("Only owner can mint.");
        }
        this.totalSupply += value;
        this.balanceOf[to] += value;
        return true;
    }

    // A real method for generating tokens based on a cryptographic algorithmSHA256 and blockchain
    mine(): void {
        let hash: string;
        // call blockchain method to get hash 
        // generate tokens based on the hash code
        const hashString = this.totalSupply + this.name + this.symbol + this.decimals + this.owner;
        hash = SHA256(hashString).toString();
        if (hash.startsWith("0000")) {
            this.mint(msg.sender, 1);
        }
    }
}