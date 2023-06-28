class MerkleTree {
    transactions: any[];
    leaves: any[];
    levels: any[];
    // Merkle Tree class implementation
  
    constructor(transactions: any[]) {
      this.transactions = transactions;
      this.leaves = transactions.map((tx: any) => sha256(tx));
      this.levels = this.getLevels(this.leaves);
    }
  
    getLevels(leaves: any) {
      const levels = [leaves];
      while (levels[0].length > 1) {
        const level = [];
        for (let i = 0; i < levels[0].length; i += 2) {
          const left = levels[0][i];
          const right = i + 1 === levels[0].length ? left : levels[0][i + 1];
          level.push(sha256(left + right));
        }
        levels.unshift(level);
      }
      return levels;
    }
  
    getRoot() {
      return this.levels[0][0];
    }
  
    getPath(index: number) {
      const path = [];
      for (let i = 0; i < this.levels.length - 1; i++) {
        const level = this.levels[i];
        const isRightNode = index % 2 === 1;
        const siblingIndex = isRightNode ? index - 1 : index + 1;
        const sibling = level[siblingIndex];
        path.push({
          index: isRightNode ? index - 1 : index + 1,
          hash: sibling
        });
        index = Math.floor(index / 2);
      }
      return path;
    }
  }
  