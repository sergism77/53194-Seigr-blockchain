
const crypto = require('crypto');

const cryptoHash = (...inputs) => {
    const hash = crypto.createHash('SHAKE-256');
    
    hash.update(inputs.sort().join(' '));

    return hash.digest('hex');
};


const VerifySignature = (publicKey, data, signature) => {
    const verify = crypto.createVerify('SHAKE-256');
    verify.update(data);
    return verify.verify(publicKey, signature);
};


module.exports = { cryptoHash, VerifySignature };