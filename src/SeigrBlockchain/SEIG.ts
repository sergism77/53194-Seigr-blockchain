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
    // Input validation
    if (typeof value !== 'number' || Number.isNaN(value) || value <= 0) {
      throw new Error("Invalid value parameter. Expected a positive number.");
    }
  
    if (value > this.balanceOf[msgSender]) {
      throw new Error("Insufficient balance.");
    }
    this.balanceOf[msgSender] -= value;
    this.balanceOf[to] = (this.balanceOf[to] || 0) + value;
    // Emit transfer event
    const transferEvent = {
      from: msgSender,
      to: to,
      value: value,
    };
    console.log(`Transfer from ${transferEvent.from} to ${transferEvent.to} with value ${transferEvent.value}`);
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
    // Input validation
    if (typeof value !== 'number' || Number.isNaN(value) || value <= 0) {
      throw new Error("Invalid value parameter. Expected a positive number.");
    }
  
    // Clear existing approval first
    this.allowance[msgSender] = this.allowance[msgSender] || {};
    this.allowance[msgSender][spender] = 0;
    this.allowance[msgSender][spender] = value;
    // Emit approval event
    const approvalEvent = {
      owner: msgSender,
      spender: spender,
      value: value,
    };
    console.log(`Approval from ${approvalEvent.owner} to ${approvalEvent.spender} with value ${approvalEvent.value}`);
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
    // Input validation
    if (typeof value !== 'number' || Number.isNaN(value) || value <= 0) {
      throw new Error("Invalid value parameter. Expected a positive number.");
    }
  
    if (value > this.allowance[from][msgSender]) {
      throw new Error("Insufficient allowance.");
    }
    this.allowance[from][msgSender] -= value;
    this.balanceOf[from] -= value;
    this.balanceOf[to] = (this.balanceOf[to] || 0) + value;
    // Emit transfer event
    const transferEvent = {
      from: from,
      to: to,
      value: value,
    };
    console.log(`Transfer from ${transferEvent.from} to ${transferEvent.to} with value ${transferEvent.value}`);
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
    // Input validation
    if (typeof value !== 'number' || Number.isNaN(value) || value <= 0) {
      throw new Error("Invalid value parameter. Expected a positive number.");
    }
  
    if (msgSender !== this.owner) {
      throw new Error("Only owner can mint.");
    }
    this.totalSupply += value;
    this.balanceOf[to] = (this.balanceOf[to] || 0) + value;
    // Emit mint event
    const mintEvent = {
      to: to,
      value: value,
    };
    console.log(`Mint to ${mintEvent.to} with value ${mintEvent.value}`);
    return true;
  }

  /**
   * Burns tokens by reducing the sender's balance and the total supply.
   * @param {string} msgSender - The sender address.
   * @param {number} value - The amount of tokens to burn.
   * @returns {boolean} - True if the burning is successful, false otherwise.
   */
  burn(msgSender: string, value: number): boolean {
    // Input validation
    if (typeof value !== 'number' || Number.isNaN(value) || value <= 0) {
      throw new Error("Invalid value parameter. Expected a positive number.");
    }
  
    if (value > this.balanceOf[msgSender]) {
      throw new Error("Insufficient balance.");
    }
    this.totalSupply -= value;
    this.balanceOf[msgSender] -= value;
    // Emit burn event
    const burnEvent = {
      from: msgSender,
      value: value,
    };
    console.log(`Burn from ${burnEvent.from} with value ${burnEvent.value}`);
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
    // Input validation
    if (typeof value !== 'number' || Number.isNaN(value) || value <= 0) {
      throw new Error("Invalid value parameter. Expected a positive number.");
    }
  
    if (value > this.allowance[from][msgSender]) {
      throw new Error("Insufficient allowance.");
    }
    this.totalSupply -= value;
    this.allowance[from][msgSender] -= value;
    this.balanceOf[from] -= value;
    // Emit burn event
    const burnEvent = {
      from: from,
      value: value,
    };
    console.log(`Burn from ${burnEvent.from} with value ${burnEvent.value}`);
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
    // Input validation
    if (typeof addedValue !== 'number' || Number.isNaN(addedValue) || addedValue <= 0) {
      throw new Error("Invalid addedValue parameter. Expected a positive number.");
    }
  
    this.allowance[msgSender] = this.allowance[msgSender] || {};
    this.allowance[msgSender][spender] =
      (this.allowance[msgSender][spender] || 0) + addedValue;
    // Emit approval event
    const approvalEvent = {
      owner: msgSender,
      spender: spender,
      value: this.allowance[msgSender][spender],
    };
    console.log(`Approval from ${approvalEvent.owner} to ${approvalEvent.spender} with value ${approvalEvent.value}`);
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
    // Input validation
    if (typeof subtractedValue !== 'number' || Number.isNaN(subtractedValue) || subtractedValue <= 0) {
      throw new Error("Invalid subtractedValue parameter. Expected a positive number.");
    }
  
    if (subtractedValue > this.allowance[msgSender][spender]) {
      throw new Error("Insufficient allowance.");
    }
    this.allowance[msgSender][spender] -= subtractedValue;
    // Emit approval event
    const approvalEvent = {
      owner: msgSender,
      spender: spender,
      value: this.allowance[msgSender][spender],
    };
    console.log(`Approval from ${approvalEvent.owner} to ${approvalEvent.spender} with value ${approvalEvent.value}`);
    return true;
  }
}

/**
 * SEIGTokenMap class representing a SEIG token with basic ERC20 functionalities using a Map for storage.
 */
class SEIGMap extends SEIG {
  constructor(owner: string) {
    super(owner);
    this.balanceOf = new Map<string, number>();
    this.balanceOf.set(this.owner, this.totalSupply);
    this.allowance = new Map<string, Map<string, number>>();
  }

  // Same implementation as SEIGToken, but using Map for storage

  transfer(msgSender: string, to: string, value: number): boolean {
    // Input validation
    if (typeof value !== 'number' || Number.isNaN(value) || value <= 0) {
      throw new Error("Invalid value parameter. Expected a positive number.");
    }
  
    if (value > this.balanceOf.get(msgSender)) {
      throw new Error("Insufficient balance.");
    }
    this.balanceOf.set(msgSender, this.balanceOf.get(msgSender) - value);
    this.balanceOf.set(to, (this.balanceOf.get(to) || 0) + value);
    // Emit transfer event
    const transferEvent = {
      from: msgSender,
      to: to,
      value: value,
    };
    console.log(`Transfer from ${transferEvent.from} to ${transferEvent.to} with value ${transferEvent.value}`);
    return true;
  }

  approve(msgSender: string, spender: string, value: number): boolean {
    // Input validation
    if (typeof value !== 'number' || Number.isNaN(value) || value <= 0) {
      throw new Error("Invalid value parameter. Expected a positive number.");
    }
  
    // Clear existing approval first
    let spenderAllowance = this.allowance.get(msgSender);
    if (!spenderAllowance) {
      spenderAllowance = new Map<string, number>();
      this.allowance.set(msgSender, spenderAllowance);
    }
    spenderAllowance.set(spender, 0);
    spenderAllowance.set(spender, value);
    // Emit approval event
    const approvalEvent = {
      owner: msgSender,
      spender: spender,
      value: value,
    };
    console.log(`Approval from ${approvalEvent.owner} to ${approvalEvent.spender} with value ${approvalEvent.value}`);
    return true;
  }

  transferFrom(msgSender: string, from: string, to: string, value: number): boolean {
    // Input validation
    if (typeof value !== 'number' || Number.isNaN(value) || value <= 0) {
      throw new Error("Invalid value parameter. Expected a positive number.");
    }
  
    if (value > this.allowance.get(from).get(msgSender)) {
      throw new Error("Insufficient allowance.");
    }
    this.allowance.get(from).set(msgSender, this.allowance.get(from).get(msgSender) - value);
    this.balanceOf.set(from, this.balanceOf.get(from) - value);
    this.balanceOf.set(to, (this.balanceOf.get(to) || 0) + value);
    // Emit transfer event
    const transferEvent = {
      from: from,
      to: to,
      value: value,
    };
    console.log(`Transfer from ${transferEvent.from} to ${transferEvent.to} with value ${transferEvent.value}`);
    return true;
  }

  mint(msgSender: string, to: string, value: number): boolean {
    // Input validation
    if (typeof value !== 'number' || Number.isNaN(value) || value <= 0) {
      throw new Error("Invalid value parameter. Expected a positive number.");
    }
  
    if (msgSender !== this.owner) {
      throw new Error("Only owner can mint.");
    }
    this.totalSupply += value;
    this.balanceOf.set(to, (this.balanceOf.get(to) || 0) + value);
    // Emit mint event
    const mintEvent = {
      to: to,
      value: value,
    };
    console.log(`Mint to ${mintEvent.to} with value ${mintEvent.value}`);
    return true;
  }

  burn(msgSender: string, value: number): boolean {
    // Input validation
    if (typeof value !== 'number' || Number.isNaN(value) || value <= 0) {
      throw new Error("Invalid value parameter. Expected a positive number.");
    }
  
    if (value > this.balanceOf.get(msgSender)) {
      throw new Error("Insufficient balance.");
    }
    this.totalSupply -= value;
    this.balanceOf.set(msgSender, this.balanceOf.get(msgSender) - value);
    // Emit burn event
    const burnEvent = {
      from: msgSender,
      value: value,
    };
    console.log(`Burn from ${burnEvent.from} with value ${burnEvent.value}`);
    return true;
  }

  burnFrom(msgSender: string, from: string, value: number): boolean {
    // Input validation
    if (typeof value !== 'number' || Number.isNaN(value) || value <= 0) {
      throw new Error("Invalid value parameter. Expected a positive number.");
    }
  
    if (value > this.allowance.get(from).get(msgSender)) {
      throw new Error("Insufficient allowance.");
    }
    this.totalSupply -= value;
    this.allowance.get(from).set(msgSender, this.allowance.get(from).get(msgSender) - value);
    this.balanceOf.set(from, this.balanceOf.get(from) - value);
    // Emit burn event
    const burnEvent = {
      from: from,
      value: value,
    };
    console.log(`Burn from ${burnEvent.from} with value ${burnEvent.value}`);
    return true;
  }

  increaseAllowance(msgSender: string, spender: string, addedValue: number): boolean {
    // Input validation
    if (typeof addedValue !== 'number' || Number.isNaN(addedValue) || addedValue <= 0) {
      throw new Error("Invalid addedValue parameter. Expected a positive number.");
    }
  
    this.allowance.get(msgSender).set(spender, (this.allowance.get(msgSender).get(spender) || 0) + addedValue);
    // Emit approval event
    const approvalEvent = {
      owner: msgSender,
      spender: spender,
      value: this.allowance.get(msgSender).get(spender),
    };
    console.log(`Approval from ${approvalEvent.owner} to ${approvalEvent.spender} with value ${approvalEvent.value}`);
    return true;
  }

  decreaseAllowance(msgSender: string, spender: string, subtractedValue: number): boolean {
    // Input validation
    if (typeof subtractedValue !== 'number' || Number.isNaN(subtractedValue) || subtractedValue <= 0) {
      throw new Error("Invalid subtractedValue parameter. Expected a positive number.");
    }
  
    if (subtractedValue > this.allowance.get(msgSender).get(spender)) {
      throw new Error("Insufficient allowance.");
    }
    this.allowance.get(msgSender).set(spender, this.allowance.get(msgSender).get(spender) - subtractedValue);
    // Emit approval event
    const approvalEvent = {
      owner: msgSender,
      spender: spender,
      value: this.allowance.get(msgSender).get(spender),
    };
    console.log(`Approval from ${approvalEvent.owner} to ${approvalEvent.spender} with value ${approvalEvent.value}`);
    return true;
  }
}

export { SEIG, SEIGMap };
