//the minerWorker is the machine that mines the blocks for Seigr blockchain
//we will use this to mine the blocks for the Seigr blockchain from the GUI
//this miner will work on CPU, GPU and FPGA. Not ASIC
//users will be able to fine tune the miner from the mine page of the GUI
//the miner will automatically check user's system and adjust settings accordingly
//the miner will also automatically check the blockchain and adjust settings accordingly
//the miner will also automatically check the user's wallet and adjust settings accordingly
//the miner will also automatically check the user's transaction pool and adjust settings accordingly
//the miner will also automatically check the user's pubsub and adjust settings accordingly
//the settings for the miner will be saved in the SeigrBlockchain/Minerconfig.json in the user's home directory
//the miner will also automatically check the user's Minerconfig.json and adjust settings accordingly
//the miner will also automatically check the user's system and adjust settings accordingly
//we need the miner worker to create the Minerconfig.json if it doesn't exist
//we need the miner worker to read the Minerconfig.json if it exists
//we need the miner worker to update the Minerconfig.json if it exists
//should we define the miner options in this file? answer: yes
//we want the user to be able to choose between CPU, GPU and FPGA mining 
//we want the user to be able to choose between solo mining and pool mining
//we want the user to be able to choose how many threads to use for mining
//we want the user to be able to choose how many cores to use for mining
//we want the user to be able to choose the max difficulty for mining
//every time the miner mines a block, it will check the blockchain for the current difficulty
//every time the user changes the difficulty, the miner will update the Minerconfig.json
//every time the user changes the options for the miner, the miner will update the Minerconfig.json
//we want to have a button that allows the user to reset the Minerconfig.json to default settings
//we want a button that allows the user to run an automatic setup that is balanced for their system
//we want a button that allows the user to run an automatic setup that is balanced for their system and the blockchain
//the miner will automatically check the user's system and adjust settings accordingly the first time it is run
//the miner will automatically send rewards to the user's wallet when it mines a block
//the miner will automatically send 0.001% of the block reward to a safe address for the developer


const MinerWorker = require('xstate').Worker; 
const MinerOptions = require('xstate').options;
const MinerConfig = require('xstate').config;
const MinerWorkerConfig = require('xstate').machineConfig;
const MinerState = require('xstate').state;
const MinerContext = require('xstate').context;
const MinerActions = require('xstate').actions;
const MinerEvents = require('xstate').events;
const MinerTransitions = require('xstate').transitions;
const MinerGuards = require('xstate').guards;
const MinerServices = require('xstate').services;
const MinerActivities = require('xstate').activities;
const MinerDelays = require('xstate').delays;
const MinerInitialState = require('xstate').initialState;
const MinerFinalState = require('xstate').finalState;

const MinerWorker = {
    id: 'minerWorker',
    initial: 'idle',
    context: {
        chain: [],
        transactionPool: [],
        wallet: [],
        pubsub: [],
        config: []
    },
    states: {
        idle: {
            on: {
                MINE: 'mining'
            }

        },
        mining: {
            on: {
                MINE: 'mining'
            }
        }
    }
};


const MinerOptions = {
    cpu: {
        threads: 1,
        cores: 1,
        difficulty: 1,
        solo: true,
        pool: false,
        poolAddress: '0x
    },
    gpu: {
        threads: 1,
        cores: 1,
        difficulty: 1,
        solo: true,
        pool: false,
        poolAddress: '0x
    },
    fpga: {
        threads: 1,
        cores: 1,
        difficulty: 1,
        solo: true,
        pool: false,
        poolAddress: '0x
    }
};

const MinerConfig = {
    cpu: {
        threads: 1,
        cores: 1,
        difficulty: 1,
        solo: true,
        pool: false,
        poolAddress: '0x
    },

    gpu: {
        threads: 1,
        cores: 1,
        difficulty: 1,
        solo: true,
        pool: false,
        poolAddress: '0x
    },

    fpga: {
        threads: 1,
        cores: 1,
        difficulty: 1,
        solo: true,
        pool: false,
        poolAddress: '0x
    }
};


const MinerWorkerConfig = {
    id: 'minerWorker',
    initial: 'idle',
    context: {
        chain: [],
        transactionPool: [],
        wallet: [],
        pubsub: [],
        config: []
    },
    states: {
        idle: {
            on: {
                MINE: 'mining'
            }

        },
        mining: {
            on: {
                MINE: 'mining'
            }
        }
    }
};

const MinerState = {
    value: 'idle',
    context: {
        chain: [],
        transactionPool: [],
        wallet: [],
        pubsub: [],
        config: []
    }
};

const MinerContext = {
    chain: [],
    transactionPool: [],
    wallet: [],
    pubsub: [],
    config: []
};

const MinerActions = {
    mine: (context, event) => {

    }
};

const MinerEvents = {
    MINE: 'MINE'
};

const MinerTransitions = {
    idle: {
        on: {
            MINE: 'mining'
        }
    },
    mining: {
        on: {
            MINE: 'mining'
        }
    }
};

const MinerGuards = {
    mine: (context, event) => {
            
        }
};

const MinerServices = {
    mine: (context, event) => {
                
            }
};

const MinerActivities = {
    mine: (context, event) => {
                        
                }
};

const MinerDelays = {
    mine: (context, event) => {
                                
                        }
};

const MinerInitialState = {
    value: 'idle',
    context: {
        chain: [],
        transactionPool: [],
        wallet: [],
        pubsub: [],
        config: []
    }

};

const MinerFinalState = {
    value: 'idle',
    context: {
        chain: [],
        transactionPool: [],
        wallet: [],
        pubsub: [],
        config: []
    }
};

const MinerHistoryState = {
    value: 'idle',
    context: {
        chain: [],
        transactionPool: [],
        wallet: [],
        pubsub: [],
        config: []
    }
};

const MinerParallelState = {
    value: 'idle',
    context: {
        chain: [],
        transactionPool: [],
        wallet: [],
        pubsub: [],
        config: []
    }
};

const MinerStates = {
    idle: {
        on: {
            MINE: 'mining'
        }
    },
    mining: {
        on: {
            MINE: 'mining'
        }
    }
};
