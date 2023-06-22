'use strict';

const SHA256 = require('crypto-js/sha256');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  SHA256,
  ec,
  uuidv4
};
