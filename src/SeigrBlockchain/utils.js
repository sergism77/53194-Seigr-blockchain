const crypto = require('crypto');


const cryptoHash = (...inputs) => { 
    const hash = crypto.createHash('SHA3-256'); 
    hash.update(inputs.sort().join(' ')); 
    return hash.digest('hex');
};

const VerifySignature = (publicKey, data, signature) => {
    const verify = crypto.createVerify('SHA3-256');
    verify.update(data);
    return verify.verify(publicKey, signature);
};


module.exports = { cryptoHash, VerifySignature };