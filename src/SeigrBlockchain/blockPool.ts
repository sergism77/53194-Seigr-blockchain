'use strict';

let blockPool: any[] = [];

const CreateBlockPool = (): void => {
  blockPool = [];
};

const GetBlockPool = (): any[] => {
  return [...blockPool];
};

const SaveBlockPool = (): any[] => {
  return [...blockPool];
};

const LoadBlockPool = (): any[] => {
  return [...blockPool];
};

const UpdateBlockPool = (block: any): void => {
  blockPool.push(block);
};

export { CreateBlockPool, GetBlockPool, SaveBlockPool, LoadBlockPool, UpdateBlockPool };