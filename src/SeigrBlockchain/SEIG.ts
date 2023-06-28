interface SEIGToken {
  totalSupply: number;
  name: string;
  symbol: string;
  decimals: number;
  owner: string;
  balanceOf: Record<string, number>;
  allowance: Record<string, Record<string, number>>;
}

class SEIG implements SEIGToken {
  totalSupply: number;
  name: string;
  symbol: string;
  decimals: number;
  owner: string;
  balanceOf: Record<string, number>;
  allowance: Record<string, Record<string, number>>;

  constructor(owner: string) {
    this.totalSupply = 0;
    this.name = 'Seig';
    this.symbol = 'SEIG';
    this.decimals = 18;
    this.owner = owner;
    this.balanceOf = {};
    this.balanceOf[owner] = this.totalSupply;
    this.allowance = {};
  }

  transfer(msgSender: string, to: string, value: number): boolean {
    if (typeof value !== 'number' || Number.isNaN(value) || value <= 0) {
      throw new Error('Invalid value parameter. Expected a positive number.');
    }

    if (value > this.balanceOf[msgSender]) {
      throw new Error('Insufficient balance.');
    }
    this.balanceOf[msgSender] -= value;
    this.balanceOf[to] = (this.balanceOf[to] || 0) + value;
    const transferEvent = {
      from: msgSender,
      to: to,
      value: value,
    };
    console.log(`Transfer from ${transferEvent.from} to ${transferEvent.to} with value ${transferEvent.value}`);
    return true;
  }

  approve(msgSender: string, spender: string, value: number): boolean {
    if (typeof value !== 'number' || Number.isNaN(value) || value <= 0) {
      throw new Error('Invalid value parameter. Expected a positive number.');
    }

    this.allowance[msgSender] = this.allowance[msgSender] || {};
    this.allowance[msgSender][spender] = 0;
    this.allowance[msgSender][spender] = value;
    const approvalEvent = {
      owner: msgSender,
      spender: spender,
      value: value,
    };
    console.log(`Approval from ${approvalEvent.owner} to ${approvalEvent.spender} with value ${approvalEvent.value}`);
    return true;
  }

  transferFrom(msgSender: string, from: string, to: string, value: number): boolean {
    if (typeof value !== 'number' || Number.isNaN(value) || value <= 0) {
      throw new Error('Invalid value parameter. Expected a positive number.');
    }

    if (value > this.allowance[from][msgSender]) {
      throw new Error('Insufficient allowance.');
    }
    this.allowance[from][msgSender] -= value;
    this.balanceOf[from] -= value;
    this.balanceOf[to] = (this.balanceOf[to] || 0) + value;
    const transferEvent = {
      from: from,
      to: to,
      value: value,
    };
    console.log(`Transfer from ${transferEvent.from} to ${transferEvent.to} with value ${transferEvent.value}`);
    return true;
  }

  mint(msgSender: string, to: string, value: number): boolean {
    if (typeof value !== 'number' || Number.isNaN(value) || value <= 0) {
      throw new Error('Invalid value parameter. Expected a positive number.');
    }

    if (msgSender !== this.owner) {
      throw new Error('Only owner can mint.');
    }
    this.totalSupply += value;
    this.balanceOf[to] = (this.balanceOf[to] || 0) + value;
    const mintEvent = {
      to: to,
      value: value,
    };
    console.log(`Mint to ${mintEvent.to} with value ${mintEvent.value}`);
    return true;
  }

  burn(msgSender: string, value: number): boolean {
    if (typeof value !== 'number' || Number.isNaN(value) || value <= 0) {
      throw new Error('Invalid value parameter. Expected a positive number.');
    }

    if (value > this.balanceOf[msgSender]) {
      throw new Error('Insufficient balance.');
    }
    this.totalSupply -= value;
    this.balanceOf[msgSender] -= value;
    const burnEvent = {
      from: msgSender,
      value: value,
    };
    console.log(`Burn from ${burnEvent.from} with value ${burnEvent.value}`);
    return true;
  }

  burnFrom(msgSender: string, from: string, value: number): boolean {
    if (typeof value !== 'number' || Number.isNaN(value) || value <= 0) {
      throw new Error('Invalid value parameter. Expected a positive number.');
    }

    if (value > this.allowance[from][msgSender]) {
      throw new Error('Insufficient allowance.');
    }
    this.totalSupply -= value;
    this.allowance[from][msgSender] -= value;
    this.balanceOf[from] -= value;
    const burnEvent = {
      from: from,
      value: value,
    };
    console.log(`Burn from ${burnEvent.from} with value ${burnEvent.value}`);
    return true;
  }

  increaseAllowance(msgSender: string, spender: string, addedValue: number): boolean {
    if (typeof addedValue !== 'number' || Number.isNaN(addedValue) || addedValue <= 0) {
      throw new Error('Invalid addedValue parameter. Expected a positive number.');
    }

    this.allowance[msgSender] = this.allowance[msgSender] || {};
    this.allowance[msgSender][spender] = (this.allowance[msgSender][spender] || 0) + addedValue;
    const approvalEvent = {
      owner: msgSender,
      spender: spender,
      value: this.allowance[msgSender][spender],
    };
    console.log(`Approval from ${approvalEvent.owner} to ${approvalEvent.spender} with value ${approvalEvent.value}`);
    return true;
  }

  decreaseAllowance(msgSender: string, spender: string, subtractedValue: number): boolean {
    if (typeof subtractedValue !== 'number' || Number.isNaN(subtractedValue) || subtractedValue <= 0) {
      throw new Error('Invalid subtractedValue parameter. Expected a positive number.');
    }

    if (subtractedValue > this.allowance[msgSender][spender]) {
      throw new Error('Insufficient allowance.');
    }
    this.allowance[msgSender][spender] -= subtractedValue;
    const approvalEvent = {
      owner: msgSender,
      spender: spender,
      value: this.allowance[msgSender][spender],
    };
    console.log(`Approval from ${approvalEvent.owner} to ${approvalEvent.spender} with value ${approvalEvent.value}`);
    return true;
  }
}

class SEIGMap extends SEIG {
  constructor(owner: string) {
    super(owner);
    this.balanceOf = {};
    this.balanceOf[owner] = this.totalSupply;
    this.allowance = {};
  }

  transfer(msgSender: string, to: string, value: number): boolean {
    if (typeof value !== 'number' || Number.isNaN(value) || value <= 0) {
      throw new Error('Invalid value parameter. Expected a positive number.');
    }

    if (value > this.balanceOf[msgSender]) {
      throw new Error('Insufficient balance.');
    }
    this.balanceOf[msgSender] -= value;
    this.balanceOf[to] = (this.balanceOf[to] || 0) + value;
    const transferEvent = {
      from: msgSender,
      to: to,
      value: value,
    };
    console.log(`Transfer from ${transferEvent.from} to ${transferEvent.to} with value ${transferEvent.value}`);
    return true;
  }

  approve(msgSender: string, spender: string, value: number): boolean {
    if (typeof value !== 'number' || Number.isNaN(value) || value <= 0) {
      throw new Error('Invalid value parameter. Expected a positive number.');
    }

    let spenderAllowance = this.allowance[msgSender];
    if (!spenderAllowance) {
      spenderAllowance = {};
      this.allowance[msgSender] = spenderAllowance;
    }
    spenderAllowance[spender] = 0;
    spenderAllowance[spender] = value;
    const approvalEvent = {
      owner: msgSender,
      spender: spender,
      value: value,
    };
    console.log(`Approval from ${approvalEvent.owner} to ${approvalEvent.spender} with value ${approvalEvent.value}`);
    return true;
  }

  transferFrom(msgSender: string, from: string, to: string, value: number): boolean {
    if (typeof value !== 'number' || Number.isNaN(value) || value <= 0) {
      throw new Error('Invalid value parameter. Expected a positive number.');
    }

    if (value > this.allowance[from][msgSender]) {
      throw new Error('Insufficient allowance.');
    }
    this.allowance[from][msgSender] -= value;
    this.balanceOf[from] -= value;
    this.balanceOf[to] = (this.balanceOf[to] || 0) + value;
    const transferEvent = {
      from: from,
      to: to,
      value: value,
    };
    console.log(`Transfer from ${transferEvent.from} to ${transferEvent.to} with value ${transferEvent.value}`);
    return true;
  }

  mint(msgSender: string, to: string, value: number): boolean {
    if (typeof value !== 'number' || Number.isNaN(value) || value <= 0) {
      throw new Error('Invalid value parameter. Expected a positive number.');
    }

    if (msgSender !== this.owner) {
      throw new Error('Only owner can mint.');
    }
    this.totalSupply += value;
    this.balanceOf[to] = (this.balanceOf[to] || 0) + value;
    const mintEvent = {
      to: to,
      value: value,
    };
    console.log(`Mint to ${mintEvent.to} with value ${mintEvent.value}`);
    return true;
  }

  burn(msgSender: string, value: number): boolean {
    if (typeof value !== 'number' || Number.isNaN(value) || value <= 0) {
      throw new Error('Invalid value parameter. Expected a positive number.');
    }

    if (value > this.balanceOf[msgSender]) {
      throw new Error('Insufficient balance.');
    }
    this.totalSupply -= value;
    this.balanceOf[msgSender] -= value;
    const burnEvent = {
      from: msgSender,
      value: value,
    };
    console.log(`Burn from ${burnEvent.from} with value ${burnEvent.value}`);
    return true;
  }

  burnFrom(msgSender: string, from: string, value: number): boolean {
    if (typeof value !== 'number' || Number.isNaN(value) || value <= 0) {
      throw new Error('Invalid value parameter. Expected a positive number.');
    }

    if (value > this.allowance[from][msgSender]) {
      throw new Error('Insufficient allowance.');
    }
    this.totalSupply -= value;
    this.allowance[from][msgSender] -= value;
    this.balanceOf[from] -= value;
    const burnEvent = {
      from: from,
      value: value,
    };
    console.log(`Burn from ${burnEvent.from} with value ${burnEvent.value}`);
    return true;
  }

  increaseAllowance(msgSender: string, spender: string, addedValue: number): boolean {
    if (typeof addedValue !== 'number' || Number.isNaN(addedValue) || addedValue <= 0) {
      throw new Error('Invalid addedValue parameter. Expected a positive number.');
    }

    this.allowance[msgSender] = this.allowance[msgSender] || {};
    this.allowance[msgSender][spender] = (this.allowance[msgSender][spender] || 0) + addedValue;
    const approvalEvent = {
      owner: msgSender,
      spender: spender,
      value: this.allowance[msgSender][spender],
    };
    console.log(`Approval from ${approvalEvent.owner} to ${approvalEvent.spender} with value ${approvalEvent.value}`);
    return true;
  }

  decreaseAllowance(msgSender: string, spender: string, subtractedValue: number): boolean {
    if (typeof subtractedValue !== 'number' || Number.isNaN(subtractedValue) || subtractedValue <= 0) {
      throw new Error('Invalid subtractedValue parameter. Expected a positive number.');
    }

    if (subtractedValue > this.allowance[msgSender][spender]) {
      throw new Error('Insufficient allowance.');
    }
    this.allowance[msgSender][spender] -= subtractedValue;
    const approvalEvent = {
      owner: msgSender,
      spender: spender,
      value: this.allowance[msgSender][spender],
    };
    console.log(`Approval from ${approvalEvent.owner} to ${approvalEvent.spender} with value ${approvalEvent.value}`);
    return true;
  }
}

export { SEIG, SEIGMap };