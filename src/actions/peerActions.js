
import { PEER_CONNECT, PEER_DISCONNECT } from './types';

export const peerConnect = (username, peer) => {
    return {
        type: PEER_CONNECT,
        payload: {
        username,
        peer
        }
    };
};

export const peerDisconnect = (username) => {
    return {
        type: PEER_DISCONNECT,
        payload: username
    };
};