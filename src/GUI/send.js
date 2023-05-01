
import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendSeig } from '../actions/index';
import { getBalance } from '../actions/index';
import { getTransactions } from '../actions/index';
import { getSeig } from '../actions/index';
import { getSeigBalance } from '../actions/index';
import { getSeigTransactions } from '../actions/index';

class Send extends Component {
    constructor(props) {
        super(props);
        this.state = {
        modal: false,
        to: '',
        amount: '',
        fee: '',
        password: '',
        error: '',
        success: ''
        };
        this.toggle = this.toggle.bind(this);
        this.handleToChange = this.handleToChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleFeeChange = this.handleFeeChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    toggle() {
        this.setState({
        modal: !this.state.modal,
        error: '',
        success: ''
        });
    }
    
    handleToChange(event) {
        this.setState({to: event.target.value});
    }
    
    handleAmountChange(event) {
        this.setState({amount: event.target.value});
    }
    
    handleFeeChange(event) {
        this.setState({fee: event.target.value});
    }
    
    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.to === '' || this.state.amount === '' || this.state.fee === '' || this.state.password === '') {
        this.setState({error: 'Please fill out all fields'});
        } else {
        this.props.sendSeig(this.state.to, this.state.amount, this.state.fee, this.state.password, this.props.address, this.props.token)
        .then((response) => {
            if (response.error) {
            this.setState({error: response.error});
            } else {
            this.setState({success: 'Successfully sent Seig'});
            this.props.getBalance(this.props.address, this.props.token);
            this.props.getTransactions(this.props.address, this.props.token);
            this.props.getSeig(this.props.address, this.props.token);
            this.props.getSeigBalance(this.props.address, this.props.token);
            this.props.getSeigTransactions(this.props.address, this.props.token);
            }
        });
        }
    }
    
    render() {
        return (
        <div>
            <Button className="btn btn-primary" onClick={this.toggle}>Send Seig</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Send Seig</ModalHeader>
            <ModalBody>
                <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="to">To</Label>
                    <Input type="text" name="to" id="to" placeholder="Enter recipient's address" onChange={this.handleToChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="amount">Amount</Label>
                    <Input type="text" name="amount" id="amount" placeholder="Enter amount to send" onChange={this.handleAmountChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="fee">Fee</Label>
                    <Input type="text" name="fee" id="fee" placeholder="Enter fee" onChange={this.handleFeeChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="Enter password" onChange={this.handlePasswordChange} />
                </FormGroup>
                <Button>Send</Button>
                </Form>
                <p className="text-danger">{this.state.error}</p>
                <p className="text-success">{this.state.success}</p>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
            </Modal>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        address: state.address,
        token: state.token
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        sendSeig: sendSeig,
        getBalance: getBalance,
        getTransactions: getTransactions,
        getSeig: getSeig,
        getSeigBalance: getSeigBalance,
        getSeigTransactions: getSeigTransactions
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Send);