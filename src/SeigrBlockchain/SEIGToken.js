//this is the SEIGToken.js file

const { expect } = require("chai");
const { ethers } = require("hardhat");



class SEIGToken {
    constructor() {
        this.totalSupply = 0;
        this.name = "Seig";
        this.symbol = "SEIG";
        this.decimals = 18;
        this.owner = msg.sender;
        this.balanceOf = {
            [this.owner]: this.totalSupply,
        };
        this.allowance = {};
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

    burn(value) {
        if (value > this.balanceOf[msg.sender]) {
            throw new Error("Insufficient balance.");
        }
        this.totalSupply -= value;
        this.balanceOf[msg.sender] -= value;
        return true;
    }

    burnFrom(from, value) {
        if (value > this.allowance[from][msg.sender]) {
            throw new Error("Insufficient allowance.");
        }
        this.totalSupply -= value;
        this.allowance[from][msg.sender] -= value;
        this.balanceOf[from] -= value;
        return true;
    }

    increaseAllowance(spender, addedValue) {
        this.allowance[msg.sender][spender] += addedValue;
        return true;
    }

    decreaseAllowance(spender, subtractedValue) {
        if (subtractedValue > this.allowance[msg.sender][spender]) {
            throw new Error("Insufficient allowance.");
        }
        this.allowance[msg.sender][spender] -= subtractedValue;
        return true;
    }

}

class SEIGTokenMap {
    constructor() {
        this.totalSupply = 0;
        this.name = "Seig";
        this.symbol = "SEIG";
        this.decimals = 18;
        this.owner = msg.sender;
        this.balanceOf = new Map();
        this.balanceOf.set(this.owner, this.totalSupply);
        this.allowance = new Map();
    }

    transfer(to, value) {
        if (value > this.balanceOf.get(msg.sender)) {
            throw new Error("Insufficient balance.");
        }
        this.balanceOf.set(msg.sender, this.balanceOf.get(msg.sender) - value);
        this.balanceOf.set(to, this.balanceOf.get(to) + value);
        return true;
    }

    approve(spender, value) {
        this.allowance.get(msg.sender).set(spender, value);
        return true;
    }

    transferFrom(from, to, value) {
        if (value > this.allowance.get(from).get(msg.sender)) {
            throw new Error("Insufficient allowance.");
        }
        this.allowance.get(from).set(msg.sender, this.allowance.get(from).get(msg.sender) - value);
        this.balanceOf.set(from, this.balanceOf.get(from) - value);
        this.balanceOf.set(to, this.balanceOf.get(to) + value);
        return true;
    }

    mint(to, value) {
        if (msg.sender !== this.owner) {
            throw new Error("Only owner can mint.");
        }
        this.totalSupply += value;
        this.balanceOf.set(to, this.balanceOf.get(to) + value);
        return true;
    }

    burn(value) {
        if (value > this.balanceOf.get(msg.sender)) {
            throw new Error("Insufficient balance.");
        }
        this.totalSupply -= value;
        this.balanceOf.set(msg.sender, this.balanceOf.get(msg.sender) - value);
        return true;
    }

    burnFrom(from, value) {
        if (value > this.allowance.get(from).get(msg.sender)) {
            throw new Error("Insufficient allowance.");
        }
        this.totalSupply -= value;
        this.allowance.get(from).set(msg.sender, this.allowance.get(from).get(msg.sender) - value);
        this.balanceOf.set(from, this.balanceOf.get(from) - value);
        return true;
    }

    increaseAllowance(spender, addedValue) {
        this.allowance.get(msg.sender).set(spender, this.allowance.get(msg.sender).get(spender) + addedValue);
        return true;
    }

    decreaseAllowance(spender, subtractedValue) {
        if (subtractedValue > this.allowance.get(msg.sender).get(spender)) {
            throw new Error("Insufficient allowance.");
        }
        this.allowance.get(msg.sender).set(spender, this.allowance.get(msg.sender).get(spender) - subtractedValue);
        return true;
    }

}

module.exports = { SEIGToken, SEIGTokenMap };