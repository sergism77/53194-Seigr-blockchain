'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEIGTokenPoolMap = exports.SEIGTokenPool = void 0;
/**
 * SEIGTokenPool class representing a SEIG token pool with basic ERC20 functionalities.
 */
class SEIGTokenPool {
    constructor(owner) {
        this.totalSupply = 0;
        this.name = "Seig";
        this.symbol = "SEIG";
        this.decimals = 18;
        this.owner = owner;
        this.balanceOf = {};
        this.balanceOf[this.owner] = this.totalSupply;
        this.allowance = {};
    }
    /**
     * Transfers tokens from the sender to the specified recipient.
     * @param {string} to - The recipient address.
     * @param {number} value - The amount of tokens to transfer.
     * @returns {boolean} - True if the transfer is successful, false otherwise.
     */
    transfer(to, value) {
        if (value > this.balanceOf[msg.sender]) {
            throw new Error("Insufficient balance.");
        }
        this.balanceOf[msg.sender] -= value;
        this.balanceOf[to] += value;
        // Emit Transfer event
        // ...
        return true;
    }
    /**
     * Approves the specified spender to spend the sender's tokens.
     * @param {string} spender - The address of the spender.
     * @param {number} value - The amount of tokens to approve.
     * @returns {boolean} - True if the approval is successful, false otherwise.
     */
    approve(spender, value) {
        // Clear existing approval first
        this.allowance[msg.sender] = {};
        this.allowance[msg.sender][spender] = value;
        // Emit Approval event
        // ...
        return true;
    }
    /**
     * Transfers tokens from the specified owner to the recipient using the spender's allowance.
     * @param {string} from - The address of the owner.
     * @param {string} to - The address of the recipient.
     * @param {number} value - The amount of tokens to transfer.
     * @returns {boolean} - True if the transfer is successful, false otherwise.
     */
    transferFrom(from, to, value) {
        if (value > this.allowance[from][msg.sender]) {
            throw new Error("Insufficient allowance.");
        }
        this.allowance[from][msg.sender] -= value;
        this.balanceOf[from] -= value;
        this.balanceOf[to] += value;
        // Emit Transfer event
        // ...
        return true;
    }
    /**
     * Mints new tokens and adds them to the specified recipient's balance.
     * @param {string} to - The address of the recipient.
     * @param {number} value - The amount of tokens to mint.
     * @returns {boolean} - True if the minting is successful, false otherwise.
     */
    mint(to, value) {
        if (msg.sender !== this.owner) {
            throw new Error("Only owner can mint.");
        }
        this.totalSupply += value;
        this.balanceOf[to] += value;
        // Emit Transfer event
        // ...
        return true;
    }
}
exports.SEIGTokenPool = SEIGTokenPool;
/**
 * SEIGTokenPoolMap class representing a SEIG token pool with basic ERC20 functionalities using Maps for storage.
 */
class SEIGTokenPoolMap {
    constructor(owner) {
        this.totalSupply = 0;
        this.name = "Seig";
        this.symbol = "SEIG";
        this.decimals = 18;
        this.owner = owner;
        this.balanceOf = new Map();
        this.allowance = new Map();
        this.balanceOf.set(this.owner, this.totalSupply);
        this.allowance.set(this.owner, new Map());
    }
    /**
     * Transfers tokens from the sender to the specified recipient.
     * @param {string} to - The recipient address.
     * @param {number} value - The amount of tokens to transfer.
     * @returns {boolean} - True if the transfer is successful, false otherwise.
     */
    transfer(to, value) {
        if (value > this.balanceOf.get(msg.sender)) {
            throw new Error("Insufficient balance.");
        }
        this.balanceOf.set(msg.sender, this.balanceOf.get(msg.sender) - value);
        this.balanceOf.set(to, (this.balanceOf.get(to) || 0) + value);
        // Emit Transfer event
        // ...
        return true;
    }
    /**
     * Approves the specified spender to spend the sender's tokens.
     * @param {string} spender - The address of the spender.
     * @param {number} value - The amount of tokens to approve.
     * @returns {boolean} - True if the approval is successful, false otherwise.
     */
    approve(spender, value) {
        // Clear existing approval first
        if (this.allowance.has(msg.sender)) {
            this.allowance.get(msg.sender).clear();
        }
        else {
            this.allowance.set(msg.sender, new Map());
        }
        this.allowance.get(msg.sender).set(spender, value);
        // Emit Approval event
        // ...
        return true;
    }
    /**
     * Transfers tokens from the specified owner to the recipient using the spender's allowance.
     * @param {string} from - The address of the owner.
     * @param {string} to - The address of the recipient.
     * @param {number} value - The amount of tokens to transfer.
     * @returns {boolean} - True if the transfer is successful, false otherwise.
     */
    transferFrom(from, to, value) {
        if (value > this.allowance.get(from).get(msg.sender)) {
            throw new Error("Insufficient allowance.");
        }
        this.allowance.get(from).set(msg.sender, this.allowance.get(from).get(msg.sender) - value);
        this.balanceOf.set(from, this.balanceOf.get(from) - value);
        this.balanceOf.set(to, (this.balanceOf.get(to) || 0) + value);
        // Emit Transfer event
        // ...
        return true;
    }
    /**
     * Mints new tokens and adds them to the specified recipient's balance.
     * @param {string} to - The address of the recipient.
     * @param {number} value - The amount of tokens to mint.
     * @returns {boolean} - True if the minting is successful, false otherwise.
     */
    mint(to, value) {
        if (msg.sender !== this.owner) {
            throw new Error("Only owner can mint.");
        }
        this.totalSupply += value;
        this.balanceOf.set(to, (this.balanceOf.get(to) || 0) + value);
        // Emit Transfer event
        // ...
        return true;
    }
}
exports.SEIGTokenPoolMap = SEIGTokenPoolMap;
