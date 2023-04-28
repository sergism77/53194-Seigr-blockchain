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
    