'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBlockPool = exports.LoadBlockPool = exports.SaveBlockPool = exports.GetBlockPool = exports.CreateBlockPool = void 0;
let blockPool = [];
const CreateBlockPool = () => {
    blockPool = [];
};
exports.CreateBlockPool = CreateBlockPool;
const GetBlockPool = () => {
    return [...blockPool];
};
exports.GetBlockPool = GetBlockPool;
const SaveBlockPool = () => {
    return [...blockPool];
};
exports.SaveBlockPool = SaveBlockPool;
const LoadBlockPool = () => {
    return [...blockPool];
};
exports.LoadBlockPool = LoadBlockPool;
const UpdateBlockPool = (block) => {
    blockPool.push(block);
};
exports.UpdateBlockPool = UpdateBlockPool;
