//from this settings page users will be able to change the GUI settings, such as the theme (dark or light) and the currency (euro, norwegian krone or dollar). More options will be available in future versions.

import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';


class Settings extends Component {
    constructor(props){
        super(props);
        this.state = {
            theme: '',
            currency: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h1>Settings</h1>
                            <p>From this page you can change the GUI settings, such as the theme (dark or light) and the currency (euro, norwegian krone or dollar). More options will be available in future versions.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label for="theme">Theme</Label>
                                    <Input type="select" name="theme" id="theme" onChange={this.handleChange}>
                                        <option>Dark</option>
                                        <option>Light</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="currency">Currency</Label>
                                    <Input type="select" name="currency" id="currency" onChange={this.handleChange}>
                                        <option>Euro</option>
                                        <option>Norwegian Krone</option>
                                        <option>Dollar</option>
                                    </Input>
                                </FormGroup>
                                <Button>Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

Settings.propTypes = {
    theme: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}

export default Settings;