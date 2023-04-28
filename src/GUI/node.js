//this is the page that will be displayed when the user clicks on the node button
//from this page the user can start their node and connect to the seigr network
//the user can also view the current status of their node
//the user can also view the current status of the network
//the user can also view the current status of the blockchain
//the user will be able to choose between running a full node or a light node
//the user will be able to manage the max incoming and outgoing connections
//the network will always use the port 53194
//user will be able to view how many peers are connected to their node (but not who they are)
//user will be able to view how many peers are connected to the network (but not who they are)
//users will be able to start and/or stop their node
//we are using socket.io to connect to the network

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Socket } from 'socket.io-client';
import { getPeers } from '../../actions/peerActions';
import { addPeer } from '../../actions/peerActions';
import { removePeer } from '../../actions/peerActions';
import { getPeerCount } from '../../actions/peerActions';
import { getPeerList } from '../../actions/peerActions';
import { getPeerListCount } from '../../actions/peerActions';
import { getPeerInfo } from '../../actions/peerActions';
import { getPeerInfoCount } from '../../actions/peerActions';
import { getPeerInfoList } from '../../actions/peerActions';
import { getPeerInfoListCount } from '../../actions/peerActions';
import { getPeerInfoListConnected } from '../../actions/peerActions';
import { getPeerInfoListConnectedCount } from '../../actions/peerActions';
import { getPeerInfoListDisconnected } from '../../actions/peerActions';
import { getPeerInfoListDisconnectedCount } from '../../actions/peerActions';
import { getPeerInfoListSameBlockHeight } from '../../actions/peerActions';
import { getPeerInfoListSameBlockHeightCount } from '../../actions/peerActions';
import { getPeerInfoListSameBlockHash } from '../../actions/peerActions';
import { getPeerInfoListSameBlockHashCount } from '../../actions/peerActions';
import { getPeerInfoListSameChainId } from '../../actions/peerActions';
import { getPeerInfoListSameChainIdCount } from '../../actions/peerActions';
import { getPeerInfoListSameMerkleRoot } from '../../actions/peerActions';
import { getPeerInfoListSameMerkleRootCount } from '../../actions/peerActions';
import { getPeerInfoListSamePreviousBlockHash } from '../../actions/peerActions';
import { getPeerInfoListSamePreviousBlockHashCount } from '../../actions/peerActions';
import { getPeerInfoListSameTimestamp } from '../../actions/peerActions';
import { getPeerInfoListSameTimestampCount } from '../../actions/peerActions';
import { getPeerInfoListSameVersion } from '../../actions/peerActions';
import { getPeerInfoListSameVersionCount } from '../../actions/peerActions';
import { getPeerInfoListSameDifficulty } from '../../actions/peerActions';
import { getPeerInfoListSameDifficultyCount } from '../../actions/peerActions';
import { getPeerInfoListSameNonce } from '../../actions/peerActions';
import { getPeerInfoListSameNonceCount } from '../../actions/peerActions';
import { getPeerInfoListSameTransactionCount } from '../../actions/peerActions';
import { getPeerInfoListSameTransactionCountCount } from '../../actions/peerActions';
import { getPeerInfoListSameTransactionHash } from '../../actions/peerActions';
import { getPeerInfoListSameTransactionHashCount } from '../../actions/peerActions';
import { getPeerInfoListSameTransactionMerkleRoot } from '../../actions/peerActions';
import { getPeerInfoListSameTransactionMerkleRootCount } from '../../actions/peerActions';
import { getPeerInfoListSameTransactionVersion } from '../../actions/peerActions';
import { getPeerInfoListSameTransactionVersionCount } from '../../actions/peerActions';
import { getPeerInfoListSameTransactionLockTime } from '../../actions/peerActions';
import { getPeerInfoListSameTransactionLockTimeCount } from '../../actions/peerActions';
import { getPeerInfoListSameTransactionInputCount } from '../../actions/peerActions';
import { getPeerInfoListSameTransactionInputCountCount } from '../../actions/peerActions';
import { getPeerInfoListSameTransactionInputTransactionHash } from '../../actions/peerActions';
import { getPeerInfoListSameTransactionInputTransactionHashCount } from '../../actions/peerActions';
import { startNode, stopNode, getNodeStatus, getNetworkStatus, getBlockchainStatus } from '../../actions/nodeActions';
import { getWalletStatus } from '../../actions/walletActions';
import { getMasternodeStatus } from '../../actions/masternodeActions';
import { getMasternodeList } from '../../actions/masternodeActions';
import { getMasternodeCount } from '../../actions/masternodeActions';
import { getMasternodeWinner } from '../../actions/masternodeActions';
import { getMasternodeWinnerCount } from '../../actions/masternodeActions';
import { getMasternodeWinnerList } from '../../actions/masternodeActions';
import { getMasternodeWinnerListCount } from '../../actions/masternodeActions';

class Node extends Component {
    constructor(props) {
        super(props);
        this.state = {
        nodeStatus: '',
        networkStatus: '',
        blockchainStatus: '',
        walletStatus: '',
        masternodeStatus: '',
        masternodeList: '',
        masternodeCount: '',
        masternodeWinner: '',
        masternodeWinnerCount: '',
        masternodeWinnerList: '',
        masternodeWinnerListCount: '',
        maxIncomingConnections: '',
        maxOutgoingConnections: '',
        nodeType: '',
        nodeTypeFull: '',
        nodeTypeLight: '',
        nodeTypeFullChecked: false,
        nodeTypeLightChecked: false,
        nodeTypeFullDisabled: false,
        nodeTypeLightDisabled: false,
        nodeTypeFullCheckedDisabled: false,
        nodeTypeLightCheckedDisabled: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onStartNode = this.onStartNode.bind(this);
        this.onStopNode = this.onStopNode.bind(this);
        this.onGetNodeStatus = this.onGetNodeStatus.bind(this);
        this.onGetNetworkStatus = this.onGetNetworkStatus.bind(this);
        this.onGetBlockchainStatus = this.onGetBlockchainStatus.bind(this);
        this.onGetWalletStatus = this.onGetWalletStatus.bind(this);
        this.onGetMasternodeStatus = this.onGetMasternodeStatus.bind(this);
        this.onGetMasternodeList = this.onGetMasternodeList.bind(this);
        this.onGetMasternodeCount = this.onGetMasternodeCount.bind(this);
        this.onGetMasternodeWinner = this.onGetMasternodeWinner.bind(this);
        this.onGetMasternodeWinnerCount = this.onGetMasternodeWinnerCount.bind(this);
        this.onGetMasternodeWinnerList = this.onGetMasternodeWinnerList.bind(this);
        this.onGetMasternodeWinnerListCount = this.onGetMasternodeWinnerListCount.bind(this);
    }

    componentDidMount() {
        this.props.getNodeStatus();
        this.props.getNetworkStatus();
        this.props.getBlockchainStatus();
        this.props.getWalletStatus();
        this.props.getMasternodeStatus();
        this.props.getMasternodeList();
        this.props.getMasternodeCount();
        this.props.getMasternodeWinner();
        this.props.getMasternodeWinnerCount();
        this.props.getMasternodeWinnerList();
        this.props.getMasternodeWinnerListCount();

        this.setState({
        nodeStatus: this.props.node.nodeStatus,
        networkStatus: this.props.node.networkStatus,
        blockchainStatus: this.props.node.blockchainStatus,
        walletStatus: this.props.wallet.walletStatus,
        masternodeStatus: this.props.masternode.masternodeStatus,
        masternodeList: this.props.masternode.masternodeList,
        masternodeCount: this.props.masternode.masternodeCount,
        masternodeWinner: this.props.masternode.masternodeWinner,
        masternodeWinnerCount: this.props.masternode.masternodeWinnerCount,
        masternodeWinnerList: this.props.masternode.masternodeWinnerList,
        masternodeWinnerListCount: this.props.masternode.masternodeWinnerListCount
        });

        if (this.props.node.nodeStatus === 'running') {
        this.setState({
            nodeTypeFullDisabled: true,
            nodeTypeLightDisabled: true,
            nodeTypeFullCheckedDisabled: true,
            nodeTypeLightCheckedDisabled: true
        });
        } else {
        this.setState({
            nodeTypeFullDisabled: false,
            nodeTypeLightDisabled: false,
            nodeTypeFullCheckedDisabled: false,
            nodeTypeLightCheckedDisabled: false
        });
        }

        if (this.props.node.nodeType === 'full') {
        this.setState({
            nodeTypeFullChecked: true,
            nodeTypeLightChecked: false
        });
        }

        if (this.props.node.nodeType === 'light') {
        this.setState({
            nodeTypeFullChecked: false,
            nodeTypeLightChecked: true
        });
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
        nodeStatus: nextProps.node.nodeStatus,
        networkStatus: nextProps.node.networkStatus,
        blockchainStatus: nextProps.node.blockchainStatus,
        walletStatus: nextProps.wallet.walletStatus,
        masternodeStatus: nextProps.masternode.masternodeStatus,
        masternodeList: nextProps.masternode.masternodeList,
        masternodeCount: nextProps.masternode.masternodeCount,
        masternodeWinner: nextProps.masternode.masternodeWinner,
        masternodeWinnerCount: nextProps.masternode.masternodeWinnerCount,
        masternodeWinnerList: nextProps.masternode.masternodeWinnerList,
        masternodeWinnerListCount: nextProps.masternode.masternodeWinnerListCount,
        maxIncomingConnections: nextProps.node.maxIncomingConnections,
        maxOutgoingConnections: nextProps.node.maxOutgoingConnections,
        nodeType: nextProps.node.nodeType,
        nodeTypeFull: nextProps.node.nodeTypeFull,
        nodeTypeLight: nextProps.node.nodeTypeLight
        });
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

    }

    onStartNode(e) {
        e.preventDefault();
        this.props.startNode();
    }

    onStopNode(e) {
        e.preventDefault();
        this.props.stopNode();
    }

    onGetNodeStatus(e) {
        e.preventDefault();
        this.props.getNodeStatus();
    }

    onGetNetworkStatus(e) {
        e.preventDefault();
        this.props.getNetworkStatus();
    }

    onGetBlockchainStatus(e) {
        e.preventDefault();
        this.props.getBlockchainStatus();
    }

    onGetWalletStatus(e) {
        e.preventDefault();
        this.props.getWalletStatus();
    }

    onGetMasternodeStatus(e) {
        e.preventDefault();
        this.props.getMasternodeStatus();
    }

    onGetMasternodeList(e) {
        e.preventDefault();
        this.props.getMasternodeList();
    }

    onGetMasternodeCount(e) {
        e.preventDefault();
        this.props.getMasternodeCount();
    }

    onGetMasternodeWinner(e) {
        e.preventDefault();
        this.props.getMasternodeWinner();
    }

    onGetMasternodeWinnerCount(e) {
        e.preventDefault();
        this.props.getMasternodeWinnerCount();
    }

    onGetMasternodeWinnerList(e) {
        e.preventDefault();
        this.props.getMasternodeWinnerList();
    }

    onGetMasternodeWinnerListCount(e) {
        e.preventDefault();
        this.props.getMasternodeWinnerListCount();
    }

    onSetMaxIncomingConnections(e) {
        e.preventDefault();
        this.props.setMaxIncomingConnections(this.state.maxIncomingConnections);
    }
    
    onSetMaxOutgoingConnections(e) {
        e.preventDefault();
        this.props.setMaxOutgoingConnections(this.state.maxOutgoingConnections);
    }

    onSetNodeType(e) {
        e.preventDefault();
        this.props.setNodeType(this.state.nodeType);
    }

    onSetNodeTypeFull(e) {
        e.preventDefault();
        this.props.setNodeTypeFull(this.state.nodeTypeFull);
    }

    onSetNodeTypeLight(e) {
        e.preventDefault();
        this.props.setNodeTypeLight(this.state.nodeTypeLight);
    }

    render() {

        const { nodeStatus, networkStatus, blockchainStatus, walletStatus, masternodeStatus, masternodeList, masternodeCount, masternodeWinner, masternodeWinnerCount, masternodeWinnerList, masternodeWinnerListCount, maxIncomingConnections, maxOutgoingConnections, nodeType, nodeTypeFull, nodeTypeLight } = this.state;

        return (
        <div className="animated fadeIn">
            <Row>
            <Col xs="12" sm="12" md="12">
                <Card>
                <CardHeader>
                    <strong>Node</strong>
                </CardHeader>
                <CardBody>
                    <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label htmlFor="nodeStatus">Node Status</Label>
                        <Input type="text" id="nodeStatus" name="nodeStatus" value={nodeStatus} onChange={this.onChange} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="networkStatus">Network Status</Label>
                        <Input type="text" id="networkStatus" name="networkStatus" value={networkStatus} onChange={this.onChange} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="blockchainStatus">Blockchain Status</Label>
                        <Input type="text" id="blockchainStatus" name="blockchainStatus" value={blockchainStatus} onChange={this.onChange} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="walletStatus">Wallet Status</Label>
                        <Input type="text" id="walletStatus" name="walletStatus" value={walletStatus} onChange={this.onChange} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="masternodeStatus">Masternode Status</Label>
                        <Input type="text" id="masternodeStatus" name="masternodeStatus" value={masternodeStatus} onChange={this.onChange} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="masternodeList">Masternode List</Label>
                        <Input type="textarea" id="masternodeList" name="masternodeList" value={JSON.stringify(masternodeList)} onChange={this.onChange} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="masternodeCount">Masternode Count</Label>
                        <Input type="text" id="masternodeCount" name="masternodeCount" value={masternodeCount} onChange={this.onChange} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="masternodeWinner">Masternode Winner</Label>
                        <Input type="text" id="masternodeWinner" name="masternodeWinner" value={masternodeWinner} onChange={this.onChange} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="masternodeWinnerCount">Masternode Winner Count</Label>
                        <Input type="text" id="masternodeWinnerCount" name="masternodeWinnerCount" value={masternodeWinnerCount} onChange={this.onChange} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="masternodeWinnerList">Masternode Winner List</Label>
                        <Input type="textarea" id="masternodeWinnerList" name="masternodeWinnerList" value={JSON.stringify(masternodeWinnerList)} onChange={this.onChange} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="masternodeWinnerListCount">Masternode Winner List Count</Label>
                        <Input type="text" id="masternodeWinnerListCount" name="masternodeWinnerListCount" value={masternodeWinnerListCount} onChange={this.onChange} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="maxIncomingConnections">Max Incoming Connections</Label>
                        <Input type="text" id="maxIncomingConnections" name="maxIncomingConnections" value={maxIncomingConnections} onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="maxOutgoingConnections">Max Outgoing Connections</Label>
                        <Input type="text" id="maxOutgoingConnections" name="maxOutgoingConnections" value={maxOutgoingConnections} onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="nodeType">Node Type</Label>
                        <Input type="text" id="nodeType" name="nodeType" value={nodeType} onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="nodeTypeFull">Node Type Full</Label>
                        <Input type="text" id="nodeTypeFull" name="nodeTypeFull" value={nodeTypeFull} onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="nodeTypeLight">Node Type Light</Label>
                        <Input type="text" id="nodeTypeLight" name="nodeTypeLight" value={nodeTypeLight} onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" onClick={this.onSetMaxIncomingConnections}>Set Max Incoming Connections</Button>
                        <Button color="primary" onClick={this.onSetMaxOutgoingConnections}>Set Max Outgoing Connections</Button>
                        <Button color="primary" onClick={this.onSetNodeType}>Set Node Type</Button>
                        <Button color="primary" onClick={this.onSetNodeTypeFull}>Set Node Type Full</Button>
                        <Button color="primary" onClick={this.onSetNodeTypeLight}>Set Node Type Light</Button>
                    </FormGroup>
                    </Form>
                </CardBody>
                </Card>
            </Col>
            </Row>
            <Row>
            <Col xs="12" sm="12" md="12">
                <Card>
                <CardHeader>
                    <strong>Node Controls</strong>
                </CardHeader>
                <CardBody>
                    <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Button color="primary" onClick={this.onStartNode}>Start Node</Button>
                        <Button color="primary" onClick={this.onStopNode}>Stop Node</Button>
                        <Button color="primary" onClick={this.onGetNodeStatus}>Get Node Status</Button>
                        <Button color="primary" onClick={this.onGetNetworkStatus}>Get Network Status</Button>
                        <Button color="primary" onClick={this.onGetBlockchainStatus}>Get Blockchain Status</Button>
                        <Button color="primary" onClick={this.onGetWalletStatus}>Get Wallet Status</Button>
                        <Button color="primary" onClick={this.onGetMasternodeStatus}>Get Masternode Status</Button>
                        <Button color="primary" onClick={this.onGetMasternodeList}>Get Masternode List</Button>
                        <Button color="primary" onClick={this.onGetMasternodeCount}>Get Masternode Count</Button>
                        <Button color="primary" onClick={this.onGetMasternodeWinner}>Get Masternode Winner</Button>
                        <Button color="primary" onClick={this.onGetMasternodeWinnerCount}>Get Masternode Winner Count</Button>
                        <Button color="primary" onClick={this.onGetMasternodeWinnerList}>Get Masternode Winner List</Button>
                        <Button color="primary" onClick={this.onGetMasternodeWinnerListCount}>Get Masternode Winner List Count</Button>
                    </FormGroup>
                    </Form>
                </CardBody>
                </Card>
            </Col>
            </Row>
            <Row>
            <Col xs="12" sm="12" md="12">
                <Card>
                <CardHeader>
                    <strong>Node Settings</strong>
                </CardHeader>
                <CardBody>
                    <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label htmlFor="maxIncomingConnections">Max Incoming Connections</Label>
                        <Input type="text" id="maxIncomingConnections" name="maxIncomingConnections" value={maxIncomingConnections} onChange={this.onChange} />
                        <Button color="primary" onClick={this.onSetMaxIncomingConnections}>Set Max Incoming Connections</Button>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="maxOutgoingConnections">Max Outgoing Connections</Label>
                        <Input type="text" id="maxOutgoingConnections" name="maxOutgoingConnections" value={maxOutgoingConnections} onChange={this.onChange} />
                        <Button color="primary" onClick={this.onSetMaxOutgoingConnections}>Set Max Outgoing Connections</Button>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="nodeType">Node Type</Label>
                        <Input type="text" id="nodeType" name="nodeType" value={nodeType} onChange={this.onChange} />
                        <Button color="primary" onClick={this.onSetNodeType}>Set Node Type</Button>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="nodeTypeFull">Node Type Full</Label>
                        <Input type="text" id="nodeTypeFull" name="nodeTypeFull" value={nodeTypeFull} onChange={this.onChange} />
                        <Button color="primary" onClick={this.onSetNodeTypeFull}>Set Node Type Full</Button>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="nodeTypeLight">Node Type Light</Label>
                        <Input type="text" id="nodeTypeLight" name="nodeTypeLight" value={nodeTypeLight} onChange={this.onChange} />
                        <Button color="primary" onClick={this.onSetNodeTypeLight}>Set Node Type Light</Button>
                    </FormGroup>
                    </Form>
                </CardBody>
                </Card>
            </Col>
            </Row>
        </div>
        );
    }
}

export default Node;

