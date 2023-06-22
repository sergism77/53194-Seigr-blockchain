class AddressBook {
  constructor() {
    this.entries = new Map();
  }

  addEntry(name, address) {
    this.entries.set(name, address);
  }

  removeEntry(name) {
    this.entries.delete(name);
  }

  getAddress(name) {
    return this.entries.get(name);
  }

  getAllEntries() {
    return this.entries;
  }
}

module.exports = AddressBook;