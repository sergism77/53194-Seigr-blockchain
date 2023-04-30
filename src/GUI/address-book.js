//this is the address-book of the GUI. Users will be able to add, edit, and delete e-wallets from this page.
//users will be able to send Seig to wallets in the address book.

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class AdressBook extends Component {
    render() {
        return (
        <Container>
            <Row>
            <Col sm="12">
                <h1>Address Book</h1>
                <hr />
            </Col>
            </Row>
            <Row>
            <Col sm="12">
                <Card>
                <CardBody>
                    <CardTitle>Address Book</CardTitle>
                    <CardText>Users will be able to add, edit, and delete e-wallets from this page.</CardText>
                    <Button color="primary" tag={Link} to="/address-book/edit">Edit</Button>
                </CardBody>
                </Card>
            </Col>
            </Row>
        </Container>
        );
    }
}