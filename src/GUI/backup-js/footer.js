//this is the footer of the app
//the footer will be fixed at the bottom of the page
//the footer will have 3 buttons on the left: Send, Receive, History
//the footer will show the syncing progress and the mining status on the right
//the footer will have a dark background with white text
//the syncing progress will be shown as a progress bar and as a percentage
//the progress bar will be honey orange
//if the node is connected to the network a green circle will be shown on the left of the footer (before the syncing progress). If the node is not connected to the network a red circle will be shown on the left of the footer (before the syncing progress).
//if the node is mining a green bee will be shown on the right of the footer (after the syncing progress). If the node is not mining a red circle will be shown on the right of the footer (after the syncing progress). If the node is mining but the wallet is locked a yellow bee will be shown on the right of the footer (after the syncing progress). If the node is mining but the wallet is not locked a green bee will be shown on the right of the footer (after the syncing progress).
//the Send button will allow users to send transactions
//the Receive button will allow users to receive transactions
//the History button will allow users to check their TX history

import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col, Card, CardBody, CardTitle, CardText, CardFooter, CardHeader, Progress } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faWallet, faServer, faSearch, faAddressBook, faCog, faInfoCircle, faArrowCircleRight, faArrowCircleLeft, faArrowCircleUp, faArrowCircleDown, faHistory } from '@fortawesome/free-solid-svg-icons';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        syncing: false,
        mining: false,
        connected: false
        };
    }

    componentDidMount() {
        this.setState({
            syncing: this.props.syncing,
            mining: this.props.mining,
            connected: this.props.connected
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.syncing !== prevProps.syncing) {
            this.setState({
                syncing: this.props.syncing
            });
        }
        if (this.props.mining !== prevProps.mining) {
            this.setState({
                mining: this.props.mining
            });
        }
        if (this.props.connected !== prevProps.connected) {
            this.setState({
                connected: this.props.connected
            });
        }
    }

    render() {
        return (
            <div className="footer">
                <Container>
                    <Row>
                        <Col xs="12" sm="12" md="12" lg="12" xl="12">
                            <div className="footer-content">
                                <Button className="footer-button" color="primary" size="lg" block onClick={this.props.send}>
                                    <FontAwesomeIcon icon={faArrowCircleUp} className="fa-lg fa-fw" /> Send
                                </Button>
                                <Button className="footer-button" color="primary" size="lg" block onClick={this.props.receive}>
                                    <FontAwesomeIcon icon={faArrowCircleDown} className="fa-lg fa-fw" /> Receive
                                </Button>
                                <Button className="footer-button" color="primary" size="lg" block onClick={this.props.history}>
                                    <FontAwesomeIcon icon={faHistory} className="fa-lg fa-fw" /> History
                                </Button>
                                {this.state.connected ? (
                                    <div>
                                        <Progress className="sync-progress" animated color="warning" value={this.props.syncProgress} />
                                        <div className="sync-progress-text">
                                            {this.props.syncProgress}%
                                        </div>
                                    </div>
                                ) : (
                                    <div></div>
                                )}
                                <div className="footer-icons">
                                    {this.state.connected ? (
                                        <FontAwesomeIcon icon={faCheckCircle} className="fa-lg fa-fw" />
                                    ) : (
                                        <FontAwesomeIcon icon={faTimesCircle} className="fa-lg fa-fw" />
                                    )}
                                    {this.state.mining ? (
                                        <FontAwesomeIcon icon={faCheckCircle} className="fa-lg fa-fw" />
                                    ) : (
                                        <FontAwesomeIcon icon={faTimesCircle} className="fa-lg fa-fw" />
                                    )}
                                </div>


                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;