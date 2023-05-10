import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './home.js';
import Wallet from './wallet.js';
import Node from './node.js';
import Explorer from './explorer.js';
import Miner from './miner.js';
import AddressBook from './address-book.js';
import Settings from './settings.js';
import About from './about.js';

class NavbarComponent extends React.Component {
    render() {
        return (
            <Router>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Seigr Wallet</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link href="#home"><Link to={'/'} className="nav-link">Home</Link></Nav.Link>
                            <Nav.Link href="#wallet"><Link to={'/wallet'} className="nav-link">Wallet</Link></Nav.Link>
                            <Nav.Link href="#node"><Link to={'/node'} className="nav-link">Node</Link></Nav.Link>
                            <Nav.Link href="#explorer"><Link to={'/explorer'} className="nav-link">Explorer</Link></Nav.Link>
                            <Nav.Link href="#miner"><Link to={'/miner'} className="nav-link">Miner</Link></Nav.Link>
                            <Nav.Link href="#address-book"><Link to={'/address-book'} className="nav-link">Address Book</Link></Nav.Link>
                            <Nav.Link href="#settings"><Link to={'/settings'} className="nav-link">Settings</Link></Nav.Link>
                            <Nav.Link href="#about"><Link to={'/about'} className="nav-link">About</Link></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <br />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/wallet' component={Wallet} />
                    <Route path='/node' component={Node} />
                    <Route path='/explorer' component={Explorer} />
                    <Route path='/miner' component={Miner} />
                    <Route path='/address-book' component={AddressBook} />
                    <Route path='/settings' component={Settings} />
                    <Route path='/about' component={About} />
                </Switch>
            </Router>
        );
    }
}

export default NavbarComponent;