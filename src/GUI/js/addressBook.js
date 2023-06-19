class AddressBook {
    constructor() {
      this.entries = {};
    }
  
    addEntry(name, address) {
      this.entries[name] = address;
    }
  
    removeEntry(name) {
      delete this.entries[name];
    }
  
    getAddress(name) {
      return this.entries[name];
    }
  
    getAllEntries() {
      return this.entries;
    }
  }
  
  module.exports = AddressBook;
  