'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadBlockPool = exports.saveBlockPool = exports.getBlockPool = exports.createBlockPool = void 0;
let blockPool = [];
const createBlockPool = () => {
    blockPool = [];
};
exports.createBlockPool = createBlockPool;
const getBlockPool = () => {
    return [...blockPool];
};
exports.getBlockPool = getBlockPool;
const saveBlockPool = () => {
    return [...blockPool];
};
exports.saveBlockPool = saveBlockPool;
const loadBlockPool = () => {
    return [...blockPool];
};
exports.loadBlockPool = loadBlockPool;
