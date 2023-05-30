const createBlockPool = ({ blockPool }) => () => {
    blockPool = [];
    return blockPool;
}

const blockPool = ({ blockPool }) => () => {
    return blockPool;
}

const saveBlockPool = ({ blockPool }) => () => {
    return blockPool;
}

const loadBlockPool = ({ blockPool }) => () => {
    return blockPool;
}

module.exports = { createBlockPool, blockPool, saveBlockPool, loadBlockPool };