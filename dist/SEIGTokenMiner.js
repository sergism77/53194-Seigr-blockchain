'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sha256_1 = __importDefault(require("crypto-js/sha256"));
class SEIGTokenMiner {
    constructor(owner) {
        this.totalSupply = 0;
        this.name = "Seig";
        this.symbol = "SEIG";
        this.decimals = 18;
        this.balanceOf = {};
        this.allowance = {};
        this.owner = owner;
        this.balanceOf[this.owner] = this.totalSupply;
    }
    transfer(to, value) {
        if (value > this.balanceOf[msg.sender]) {
            throw new Error("Insufficient balance.");
        }
        this.balanceOf[msg.sender] -= value;
        this.balanceOf[to] += value;
        return true;
    }
    approve(spender, value) {
        this.allowance[msg.sender][spender] = value;
        return true;
    }
    transferFrom(from, to, value) {
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
    mint(to, value) {
        if (msg.sender !== this.owner) {
            throw new Error("Only owner can mint.");
        }
        this.totalSupply += value;
        this.balanceOf[to] += value;
        return true;
    }
    // A real method for generating tokens based on a cryptographic algorithmSHA256 and blockchain
    mine() {
        let hash;
        // call blockchain method to get hash 
        // generate tokens based on the hash code
        const hashString = this.totalSupply + this.name + this.symbol + this.decimals + this.owner;
        hash = (0, sha256_1.default)(hashString).toString();
        if (hash.startsWith("0000")) {
            this.mint(msg.sender, 1);
        }
    }
}
