//this is the explorer page in the GUI. Here can users check the blockchain and see the transactions. Users will be able to search for transactions by address, block, and transaction hash.
//blocks will be updated in real time. Blocks will be shown in a list, with the most recent block at the top of the list. Blocks will have a link to check the block details. When clicked, the block details will be shown.
//transactions will be shown in a list, with the most recent transaction at the top of the list. Transactions will have a link to check the transaction details. When clicked, the transaction details will be shown.

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetch from 'isomorphic-fetch';

class Explorer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        blocks: [],
        transactions: [],
        block: null,
        transaction: null,
        address: null,
        hash: null,
        blockNumber: null,
        blockHash: null,
        blockTransactions: null,
        blockTimestamp: null,
        blockMiner: null,
        blockDifficulty: null,
        blockGasLimit: null,
        blockGasUsed: null,
        blockNonce: null,
        transactionHash: null,
        transactionBlockNumber: null,
        transactionBlockHash: null,
        transactionFrom: null,
        transactionTo: null,
        transactionValue: null,
        transactionGas: null,
        transactionGasPrice: null,
        transactionInput: null,
        transactionNonce: null,
        transactionTimestamp: null,
        transactionContractAddress: null,
        transactionCumulativeGasUsed: null,
        transactionGasUsed: null,
        transactionTransactionIndex: null,
        transactionStatus: null,
        transactionGasLimit: null,
        transactionGasPrice: null,
        transactionInput: null,
        transactionNonce: null,
        transactionTimestamp: null,
        transactionContractAddress: null,
        transactionCumulativeGasUsed: null,
        transactionGasUsed: null,
        transactionTransactionIndex: null,
        transactionStatus: null,
        transactionGasLimit: null,
        transactionGasPrice: null,
        transactionInput: null,
        transactionNonce: null,
        transactionTimestamp: null,
        transactionContractAddress: null,
        transactionCumulativeGasUsed: null,
        transactionGasUsed: null,
        transactionTransactionIndex: null,
        transactionStatus: null,
        transactionGasLimit: null,
        transactionGasPrice: null,
        transactionInput: null,
        transactionNonce: null,
        transactionTimestamp: null,
        transactionContractAddress: null,
        transactionCumulativeGasUsed: null,
        transactionGasUsed: null,
        transactionTransactionIndex: null,
        transactionStatus: null,
        transactionGasLimit: null,
        transactionGasPrice: null,
        transactionInput: null,
        transactionNonce: null,
        transactionTimestamp: null,
        transactionContractAddress: null,
        transactionCumulativeGasUsed: null,
        transactionGasUsed: null,
        transactionTransactionIndex: null,
        transactionStatus: null,
        transactionGasLimit: null,
        transactionGasPrice: null,
        transactionInput: null,
        transactionNonce: null,
        transactionTimestamp: null,

        };
    }

    componentDidMount() {
        fetch('/api/blocks')
        .then(res => res.json())
        .then(blocks => this.setState({blocks}, () => console.log('Blocks fetched...', blocks)));

        fetch('/api/transactions')
        .then(res => res.json())
        .then(transactions => this.setState({transactions}, () => console.log('Transactions fetched...', transactions)));

        fetch('/api/block')
        .then(res => res.json())
        .then(block => this.setState({block}, () => console.log('Block fetched...', block)));

        fetch('/api/transaction')
        .then(res => res.json())
        .then(transaction => this.setState({transaction}, () => console.log('Transaction fetched...', transaction)));

        fetch('/api/address')
        .then(res => res.json())
        .then(address => this.setState({address}, () => console.log('Address fetched...', address)));

        fetch('/api/hash')
        .then(res => res.json())
        .then(hash => this.setState({hash}, () => console.log('Hash fetched...', hash)));

        fetch('/api/blockNumber')
        .then(res => res.json())
        .then(blockNumber => this.setState({blockNumber}, () => console.log('Block Number fetched...', blockNumber)));

        fetch('/api/blockHash')
        .then(res => res.json())
        .then(blockHash => this.setState({blockHash}, () => console.log('Block Hash fetched...', blockHash)));

        fetch('/api/blockTransactions')
        .then(res => res.json())
        .then(blockTransactions => this.setState({blockTransactions}, () => console.log('Block Transactions fetched...', blockTransactions)));

        fetch('/api/blockTimestamp')
        .then(res => res.json())
        .then(blockTimestamp => this.setState({blockTimestamp}, () => console.log('Block Timestamp fetched...', blockTimestamp)));

        fetch('/api/blockMiner')
        .then(res => res.json())
        .then(blockMiner => this.setState({blockMiner}, () => console.log('Block Miner fetched...', blockMiner)));

        fetch('/api/blockDifficulty')
        .then(res => res.json())
        .then(blockDifficulty => this.setState({blockDifficulty}, () => console.log('Block Difficulty fetched...', blockDifficulty)));

        fetch('/api/blockGasLimit')
        .then(res => res.json())
        .then(blockGasLimit => this.setState({blockGasLimit}, () => console.log('Block Gas Limit fetched...', blockGasLimit)));

        fetch('/api/blockGasUsed')
        .then(res => res.json())
        .then(blockGasUsed => this.setState({blockGasUsed}, () => console.log('Block Gas Used fetched...', blockGasUsed)));

        fetch('/api/blockNonce')
        .then(res => res.json())
        .then(blockNonce => this.setState({blockNonce}, () => console.log('Block Nonce fetched...', blockNonce)));

        fetch('/api/transactionHash')
        .then(res => res.json())
        .then(transactionHash => this.setState({transactionHash}, () => console.log('Transaction Hash fetched...', transactionHash)));

        fetch('/api/transactionBlockNumber')
        .then(res => res.json())
        .then(transactionBlockNumber => this.setState({transactionBlockNumber}, () => console.log('Transaction Block Number fetched...', transactionBlockNumber)));

        fetch('/api/transactionBlockHash')
        .then(res => res.json())
        .then(transactionBlockHash => this.setState({transactionBlockHash}, () => console.log('Transaction Block Hash fetched...', transactionBlockHash)));

        fetch('/api/transactionFrom')
        .then(res => res.json())
        .then(transactionFrom => this.setState({transactionFrom}, () => console.log('Transaction From fetched...', transactionFrom)));

        fetch('/api/transactionTo')
        .then(res => res.json())
        .then(transactionTo => this.setState({transactionTo}, () => console.log('Transaction To fetched...', transactionTo)));

        fetch('/api/transactionValue')
        .then(res => res.json())
        .then(transactionValue => this.setState({transactionValue}, () => console.log('Transaction Value fetched...', transactionValue)));

        fetch('/api/transactionGas')
        .then(res => res.json())
        .then(transactionGas => this.setState({transactionGas}, () => console.log('Transaction Gas fetched...', transactionGas)));

        fetch('/api/transactionGasPrice')
        .then(res => res.json())
        .then(transactionGasPrice => this.setState({transactionGasPrice}, () => console.log('Transaction Gas Price fetched...', transactionGasPrice)));

        fetch('/api/transactionInput')
        .then(res => res.json())
        .then(transactionInput => this.setState({transactionInput}, () => console.log('Transaction Input fetched...', transactionInput)));

        fetch('/api/transactionNonce')
        .then(res => res.json())
        .then(transactionNonce => this.setState({transactionNonce}, () => console.log('Transaction Nonce fetched...', transactionNonce)));

        fetch('/api/transactionTimestamp')
        .then(res => res.json())
        .then(transactionTimestamp => this.setState({transactionTimestamp}, () => console.log('Transaction Timestamp fetched...', transactionTimestamp)));

        fetch('/api/transactionContractAddress')
        .then(res => res.json())
        .then(transactionContractAddress => this.setState({transactionContractAddress}, () => console.log('Transaction Contract Address fetched...', transactionContractAddress)));

        fetch('/api/transactionStatus')
        .then(res => res.json())
        .then(transactionStatus => this.setState({transactionStatus}, () => console.log('Transaction Status fetched...', transactionStatus)));

        fetch('/api/addressBalance')
        .then(res => res.json())
        .then(addressBalance => this.setState({addressBalance}, () => console.log('Address Balance fetched...', addressBalance)));

        fetch('/api/addressTransactions')
        .then(res => res.json())
        .then(addressTransactions => this.setState({addressTransactions}, () => console.log('Address Transactions fetched...', addressTransactions)));

        fetch('/api/addressContract')
        .then(res => res.json())
        .then(addressContract => this.setState({addressContract}, () => console.log('Address Contract fetched...', addressContract)));

        fetch('/api/addressContractTransactions')
        .then(res => res.json())
        .then(addressContractTransactions => this.setState({addressContractTransactions}, () => console.log('Address Contract Transactions fetched...', addressContractTransactions)));

        fetch('/api/addressContractBalance')
        .then(res => res.json())
        .then(addressContractBalance => this.setState({addressContractBalance}, () => console.log('Address Contract Balance fetched...', addressContractBalance)));

        fetch('/api/addressContractToken')
        .then(res => res.json())
        .then(addressContractToken => this.setState({addressContractToken}, () => console.log('Address Contract Token fetched...', addressContractToken)));

        fetch('/api/addressContractTokenBalance')
        .then(res => res.json())
        .then(addressContractTokenBalance => this.setState({addressContractTokenBalance}, () => console.log('Address Contract Token Balance fetched...', addressContractTokenBalance)));

        fetch('/api/addressContractTokenTransactions')
        .then(res => res.json())
        .then(addressContractTokenTransactions => this.setState({addressContractTokenTransactions}, () => console.log('Address Contract Token Transactions fetched...', addressContractTokenTransactions)));

        fetch('/api/addressContractTokenHolders')
        .then(res => res.json())
        .then(addressContractTokenHolders => this.setState({addressContractTokenHolders}, () => console.log('Address Contract Token Holders fetched...', addressContractTokenHolders)));


    }

    render() {
        return (
            <div>
                <h2>Block Number: {this.state.blockNumber}</h2>
                <h2>Block Hash: {this.state.blockHash}</h2>
                <h2>Block Transactions: {this.state.blockTransactions}</h2>
                <h2>Block Timestamp: {this.state.blockTimestamp}</h2>
                <h2>Block Miner: {this.state.blockMiner}</h2>
                <h2>Block Difficulty: {this.state.blockDifficulty}</h2>
                <h2>Block Gas Limit: {this.state.blockGasLimit}</h2>
                <h2>Block Gas Used: {this.state.blockGasUsed}</h2>
                <h2>Block Nonce: {this.state.blockNonce}</h2>
                <h2>Transaction Hash: {this.state.transactionHash}</h2>
                <h2>Transaction Block Number: {this.state.transactionBlockNumber}</h2>
                <h2>Transaction Block Hash: {this.state.transactionBlockHash}</h2>
                <h2>Transaction From: {this.state.transactionFrom}</h2>
                <h2>Transaction To: {this.state.transactionTo}</h2>
                <h2>Transaction Value: {this.state.transactionValue}</h2>
                <h2>Transaction Gas: {this.state.transactionGas}</h2>
                <h2>Transaction Gas Price: {this.state.transactionGasPrice}</h2>
                <h2>Transaction Input: {this.state.transactionInput}</h2>
                <h2>Transaction Nonce: {this.state.transactionNonce}</h2>
                <h2>Transaction Timestamp: {this.state.transactionTimestamp}</h2>
                <h2>Transaction Contract Address: {this.state.transactionContractAddress}</h2>
                <h2>Transaction Status: {this.state.transactionStatus}</h2>
                <h2>Address Balance: {this.state.addressBalance}</h2>
                <h2>Address Transactions: {this.state.addressTransactions}</h2>
                <h2>Address Contract: {this.state.addressContract}</h2>
                <h2>Address Contract Transactions: {this.state.addressContractTransactions}</h2>
                <h2>Address Contract Balance: {this.state.addressContractBalance}</h2>
                <h2>Address Contract Token: {this.state.addressContractToken}</h2>
                <h2>Address Contract Token Balance: {this.state.addressContractTokenBalance}</h2>
                <h2>Address Contract Token Transactions: {this.state.addressContractTokenTransactions}</h2>
                <h2>Address Contract Token Holders: {this.state.addressContractTokenHolders}</h2>
            </div>
        );
    }
}

export default Explorer;