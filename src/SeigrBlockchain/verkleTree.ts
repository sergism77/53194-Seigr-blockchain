import { SHA256 } from './blockchainHeader';

class VerkleNode {
  key: string;
  value: string;
  children: VerkleNode[];

  constructor(key: string, value: string) {
    this.key = key;
    this.value = value;
    this.children = [];
  }

  addChild(child: VerkleNode) {
    this.children.push(child);
  }

  getHash(): string {
    let childHashes = '';
    for (const child of this.children) {
      childHashes += child.getHash();
    }
    return SHA256(this.key + this.value + childHashes).toString();
  }
}

export class VerkleTree {
  root: VerkleNode;

  constructor() {
    this.root = new VerkleNode('', '');
  }

  add(key: string, value: string) {
    let currentNode = this.root;
    for (let i = 0; i < key.length; i++) {
      const char = key[i];
      let child = currentNode.children.find((c) => c.key === char);
      if (!child) {
        child = new VerkleNode(char, '');
        currentNode.addChild(child);
      }
      currentNode = child;
    }
    currentNode.value = value;
  }

  getProof(key: string): { path: { key: string; hash: string }[]; value: string } {
    let currentNode = this.root;
    const path = [];
    for (let i = 0; i < key.length; i++) {
      const char = key[i];
      const child = currentNode.children.find((c) => c.key === char);
      if (!child) {
        throw new Error('Key not found in tree');
      }
      path.push({ key: child.key, hash: child.getHash() });
      currentNode = child;
    }
    return { path, value: currentNode.value };
  }
}
