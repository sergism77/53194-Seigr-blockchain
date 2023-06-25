'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWalletPool = exports.GetWalletPool = exports.CreateWalletPool = void 0;
let walletPool = [];
const CreateWalletPool = () => {
    walletPool = [];
};
exports.CreateWalletPool = CreateWalletPool;
const GetWalletPool = () => {
    return walletPool;
};
exports.GetWalletPool = GetWalletPool;
const UpdateWalletPool = () => {
    // Perform wallet pool update logic here
};
exports.UpdateWalletPool = UpdateWalletPool;
