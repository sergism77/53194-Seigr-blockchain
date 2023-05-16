const concatArrayBuffers = require("./concatArrayBuffers.js");

const createMerkleChildNodeHashesBuffer = (merkleNodeHashesBuffer, merkleLeafHashesBuffer) => {
    //create the merkle child node hashes buffer
    let merkleChildNodeHashesBuffer = new ArrayBuffer(0);
    //create the merkle child node hashes buffer from the merkle node hashes buffer and merkle leaf hashes buffer
    for (let i = 0; i < merkleNodeHashesBuffer.length; i += 2) {
        //create the merkle child node hash buffer
        let merkleChildNodeHashBuffer = new ArrayBuffer(0);
        //create the merkle child node hash from the two merkle node hashes
        merkleChildNodeHashBuffer = concatArrayBuffers(merkleNodeHashesBuffer[i], merkleNodeHashesBuffer[i + 1]);
        //add the merkle child node hash to the merkle child node hashes buffer
        merkleChildNodeHashesBuffer.push(merkleChildNodeHashBuffer);
    }
    //create the merkle child node hashes buffer from the merkle node hashes buffer and merkle leaf hashes buffer
    for (let i = 0; i < merkleLeafHashesBuffer.length; i += 2) {
        //create the merkle child node hash buffer
        let merkleChildNodeHashBuffer = new ArrayBuffer(0);
        //create the merkle child node hash from the two merkle leaf hashes
        merkleChildNodeHashBuffer = concatArrayBuffers(merkleLeafHashesBuffer[i], merkleLeafHashesBuffer[i + 1]);
        //add the merkle child node hash to the merkle child node hashes buffer
        merkleChildNodeHashesBuffer.push(merkleChildNodeHashBuffer);
    }
    //return the merkle child node hashes buffer
    return merkleChildNodeHashesBuffer;
}

module.exports = createMerkleChildNodeHashesBuffer;