const SHA256 = require('crypto-js/sha256');

class SEIGTokenMiner {
    constructor(owner) {
        this.totalSupply = 0;
        this.name = "Seig";
        this.symbol = "SEIG";
        this.decimals = 18;
        this.owner = owner;
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

    mine() {
        const hash = SHA256(this.totalSupply + this.name + this.symbol + this.decimals + this.owner).toString();
        if (hash.startsWith("0000")) {
            this.mint(msg.sender, 1);
        }
    }
}


class SEIGTokenMinerMap {
    constructor(owner) {
        this.totalSupply = 0;
        this.name = "Seig";
        this.symbol = "SEIG";
        this.decimals = 18;
        this.owner = owner;
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

    mine() {
        const hash = SHA256(this.totalSupply + this.name + this.symbol + this.decimals + this.owner).toString();
        if (hash.startsWith("0000")) {
            this.mint(msg.sender, 1);
        }
    }
}

module.exports = { SEIGTokenMiner, SEIGTokenMinerMap };
