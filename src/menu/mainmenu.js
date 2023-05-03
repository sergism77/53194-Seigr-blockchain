const { app, Menu } = require('electron');

const template = [
    {
        label: 'Wallet',
        submenu: [
            {
                label: 'New Wallet',
                click: async () => {
                    console.log('New Wallet');
                }
            },
            {
                label: 'Open Wallet',
                click: async () => {
                    console.log('Open Wallet');
                }
            },
            {
                label: 'Send',
                click: async () => {
                    console.log('Send');
                }
            },
            {
                label: 'Receive',
                click: async () => {
                    console.log('Receive');
                }
            },
            {
                label: 'Transactions',
                click: async () => {
                    console.log('Transactions');
                }
            },
            {
                label: 'Address book',
                click: async () => {
                    console.log('Address book');
                }
            },
            {
                label: 'Show Seed',
                click: async () => {
                    console.log('Show Seed');
                }
            },
            {
                label: 'Show private key',
                click: async () => {
                    console.log('Show private key');
                }
            }
        ]
    },
    {
        label: 'Node',
        submenu: [
            {
                label: 'Start Node',
                click: async () => {
                    console.log('Start Node');
                }
            },
            {
                label: 'Stop Node',
                click: async () => {
                    console.log('Stop Node');
                }
            },
            {
                label: 'Show Node Info',
                click: async () => {
                    console.log('Show Node Info');
                }
            },
            {
                label: 'Node settings',
                click: async () => {
                    console.log('Node settings');
                }
            }
        ]
    },
    {
        label: 'Mine',
        submenu: [
            {
                label: 'Start Mining',
                click: async () => {
                    console.log('Start Mining');
                }
            },
            {
                label: 'Stop Mining',
                click: async () => {
                    console.log('Stop Mining');
                }
            },
            {
                label: 'Show Mining Info',
                click: async () => {
                    console.log('Show Mining Info');
                }
            },
            {
                label: 'Mining settings',
                click: async () => {
                    console.log('Mining settings');
                }
            }
        ]
    },
    {
        label: 'Explorer',
        submenu: [
            {
                label: 'Show Explorer',
                click: async () => {
                    console.log('Show Explorer');
                }
            },
            {
                label: 'Show Block',
                click: async () => {
                    console.log('Show Block');
                }
            },
            {
                label: 'Show Transaction',
                click: async () => {
                    console.log('Show Transaction');
                }
            }
        ]
    },
    {
        label: 'Network',
        submenu: [
            {
                label: 'Show Network',
                click: async () => {
                    console.log('Show Network');
                }
            },
            {
                label: 'Show Peers',
                click: async () => {
                    console.log('Show Peers');
                }
            },
            {
                label: 'Show Connections',
                click: async () => {
                    console.log('Show Connections');
                }
            }
        ]
    },
    {
        label: 'Tools',
        submenu: [
            {
                label: 'Show Console',
                click: async () => {
                    console.log('Show Console');
                }
            },
            {
                label: 'Show Logs',
                click: async () => {
                    console.log('Show Logs');
                }
            },
            {
                label: 'Show Wallet Log',
                click: async () => {
                    console.log('Show Wallet Log');
                }
            },
            {
                label: 'Show Node Log',
                click: async () => {
                    console.log('Show Node Log');
                }
            },
            {
                label: 'Show Miner Log',
                click: async () => {
                    console.log('Show Miner Log');
                }
            },
            {
                label: 'Help',
                click: async () => {
                    console.log('Help');
                }
            },
            {
                label: 'About',
                click: async () => {
                    console.log('About');
                }
            }
        ]
    }
];

function createMenu() {
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}


module.exports = { createMenu };