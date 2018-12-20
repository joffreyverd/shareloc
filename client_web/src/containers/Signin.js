import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Form } from "react-bootstrap";
import "./Signin.css";

export default class Signin extends Component {
    state = {
        email: "",
        password: "",
    };

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }
    
    render() {
        return (
            <>
            <div className="login">
                <Form horizontal onSubmit={this.handleSubmit} class="login_modal">

                    <FormGroup controlId="email">
                        <ControlLabel><p class="field_name">Pseudo</p></ControlLabel>
                        <FormControl
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup controlId="password">
                        <ControlLabel><p class="field_name">Password</p></ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    
                    <Button
                        bsStyle="primary"
                        disabled={!this.props.validateFormFct(this.state.email, this.state.password)}
                        type="submit"
                    >Login</Button>
                </Form>
            </div>
            </>
        );
    }
}
