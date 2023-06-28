'use strict';

/**
 * SEIGToken class representing a SEIG token with basic ERC20 functionalities.
 */
class SEIG {
  totalSupply: number;
  name: string;
  symbol: string;
  decimals: number;
  owner: string;
  balanceOf: { [key: string]: number };
  allowance: { [key: string]: { [key: string]: number } };

  /**
   * Constructs a new instance of the SEIGToken class.
   * @param {string} owner - The owner address.
   */
  constructor(owner: string) {
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

  /**
   * Transfers tokens from the sender to the specified recipient.
   * @param {string} msgSender - The sender address.
   * @param {string} to - The recipient address.
   * @param {number} value - The amount of tokens to transfer.
   * @returns {boolean} - True if the transfer is successful, false otherwise.
   */
  transfer(msgSender: string, to: string, value: number): boolean {
    if (value > this.balanceOf[msgSender]) {
      throw new Error("Insufficient balance.");
    }
    this.balanceOf[msgSender] -= value;
    this.balanceOf[to] = (this.balanceOf[to] || 0) + value;
    // Emit transfer event
    // ...
    return true;
  }

  /**
   * Approves the specified spender to spend the sender's tokens.
   * @param {string} msgSender - The sender address.
   * @param {string} spender - The address of the spender.
   * @param {number} value - The amount of tokens to approve.
   * @returns {boolean} - True if the approval is successful, false otherwise.
   */
  approve(msgSender: string, spender: string, value: number): boolean {
    // Clear existing approval first
    this.allowance[msgSender] = this.allowance[msgSender] || {};
    this.allowance[msgSender][spender] = 0;
    this.allowance[msgSender][spender] = value;
    // Emit approval event
    // ...
    return true;
  }

  /**
   * Transfers tokens from the specified owner to the recipient using the spender's allowance.
   * @param {string} msgSender - The sender address.
   * @param {string} from - The address of the owner.
   * @param {string} to - The address of the recipient.
   * @param {number} value - The amount of tokens to transfer.
   * @returns {boolean} - True if the transfer is successful, false otherwise.
   */
  transferFrom(msgSender: string, from: string, to: string, value: number): boolean {
    if (value > this.allowance[from][msgSender]) {
      throw new Error("Insufficient allowance.");
    }
    this.allowance[from][msgSender] -= value;
    this.balanceOf[from] -= value;
    this.balanceOf[to] = (this.balanceOf[to] || 0) + value;
    // Emit transfer event
    // ...
    return true;
  }

  /**
   * Mints new tokens and adds them to the specified recipient's balance.
   * @param {string} msgSender - The sender address.
   * @param {string} to - The address of the recipient.
   * @param {number} value - The amount of tokens to mint.
   * @returns {boolean} - True if the minting is successful, false otherwise.
   */
  mint(msgSender: string, to: string, value: number): boolean {
    if (msgSender !== this.owner) {
      throw new Error("Only owner can mint.");
    }
    this.totalSupply += value;
    this.balanceOf[to] = (this.balanceOf[to] || 0) + value;
    // Emit mint event
    // ...
    return true;
  }

  /**
   * Burns tokens by reducing the sender's balance and the total supply.
   * @param {string} msgSender - The sender address.
   * @param {number} value - The amount of tokens to burn.
   * @returns {boolean} - True if the burning is successful, false otherwise.
   */
  burn(msgSender: string, value: number): boolean {
    if (value > this.balanceOf[msgSender]) {
      throw new Error("Insufficient balance.");
    }
    this.totalSupply -= value;
    this.balanceOf[msgSender] -= value;
    // Emit burn event
    // ...
    return true;
  }

  /**
   * Burns tokens from the specified owner by reducing their balance, allowance, and the total supply.
   * @param {string} msgSender - The sender address.
   * @param {string} from - The address of the owner.
   * @param {number} value - The amount of tokens to burn.
   * @returns {boolean} - True if the burning is successful, false otherwise.
   */
  burnFrom(msgSender: string, from: string, value: number): boolean {
    if (value > this.allowance[from][msgSender]) {
      throw new Error("Insufficient allowance.");
    }
    this.totalSupply -= value;
    this.allowance[from][msgSender] -= value;
    this.balanceOf[from] -= value;
    // Emit burn event
    // ...
    return true;
  }

  /**
   * Increases the allowance of the specified spender for the sender.
   * @param {string} msgSender - The sender address.
   * @param {string} spender - The address of the spender.
   * @param {number} addedValue - The additional amount of tokens to approve.
   * @returns {boolean} - True if the increase is successful, false otherwise.
   */
  increaseAllowance(msgSender: string, spender: string, addedValue: number): boolean {
    this.allowance[msgSender] = this.allowance[msgSender] || {};
    this.allowance[msgSender][spender] =
      (this.allowance[msgSender][spender] || 0) + addedValue;
    // Emit approval event
    // ...
    return true;
  }

  /**
   * Decreases the allowance of the specified spender for the sender.
   * @param {string} msgSender - The sender address.
   * @param {string} spender - The address of the spender.
   * @param {number} subtractedValue - The subtracted amount of tokens to approve.
   * @returns {boolean} - True if the decrease is successful, false otherwise.
   */
  decreaseAllowance(msgSender: string, spender: string, subtractedValue: number): boolean {
    if (subtractedValue > this.allowance[msgSender][spender]) {
      throw new Error("Insufficient allowance.");
    }
    this.allowance[msgSender][spender] -= subtractedValue;
    // Emit approval event
    // ...
    return true;
  }
}

/**
 * SEIGTokenMap class representing a SEIG token with basic ERC20 functionalities using a Map for storage.
 */
class SEIGMap extends SEIG {
  constructor(owner: string) {
    super(owner);
    this.balanceOf = {};
    this.balanceOf[this.owner] = this.totalSupply;
    this.allowance = {};
  }

  // Same implementation as SEIGToken, but using Map for storage

  transfer(msgSender: string, to: string, value: number): boolean {
    if (value > this.balanceOf[msgSender]) {
      throw new Error("Insufficient balance.");
    }
    this.balanceOf[msgSender] -= value;
    this.balanceOf[to] = (this.balanceOf[to] || 0) + value;
    // Emit transfer event
    // ...
    return true;
  }

  approve(msgSender: string, spender: string, value: number): boolean {
    if (value < 0) {
      throw new Error("Invalid approval amount.");
    }
    let spenderAllowance = this.allowance[msgSender];
    if (!spenderAllowance) {
      spenderAllowance = {};
      this.allowance[msgSender] = spenderAllowance;
    }
    spenderAllowance[spender] = value;
    // Emit approval event
    // ...
    return true;
  }

  transferFrom(msgSender: string, from: string, to: string, value: number): boolean {
    if (value > this.allowance[from][msgSender]) {
      throw new Error("Insufficient allowance.");
    }
    this.allowance[from][msgSender] -= value;
    this.balanceOf[from] -= value;
    this.balanceOf[to] = (this.balanceOf[to] || 0) + value;
    // Emit transfer event
    // ...
    return true;
  }

  mint(msgSender: string, to: string, value: number): boolean {
    if (msgSender !== this.owner) {
      throw new Error("Only owner can mint.");
    }
    if (value <= 0) {
      throw new Error("Invalid mint amount.");
    }
    this.totalSupply += value;
    this.balanceOf[to] = (this.balanceOf[to] || 0) + value;
    // Emit mint event
    // ...
    return true;
  }

  burn(msgSender: string, value: number): boolean {
    if (value > this.balanceOf[msgSender]) {
      throw new Error("Insufficient balance.");
    }
    this.totalSupply -= value;
    this.balanceOf[msgSender] -= value;
    // Emit burn event
    // ...
    return true;
  }

  burnFrom(msgSender: string, from: string, value: number): boolean {
    if (value > this.allowance[from][msgSender]) {
      throw new Error("Insufficient allowance.");
    }
    this.totalSupply -= value;
    this.allowance[from][msgSender] -= value;
    this.balanceOf[from] -= value;
    // Emit burn event
    // ...
    return true;
  }

  increaseAllowance(msgSender: string, spender: string, addedValue: number): boolean {
    if (addedValue <= 0) {
      throw new Error("Invalid allowance increase amount.");
    }
    this.allowance[msgSender] = this.allowance[msgSender] || {};
    this.allowance[msgSender][spender] =
      (this.allowance[msgSender][spender] || 0) + addedValue;
    // Emit approval event
    // ...
    return true;
  }

  decreaseAllowance(msgSender: string, spender: string, subtractedValue: number): boolean {
    if (subtractedValue <= 0 || subtractedValue > this.allowance[msgSender][spender]) {
      throw new Error("Invalid or insufficient allowance.");
    }
    this.allowance[msgSender][spender] -= subtractedValue;
    // Emit approval event
    // ...
    return true;
  }
}

export { SEIG, SEIGMap };
