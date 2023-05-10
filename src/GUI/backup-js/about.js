//this is the about page in the GUI

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAbout } from '../actions/aboutActions';

class About extends Component {
    componentDidMount() {
        this.props.getAbout();
    }
    
    render() {
        const { about } = this.props;
        return (
        <Container>
            <Row>
            <Col sm="12">
                <h1>About</h1>
                <hr />
            </Col>
            </Row>
            <Row>
            <Col sm="12">
                <Card>
                <CardBody>
                    <CardTitle>{about.title}</CardTitle>
                    <CardText>{about.description}</CardText>
                    <Button color="primary" tag={Link} to="/about/edit">Edit</Button>
                </CardBody>
                </Card>
            </Col>
            </Row>
        </Container>
        );
    }
}

const mapStateToProps = state => ({
    about: state.about
});

const mapDispatchToProps = dispatch => bindActionCreators({ getAbout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(About);
