//this is the home page og the GUI
//if this is the first time the app is run then the user will be asked to create a wallet. If the user already has a wallet then the user will be asked to login.
//if the user has not logged in yet then the user will be asked to login
//if the user has logged in then the user will be taken to the dashboard
//the dashboard will show the user's wallet address and balance, the node's status, and the blockchain's status. The app will start syncing the Seigr blockchain and show a progress bar.

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

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        //this is the state of the app
        //the app will start with the home page
        //the app will start with the login page
        //the app will start with the dashboard
        //the app will start with the wallet page
        //the app will start with the node page
        //the app will start with the explorer page
        //the app will start with the address book page
        //the app will start with the settings page
        //the app will start with the about page
        //the app will start with the send page
        //the app will start with the receive page
        //the app will start with the history page
        //the app will start with the create wallet page
        //the app will start with the import wallet page
        //the app will start with the create address book entry page
        //the app will start with the edit address book entry page
        //the app will start with the delete address book entry page
        //the app will start with the edit settings page
        //the app will start with the delete address book entry page

        }
    }

    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col>
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h3"><FontAwesomeIcon icon={faHome} className="mr-2" />Home</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <CardText>
                                        Welcome to the Seigr Wallet.
                                    </CardText>
                                    <CardText>
                                        <Link to="/create-wallet"><Button color="primary"><FontAwesomeIcon icon={faArrowCircleRight} className="mr-2" />Create Wallet</Button></Link>
                                    </CardText>
                                    <CardText>
                                        <Link to="/import-wallet"><Button color="primary"><FontAwesomeIcon icon={faArrowCircleRight} className="mr-2" />Import Wallet</Button></Link>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;
