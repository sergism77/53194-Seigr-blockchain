
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
        const { wallets } = this.props.wallets;
        const { wallet } = this.props.wallet;
        const { walletBalance } = this.props.walletBalance;
        const { walletBalanceError } = this.props.walletBalanceError;
        const { walletBalanceSuccess } = this.props.walletBalanceSuccess;
        const { walletBalanceLoading } = this.props.walletBalanceLoading;
        const { walletBalanceLoadingError } = this.props.walletBalanceLoadingError;
        const { walletBalanceLoadingSuccess } = this.props.walletBalanceLoadingSuccess;
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h1>Wallet</h1>
                            <p>From this page you can see your wallet and its balance.</p>
                            <p>From this page you can create a new wallet and switch between all wallets available in the SeigrBlockchain/Wallets folder in your home directory.</p>
                            <p>Users will be able to retrieve their wallet by entering their private key.</p>
                            <p>Users will be able to see private key and public key of their wallet.</p>
                            <p>User will be able to rescan the blockchain to see if there are any transactions related to his wallet.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label for="wallet">Wallet</Label>
                                    <Input type="text" name="wallet" id="wallet" placeholder="Wallet" onChange={this.handleChange} />
                                </FormGroup>
                                <Button>Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form onSubmit={this.handlePrivateKeySubmit}>
                                <FormGroup>
                                    <Label for="privateKey">Private Key</Label>
                                    <Input type="text" name="privateKey" id="privateKey" placeholder="Private Key" onChange={this.handleChange} />
                                </FormGroup>
                                <Button>Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form onSubmit={this.handleWalletBalanceSubmit}>
                                <FormGroup>
                                    <Label for="walletBalance">Wallet Balance</Label>
                                    <Input type="text" name="walletBalance" id="walletBalance" placeholder="Wallet Balance" onChange={this.handleChange} />
                                </FormGroup>
                                <Button>Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button onClick={this.handleWalletBalanceRescan}>Rescan</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>{walletBalanceLoading ? 'Loading...' : ''}</p>
                            <p>{walletBalanceLoadingError ? walletBalanceLoadingError : ''}</p>
                            <p>{walletBalanceLoadingSuccess ? walletBalanceLoadingSuccess : ''}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>{walletBalanceError ? walletBalanceError : ''}</p>
                            <p>{walletBalanceSuccess ? walletBalanceSuccess : ''}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>{wallet ? wallet : ''}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>{wallets ? wallets : ''}</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

Wallet.propTypes = {
    getWallets: PropTypes.func.isRequired,
    getWallet: PropTypes.func.isRequired,
    getBalance: PropTypes.func.isRequired,
    rescanBlockchain: PropTypes.func.isRequired,
    wallets: PropTypes.object.isRequired,
    wallet: PropTypes.object.isRequired,
    walletBalance: PropTypes.object.isRequired,
    walletBalanceError: PropTypes.object.isRequired,
    walletBalanceSuccess: PropTypes.object.isRequired,
    walletBalanceLoading: PropTypes.object.isRequired,
    walletBalanceLoadingError: PropTypes.object.isRequired,
    walletBalanceLoadingSuccess: PropTypes.object.isRequired
}