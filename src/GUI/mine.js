//from this page, users that have a full sync node, can start/stop mining blocks for the Seigr blockchain
//users will also be able to adjust mining settings such as the number of threads to use for mining, the minimum and maximum difficulty
//users will see a real time graph of the hash rate of their mining, the total blocks mined and total rewards earned

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWallets, getWallet, createWallet, getBalance, rescanBlockchain } from '../actions/walletActions';
import { getTransactions } from '../actions/transactionActions';
import { getBlocks } from '../actions/blockActions';
import { getPeers } from '../actions/peerActions';
import { getMempool } from '../actions/mempoolActions';
import { getBlockchainInfo } from '../actions/blockchainActions';
import { getMiningInfo } from '../actions/miningActions';
import { getNetworkInfo } from '../actions/networkActions';
import { getNetTotals } from '../actions/netTotalsActions';
import { getWalletInfo } from '../actions/walletInfoActions';
import { getWalletTransactions } from '../actions/walletTransactionsActions';
import { getWalletUtxos } from '../actions/walletUtxosActions';
import { getWalletAddresses } from '../actions/walletAddressesActions';
import { getWalletBalance } from '../actions/walletBalanceActions';
import { getWalletKeys } from '../actions/walletKeysActions';
import { getWalletNewAddress } from '../actions/walletNewAddressActions';
import { getWalletChangeAddress } from '../actions/walletChangeAddressActions';
import { getWalletCreateFundedPsbt } from '../actions/walletCreateFundedPsbtActions';
import { getWalletProcessPsbt } from '../actions/walletProcessPsbtActions';
import { getWalletSignPsbt } from '../actions/walletSignPsbtActions';

class Mine extends Component {
    constructor(props){
        super(props);
        this.state = {
            wallet: '',
            walletName: '',
            walletPassword: '',
            privateKey: '',
            privateKeyPassword: '',
            walletBalance: '',
            walletBalanceError: '',
            walletBalanceSuccess: '',
            walletBalanceLoading: false,
            walletBalanceLoadingError: '',
            walletBalanceLoadingSuccess: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePrivateKeySubmit = this.handlePrivateKeySubmit.bind(this);
        this.handleWalletBalanceSubmit = this.handleWalletBalanceSubmit.bind(this);
        this.handleWalletBalanceRescan = this.handleWalletBalanceRescan.bind(this);
    }

    componentDidMount(){
        this.props.getWallets();
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.createWallet(this.state.walletName, this.state.walletPassword);
    }

    handlePrivateKeySubmit(event){
        event.preventDefault();
        this.props.getWallet(this.state.privateKey, this.state.privateKeyPassword);
    }

    handleWalletBalanceSubmit(event){
        event.preventDefault();
        this.setState({walletBalanceLoading: true});
        this.props.getWalletBalance(this.state.walletBalance);
    }

    handleWalletBalanceRescan(event){
        event.preventDefault();
        this.setState({walletBalanceLoading: true});
        this.props.rescanBlockchain(this.state.walletBalance);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Mine</h1>
                        <p>Start/Stop mining blocks for the Seigr blockchain</p>
                        <p>Adjust mining settings such as the number of threads to use for mining, the minimum and maximum difficulty</p>
                        <p>See a real time graph of the hash rate of your mining, the total blocks mined and total rewards earned</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}