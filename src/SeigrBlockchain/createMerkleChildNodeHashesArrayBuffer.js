const createMerkleChildNodeHashesArrayBuffer = (merkleNodeHashesArrayBuffer, merkleLeafHashesArrayBuffer) => {
    //create the merkle child node hashes array buffer
    let merkleChildNodeHashesArrayBuffer = new ArrayBuffer(0);
    //create the merkle child node hashes array from the merkle node hashes and merkle leaf hashes
    for (let i = 0; i < merkleNodeHashesArrayBuffer.length; i += 2) {
        //create the merkle child node hash buffer
        let merkleChildNodeHashBuffer = new ArrayBuffer(0);
        //create the merkle child node hash from the two merkle node hashes
        merkleChildNodeHashBuffer = concatArrayBuffers(merkleNodeHashesArrayBuffer[i], merkleNodeHashesArrayBuffer[i + 1]);
        //add the merkle child node hash to the merkle child node hashes array
        merkleChildNodeHashesArrayBuffer.push(merkleChildNodeHashBuffer);
    }
    //create the merkle child node hashes array from the merkle node hashes and merkle leaf hashes
    for (let i = 0; i < merkleLeafHashesArrayBuffer.length; i += 2) {
        //create the merkle child node hash buffer
        let merkleChildNodeHashBuffer = new ArrayBuffer(0);
        //create the merkle child node hash from the two merkle leaf hashes
        merkleChildNodeHashBuffer = concatArrayBuffers(merkleLeafHashesArrayBuffer[i], merkleLeafHashesArrayBuffer[i + 1]);
        //add the merkle child node hash to the merkle child node hashes array
        merkleChildNodeHashesArrayBuffer.push(merkleChildNodeHashBuffer);
    }
    //return the merkle child node hashes array
    return merkleChildNodeHashesArrayBuffer;
}

module.exports = createMerkleChildNodeHashesArrayBuffer;