
const { createMachine, interpret } = require('xstate');

const minerWorkerMachine = createMachine({
    id: 'minerWorker',
    initial: 'idle',
    states: {
        idle: {
            on: {
                START: 'mining'
            }
        },
        mining: {
            on: {
                STOP: 'idle'
            }
        }
    }
});

const minerWorkerService = interpret(minerWorkerMachine).start();

module.exports = minerWorkerService;

