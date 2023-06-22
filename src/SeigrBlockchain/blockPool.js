'use strict';

let blockPool = [];

const CreateBlockPool = () => {
  blockPool = [];
};

const GetBlockPool = () => {
  return [...blockPool];
};

const SaveBlockPool = () => {
  return [...blockPool];
};

const LoadBlockPool = () => {
  return [...blockPool];
};

module.exports = { CreateBlockPool, GetBlockPool, SaveBlockPool, LoadBlockPool };
