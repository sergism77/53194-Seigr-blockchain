const { createMerkleParentNodeHash } = require('./createMerkleParentNodeHash.js');

const createMerkleParentNodeHashesBase64 = (merkleLeafHashesBase64) => {
    const merkleParentNodeHashesBase64 = [];
    for (let i = 0; i < merkleLeafHashesBase64.length; i += 2) {
        const merkleParentNodeHashBase64 = createMerkleParentNodeHash(merkleLeafHashesBase64[i], merkleLeafHashesBase64[i + 1]);
        merkleParentNodeHashesBase64.push(merkleParentNodeHashBase64);
    }
    return merkleParentNodeHashesBase64;
}

module.exports = createMerkleParentNodeHashesBase64;