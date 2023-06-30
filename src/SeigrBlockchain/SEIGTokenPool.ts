interface SEIGTokenPool {
  totalSupply: number;
  name: string;
  symbol: string;
  decimals: number;
  owner: string;
  balanceOf: { [key: string]: number };
  allowance: { [key: string]: { [key: string]: number } };
  msg: { sender: string };
}

class SEIGTokenPool implements SEIGTokenPool {
  public totalSupply: number;
  public name: string;
  public symbol: string;
  public decimals: number;
  public owner: string;
  public balanceOf: { [key: string]: number };
  public allowance: { [key: string]: { [key: string]: number } };
  public msg: { sender: string };

  constructor(owner: string) {
    this.totalSupply = 0;
    this.name = "Seig";
    this.symbol = "SEIG";
    this.decimals = 18;
    this.owner = owner;
    this.balanceOf = {};
    this.balanceOf[this.owner] = this.totalSupply;
    this.allowance = {};
    this.msg = { sender: "" };
  }

  public transfer(to: string, value: number): boolean {
    if (value > this.balanceOf[this.msg.sender]) {
      throw new Error("Insufficient balance.");
    }
    this.balanceOf[this.msg.sender] -= value;
    this.balanceOf[to] = (this.balanceOf[to] || 0) + value;
    // Emit Transfer event
    // ...
    return true;
  }

  public approve(spender: string, value: number): boolean {
    // Clear existing approval first
    this.allowance[this.msg.sender] = {};
    this.allowance[this.msg.sender][spender] = value;
    // Emit Approval event
    // ...
    return true;
  }

  public transferFrom(from: string, to: string, value: number): boolean {
    if (value > this.allowance[from][this.msg.sender]) {
      throw new Error("Insufficient allowance.");
    }
    this.allowance[from][this.msg.sender] -= value;
    this.balanceOf[from] -= value;
    this.balanceOf[to] = (this.balanceOf[to] || 0) + value;
    // Emit Transfer event
    // ...
    return true;
  }

  public mint(to: string, value: number): boolean {
    if (this.msg.sender !== this.owner) {
      throw new Error("Only owner can mint.");
    }
    this.totalSupply += value;
    this.balanceOf[to] = (this.balanceOf[to] || 0) + value;
    // Emit Transfer event
    // ...
    return true;
  }
}

class SEIGTokenPoolMap implements SEIGTokenPool {
  public totalSupply: number;
  public name: string;
  public symbol: string;
  public decimals: number;
  public owner: string;
  public balanceOf: { [key: string]: number };
  public allowance: { [key: string]: { [key: string]: number } };
  public msg: { sender: string };

  constructor(owner: string) {
    this.totalSupply = 0;
    this.name = "Seig";
    this.symbol = "SEIG";
    this.decimals = 18;
    this.owner = owner;
    this.balanceOf = {};
    this.allowance = {};
    this.balanceOf[this.owner] = this.totalSupply;
    this.allowance[this.owner] = {};
    this.msg = { sender: "" };
  }

  public transfer(to: string, value: number): boolean {
    if (value > this.balanceOf[this.msg.sender]) {
      throw new Error("Insufficient balance.");
    }
    this.balanceOf[this.msg.sender] -= value;
    this.balanceOf[to] = (this.balanceOf[to] || 0) + value;
    // Emit Transfer event
    // ...
    return true;
  }

  public approve(spender: string, value: number): boolean {
    // Clear existing approval first
    if (this.allowance[this.msg.sender]) {
      this.allowance[this.msg.sender] = {};
    } else {
      this.allowance[this.msg.sender] = {};
    }
    this.allowance[this.msg.sender][spender] = value;
    // Emit Approval event
    // ...
    return true;
  }

  public transferFrom(from: string, to: string, value: number): boolean {
    if (value > this.allowance[from][this.msg.sender]) {
      throw new Error("Insufficient allowance.");
    }
    this.allowance[from][this.msg.sender] -= value;
    this.balanceOf[from] -= value;
    this.balanceOf[to] = (this.balanceOf[to] || 0) + value;
    // Emit Transfer event
    // ...
    return true;
  }

  public mint(to: string, value: number): boolean {
    if (this.msg.sender !== this.owner) {
      throw new Error("Only owner can mint.");
    }
    this.totalSupply += value;
    this.balanceOf[to] = (this.balanceOf[to] || 0) + value;
    // Emit Transfer event
    // ...
    return true;
  }
}

export { SEIGTokenPool, SEIGTokenPoolMap };
