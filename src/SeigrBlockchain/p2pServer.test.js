'use strict';

const P2pServer = require('./p2pServer');
const Blockchain = require('./blockchain');

class P2pServer {
    constructor({ blockchain }) {
        this.blockchain = blockchain;
    }

    listen() {
        console.log('listening...');
    }

    connectToPeers() {
        console.log('connecting...');
    }

    connectSocket() {
        console.log('socket connected');
    }

    messageHandler() {
        console.log('message received');
    }

    sendChain() {
        console.log('chain sent');
    }

    syncChains() {
        console.log('chains synced');
    }

    broadcastTransaction() {
        console.log('transaction broadcasted');
    }

    broadcastClearTransactions() {
        console.log('transactions cleared');
    }

    broadcastChain() {
        console.log('chain broadcasted');
    }

    broadcastBlock() {
        console.log('block broadcasted');
    }

    broadcastClearBlock() {
        console.log('block cleared');
    }

    broadcastTransactionPool() {
        console.log('transaction pool broadcasted');
    }

    broadcastClearTransactionPool() {
        console.log('transaction pool cleared');
    }

    broadcastTransactionPoolMap() {
        console.log('transaction pool map broadcasted');
    }

    broadcastClearTransactionPoolMap() {
        console.log('transaction pool map cleared');
    }

    broadcastTransactionPoolMapEntry() {
        console.log('transaction pool map entry broadcasted');
    }

    broadcastClearTransactionPoolMapEntry() {
        console.log('transaction pool map entry cleared');
    }

    broadcastTransactionPoolMapEntryUpdate() {
        console.log('transaction pool map entry updated');
    }

    broadcastClearTransactionPoolMapEntryUpdate() {
        console.log('transaction pool map entry update cleared');
    }

    broadcastTransactionPoolMapEntryDelete() {
        console.log('transaction pool map entry deleted');
    }

    broadcastClearTransactionPoolMapEntryDelete() {
        console.log('transaction pool map entry delete cleared');
    }

    broadcastTransactionPoolMapEntryDeleteAll() {
        console.log('transaction pool map entry delete all');
    }

    broadcastClearTransactionPoolMapEntryDeleteAll() {
        console.log('transaction pool map entry delete all cleared');
    }

    broadcastTransactionPoolMapEntryDeleteAllUpdate() {
        console.log('transaction pool map entry delete all updated');
    }

    broadcastClearTransactionPoolMapEntryDeleteAllUpdate() {
        console.log('transaction pool map entry delete all update cleared');
    } 

    describe('P2pServer', () => {
        let p2pServer, blockchain;

        beforeEach(() => {
         blockchain = new Blockchain();
            p2pServer = new P2pServer({ blockchain });
        });

    it('should have a `blockchain` property', () => {
        expect(p2pServer.blockchain).toEqual(blockchain);
    });

    describe('listen()', () => {
        it('should log a message', () => {
            expect(p2pServer.listen()).toEqual(console.log('listening...'));
        });
    });    

    describe('connectToPeers()', () => {
        it('should log a message', () => {
            expect(p2pServer.connectToPeers()).toEqual(console.log('connecting...'));
        });
    });   

    describe('connectSocket()', () => {
        it('should log a message', () => {
            expect(p2pServer.connectSocket()).toEqual(console.log('socket connected'));
        });
    });

    describe('messageHandler()', () => {
        it('should log a message', () => {
            expect(p2pServer.messageHandler()).toEqual(console.log('message received'));
        });
    });

    describe('sendChain()', () => {
        it('should log a message', () => {
            expect(p2pServer.sendChain()).toEqual(console.log('chain sent'));
        });
    });

    describe('syncChains()', () => {
        it('should log a message', () => {
            expect(p2pServer.syncChains()).toEqual(console.log('chains synced'));
        });
    });

    describe('broadcastTransaction()', () => {
        it('should log a message', () => {
            expect(p2pServer.broadcastTransaction()).toEqual(console.log('transaction broadcasted'));
        });
    });

    describe('broadcastClearTransactions()', () => {
        it('should log a message', () => {
            expect(p2pServer.broadcastClearTransactions()).toEqual(console.log('transactions cleared'));
        });
    });

    describe('broadcastChain()', () => {
        it('should log a message', () => {
            expect(p2pServer.broadcastChain()).toEqual(console.log('chain broadcasted'));
        });
    });

    describe('broadcastBlock()', () => {
        it('should log a message', () => {
            expect(p2pServer.broadcastBlock()).toEqual(console.log('block broadcasted'));
        });
    });

    describe('broadcastClearBlock()', () => {
        it('should log a message', () => {
            expect(p2pServer.broadcastClearBlock()).toEqual(console.log('block cleared'));
        });
    });

    describe('broadcastTransactionPool()', () => {
        it('should log a message', () => {
            expect(p2pServer.broadcastTransactionPool()).toEqual(console.log('transaction pool broadcasted'));
        });
    });

    describe('broadcastClearTransactionPool()', () => {
        it('should log a message', () => {
            expect(p2pServer.broadcastClearTransactionPool()).toEqual(console.log('transaction pool cleared'));
        });
    });

    describe('broadcastTransactionPoolMap()', () => {
        it('should log a message', () => {
            expect(p2pServer.broadcastTransactionPoolMap()).toEqual(console.log('transaction pool map broadcasted'));
        });
    });

    describe('broadcastClearTransactionPoolMap()', () => {
        it('should log a message', () => {
            expect(p2pServer.broadcastClearTransactionPoolMap()).toEqual(console.log('transaction pool map cleared'));
        });
    });

    describe('broadcastTransactionPoolMapEntry()', () => {
        it('should log a message', () => {
            expect(p2pServer.broadcastTransactionPoolMapEntry()).toEqual(console.log('transaction pool map entry broadcasted'));
        });
    });

    describe('broadcastClearTransactionPoolMapEntry()', () => {
        it('should log a message', () => {
            expect(p2pServer.broadcastClearTransactionPoolMapEntry()).toEqual(console.log('transaction pool map entry cleared'));
        });
    });

    describe('broadcastTransactionPoolMapEntryUpdate()', () => {
        it('should log a message', () => {
            expect(p2pServer.broadcastTransactionPoolMapEntryUpdate()).toEqual(console.log('transaction pool map entry updated'));
        });
    });

    describe('broadcastClearTransactionPoolMapEntryUpdate()', () => {
        it('should log a message', () => {
            expect(p2pServer.broadcastClearTransactionPoolMapEntryUpdate()).toEqual(console.log('transaction pool map entry update cleared'));
        });
    });

    describe('broadcastTransactionPoolMapEntryDelete()', () => {
        it('should log a message', () => {
            expect(p2pServer.broadcastTransactionPoolMapEntryDelete()).toEqual(console.log('transaction pool map entry deleted'));
        });
    });

    describe('broadcastClearTransactionPoolMapEntryDelete()', () => {
        it('should log a message', () => {
            expect(p2pServer.broadcastClearTransactionPoolMapEntryDelete()).toEqual(console.log('transaction pool map entry delete cleared'));
        });
    });

    describe('broadcastTransactionPoolMapEntryDeleteAll()', () => {
        it('should log a message', () => {
            expect(p2pServer.broadcastTransactionPoolMapEntryDeleteAll()).toEqual(console.log('transaction pool map entry delete all'));
        });
    });

    describe('broadcastClearTransactionPoolMapEntryDeleteAll()', () => {
        it('should log a message', () => {
            expect(p2pServer.broadcastClearTransactionPoolMapEntryDeleteAll()).toEqual(console.log('transaction pool map entry delete all cleared'));
        });
    });

    describe('broadcastTransactionPoolMapEntryDeleteAllUpdate()', () => {
        it('should log a message', () => {
            expect(p2pServer.broadcastTransactionPoolMapEntryDeleteAllUpdate()).toEqual(console.log('transaction pool map entry delete all updated'));
        });
    });

    describe('broadcastClearTransactionPoolMapEntryDeleteAllUpdate()', () => {
        it('should log a message', () => {
            expect(p2pServer.broadcastClearTransactionPoolMapEntryDeleteAllUpdate()).toEqual(console.log('transaction pool map entry delete all update cleared'));
        });
    });
}


module.exports = P2pServer;