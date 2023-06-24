'use strict';

import { SHA256 } from 'crypto-js';
import * as EC from 'elliptic';
const ec = new EC.ec('secp256k1');
import { v4 as uuidv4 } from 'uuid';

export {
  SHA256,
  ec,
  uuidv4
};