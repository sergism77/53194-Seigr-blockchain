/**
 * Represents an address book with key-value pairs.
 */
class AddressBook {
  constructor() {
    this.entries = new Map();
  }

  /**
   * Adds a key-value pair to the address book.
   * @param {string} name - The key to be added.
   * @param {string} address - The value associated with the key.
   * @returns {void}
   */
  addEntry(name, address) {
    if (typeof name !== 'string' || typeof address !== 'string') {
      throw new Error('Name and address must be strings.');
    }

    this.entries.set(name, address);
  }

  /**
   * Removes an entry from the address book.
   * @param {string} name - The key of the entry to be removed.
   * @returns {boolean} - `true` if the entry was successfully removed, `false` otherwise.
   */
  removeEntry(name) {
    return this.entries.delete(name);
  }

  /**
   * Retrieves the address associated with a given name from the address book.
   * @param {string} name - The key to retrieve the address for.
   * @returns {string | undefined} - The address associated with the name, or `undefined` if not found.
   */
  getAddress(name) {
    return this.entries.get(name);
  }

  /**
   * Retrieves all entries in the address book.
   * @returns {Map} - The map containing all entries in the address book.
   */
  getAllEntries() {
    return this.entries;
  }
}

module.exports = AddressBook;
