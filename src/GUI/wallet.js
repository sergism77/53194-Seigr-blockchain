//from this page user can see his wallet and its balance
//from this page user can create a new wallet and switch between all wallets available in the SeigrBlockchain/Wallets folder in their home directory
//users will be able to retrieve their wallet by entering their private key
//users will be able to see private key and public key of their wallet
//user will be able to rescan the blockchain to see if there are any transactions related to his wallet

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

class Wallet extends Component {
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
        this.props.getWallet(this.state.wallet);
    }

    handlePrivateKeySubmit(event){
        event.preventDefault();
        this.props.getWallet(this.state.privateKey);
    }

    handleWalletBalanceSubmit(event){
        event.preventDefault();
        this.setState({walletBalanceLoading: true});
        this.props.getBalance(this.state.walletBalance);
    }

    handleWalletBalanceRescan(event){
        event.preventDefault();
        this.setState({walletBalanceLoading: true});
        this.props.rescanBlockchain(this.state.walletBalance);
    }

    render() {
        