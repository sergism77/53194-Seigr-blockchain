//this is the explorer page in the GUI. Here can users check the blockchain and see the transactions. Users will be able to search for transactions by address, block, and transaction hash.
//blocks will be updated in real time. Blocks will be shown in a list, with the most recent block at the top of the list. Blocks will have a link to check the block details. When clicked, the block details will be shown.
//transactions will be shown in a list, with the most recent transaction at the top of the list. Transactions will have a link to check the transaction details. When clicked, the transaction details will be shown.

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
    }

    render() {
        return (
        <Container>
            <Row>
            <Col sm="12">
                <h1>Explorer</h1>
                <hr />
            </Col>
            </Row>
            <Row>
            <Col sm="12">
                <Card>
                <CardBody>
                    <CardTitle>Explorer</CardTitle>
                    <CardText>Here can users check the blockchain and see the transactions. Users will be able to search for transactions by address, block, and transaction hash.</CardText>
                    <Button color="primary" tag={Link} to="/explorer">Explorer</Button>
                </CardBody>
                </Card>
            </Col>
            </Row>
        </Container>
        );
    }
}

export default Explorer;