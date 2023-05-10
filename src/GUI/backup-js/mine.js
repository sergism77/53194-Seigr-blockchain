//from this page, users that have a full sync node, can start/stop mining blocks for the Seigr blockchain
//users will also be able to adjust mining settings such as the number of threads to use for mining, the minimum and maximum difficulty
//users will see a real time graph of the hash rate of their mining, the total blocks mined and total rewards earned

//users will be able to see the current difficulty of the Seigr blockchain
//users will be able to see the current block reward of the Seigr blockchain
//users will be able to see their miner's effort in the Seigr blockchain
//users will be able to see the total number of blocks mined by them in the Seigr blockchain
//users will be able to see the total number of rewards earned by them in the Seigr blockchain
//users will be able to see the total number of transactions mined by them in the Seigr blockchain
//users will be able to see their current hashrate, the average hashrate and the highest hashrate of their miner in the Seigr blockchain

import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import minerWorkerService from '../SeigrBlockchain/minerWorkerMachine';
import { interpret } from 'xstate';
import { Machine } from 'xstate';

class Miner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            minerWorker: minerWorkerService,
            minerWorkerState: minerWorkerService.state,
            minerWorkerContext: minerWorkerService.context,
            minerWorkerActions: minerWorkerService.actions,
            minerWorkerEvents: minerWorkerService.events,
            minerWorkerTransitions: minerWorkerService.transitions,
            minerWorkerGuards: minerWorkerService.guards,
            minerWorkerServices: minerWorkerService.services,
            minerWorkerActivities: minerWorkerService.activities,
            minerWorkerDelays: minerWorkerService.delays,
            minerWorkerInitialState: minerWorkerService.initialState,
            minerWorkerFinalState: minerWorkerService.finalState,
            minerWorkerHistoryState: minerWorkerService.historyState,
            minerWorkerParallelState: minerWorkerService.parallelState,
            minerWorkerStateNode: minerWorkerService.stateNode,
            minerWorkerTransition: minerWorkerService.transition,
            minerWorkerOptions: minerWorkerService.options,
            minerWorkerConfig: minerWorkerService.config,
            minerWorkerMachine: minerWorkerService.machine,
            minerWorkerService: minerWorkerService.service,
            minerWorkerSend: minerWorkerService.send,
            minerWorkerSendParent: minerWorkerService.sendParent,
            minerWorkerSendUpdate: minerWorkerService.sendUpdate,
            minerWorkerStart: minerWorkerService.start,
            minerWorkerStop: minerWorkerService.stop,
            minerWorkerSubscribe: minerWorkerService.subscribe,
            minerWorkerUpdate: minerWorkerService.update,
            minerWorkerWithConfig: minerWorkerService.withConfig,
            minerWorkerWithContext: minerWorkerService.withContext,
            minerWorkerWithEvent: minerWorkerService.withEvent,
            minerWorkerWithId: minerWorkerService.withId,
            minerWorkerWithState: minerWorkerService.withState,
            minerWorkerWithStatechart: minerWorkerService.withStatechart,
            minerWorkerWithTransition: minerWorkerService.withTransition,
            minerWorkerWithTransitions: minerWorkerService.withTransitions,
            minerWorkerWithConfig: minerWorkerService.withConfig
        };
    }

    componentDidMount() {
        this.state.minerWorker.subscribe((state) => {
            this.setState({ minerWorkerState: state });
        });
    }

    componentWillUnmount() {
        this.state.minerWorker.stop();
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <h1>Miner</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Current Difficulty: {this.state.minerWorkerState.context.difficulty}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Current Block Reward: {this.state.minerWorkerState.context.blockReward}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Current Effort: {this.state.minerWorkerState.context.effort}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Total Blocks Mined: {this.state.minerWorkerState.context.totalBlocksMined}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Total Rewards Earned: {this.state.minerWorkerState.context.totalRewardsEarned}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Total Transactions Mined: {this.state.minerWorkerState.context.totalTransactionsMined}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Current Hashrate: {this.state.minerWorkerState.context.hashrate}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Average Hashrate: {this.state.minerWorkerState.context.averageHashrate}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Highest Hashrate: {this.state.minerWorkerState.context.highestHashrate}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Current Mining Status: {this.state.minerWorkerState.value}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button color="primary" onClick={() => this.state.minerWorker.send('START')}>Start Mining</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button color="danger" onClick={() => this.state.minerWorker.send('STOP')}>Stop Mining</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <FormGroup>
                                <Label for="threads">Threads</Label>
                                <Input type="number" name="threads" id="threads" placeholder="Enter number of threads to use for mining" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="minDifficulty">Minimum Difficulty</Label>
                                <Input type="number" name="minDifficulty" id="minDifficulty" placeholder="Enter minimum difficulty to use for mining" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="maxDifficulty">Maximum Difficulty</Label>
                                <Input type="number" name="maxDifficulty" id="maxDifficulty" placeholder="Enter maximum difficulty to use for mining" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="minBlockReward">Minimum Block Reward</Label>
                                <Input type="number" name="minBlockReward" id="minBlockReward" placeholder="Enter minimum block reward to use for mining" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="maxBlockReward">Maximum Block Reward</Label>
                                <Input type="number" name="maxBlockReward" id="maxBlockReward" placeholder="Enter maximum block reward to use for mining" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="minEffort">Minimum Effort</Label>
                                <Input type="number" name="minEffort" id="minEffort" placeholder="Enter minimum effort to use for mining" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="maxEffort">Maximum Effort</Label>
                                <Input type="number" name="maxEffort" id="maxEffort" placeholder="Enter maximum effort to use for mining" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="minBlocksMined">Minimum Blocks Mined</Label>
                                <Input type="number" name="minBlocksMined" id="minBlocksMined" placeholder="Enter minimum number of blocks mined to use for mining" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="maxBlocksMined">Maximum Blocks Mined</Label>
                                <Input type="number" name="maxBlocksMined" id="maxBlocksMined" placeholder="Enter maximum number of blocks mined to use for mining" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="minRewardsEarned">Minimum Rewards Earned</Label>
                                <Input type="number" name="minRewardsEarned" id="minRewardsEarned" placeholder="Enter minimum number of rewards earned to use for mining" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="maxRewardsEarned">Maximum Rewards Earned</Label>
                                <Input type="number" name="maxRewardsEarned" id="maxRewardsEarned" placeholder="Enter maximum number of rewards earned to use for mining" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="minTransactionsMined">Minimum Transactions Mined</Label>
                                <Input type="number" name="minTransactionsMined" id="minTransactionsMined" placeholder="Enter minimum number of transactions mined to use for mining" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="maxTransactionsMined">Maximum Transactions Mined</Label>
                                <Input type="number" name="maxTransactionsMined" id="maxTransactionsMined" placeholder="Enter maximum number of transactions mined to use for mining" />
                            </FormGroup>

                            <Button color="primary" onClick={() => this.state.minerWorker.send('CONFIGURE')}>Configure</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Miner;