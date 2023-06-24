'use strict';

import * as crypto from 'crypto';

const cryptoHash = (...inputs: any[]): string => { 
    const hash = crypto.createHash('SHA3-256'); 
    hash.update(inputs.sort().join(' ')); 
    return hash.digest('hex');
};

const VerifySignature = (publicKey: string, data: string, signature: string): boolean => {
    const verify = crypto.createVerify('SHA3-256');
    verify.update(data);
    return verify.verify(publicKey, signature);
};

export { cryptoHash, VerifySignature };