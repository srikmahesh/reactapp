import React, { Component } from "react";
import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import './../../styles/login.css'

class LoginForm extends Component {
    handleFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="LoginPage">
                <div className="divStyle">
                    <Panel className="panelStyle">
                        <Form horizontal className="LoginForm" id="loginForm">
                            <FormGroup controlId="formEmail">
                                <FormControl type="email" placeholder="Email Address" />
                            </FormGroup>
                            <FormGroup controlId="formPassword">
                                <FormControl type="password" placeholder="Password" />
                            </FormGroup>
                            <FormGroup className="buttonStyle" controlId="formSubmit">
                                <Button bsStyle="primary" type="submit" onClick={this.handleFormSubmit}>
                                    Login
                                </Button>
                            </FormGroup>
                        </Form>
                    </Panel>
                </div>
            </div>
        )
    }
}

export default LoginForm