'use strict';

const createMerkleParentNode = (merkleNodes) => {
    //create a merkle parent node
    let merkleParentNode = {};
    //if there is only one merkle node
    if (merkleNodes.length === 1) {
        //create the merkle parent node from the merkle node
        merkleParentNode = merkleNodes[0];
    }
    //if there are more than one merkle nodes
    if (merkleNodes.length > 1) {
        //create an array of merkle parent nodes
        let merkleParentNodes = [];
        //loop through the merkle nodes
        for (let i = 0; i < merkleNodes.length; i += 2) {
            //create a merkle parent node from two merkle nodes
            let merkleParentNode = createMerkleParentNodeFromTwoMerkleNodes(merkleNodes[i], merkleNodes[i + 1]);
            //add the merkle parent node to the array of merkle parent nodes
            merkleParentNodes.push(merkleParentNode);
        }
        //create a merkle parent node from the merkle parent nodes
        merkleParentNode = createMerkleParentNode(merkleParentNodes);
    }
    //return the merkle parent node
    return merkleParentNode;
}

module.exports = createMerkleParentNode;