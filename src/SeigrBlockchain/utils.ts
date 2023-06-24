'use strict';

import * as crypto from 'crypto';

const CryptoHash = (...inputs: any[]): string => { 
    const hash = crypto.createHash('SHA3-256'); 
    hash.update(inputs.sort().join(' ')); 
    return hash.digest('hex');
};

const VerifySignature = (publicKey: string, data: string, signature: string): boolean => {
    try {
      const verify = crypto.createVerify('SHA3-256');
      verify.update(data);
      return verify.verify(publicKey, signature);
    } catch (e) {
      console.error('VerifySignature Exception: ', e.message);
      return false;
    }
  };

export { CryptoHash, VerifySignature };