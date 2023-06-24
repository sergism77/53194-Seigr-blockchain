'use strict';

let blockPool: any[] = [];

const createBlockPool = (): void => {
  blockPool = [];
};

const getBlockPool = (): any[] => {
  return [...blockPool];
};

const saveBlockPool = (): any[] => {
  return [...blockPool];
};

const loadBlockPool = (): any[] => {
  return [...blockPool];
};

export { createBlockPool, getBlockPool, saveBlockPool, loadBlockPool };