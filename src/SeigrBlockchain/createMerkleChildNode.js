const createMerkleChildNode = (merkleNode, merkleLeaf) => {
    //create the merkle child node
    let merkleChildNode = {};
    //create the merkle child node from the merkle node and merkle leaf
    merkleChildNode = {
        left: merkleNode,
        right: merkleLeaf,
        hash: merkleNode.hash + merkleLeaf.hash
    };
    //return the merkle child node
    return merkleChildNode;
}

module.exports = createMerkleChildNode;