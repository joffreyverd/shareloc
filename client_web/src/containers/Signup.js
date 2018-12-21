import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Form } from "react-bootstrap";
import "./Signup.css";

export default class Signup extends Component {
    state = {
        email: "",
        pseudo: "",
        password: "",
        repeatPassword: "",
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
            <div className="register">
                <Form horizontal onSubmit={this.handleSubmit} class="register_modal">

                    <FormGroup controlId="email">
                        <ControlLabel><p class="field_name">Email</p></ControlLabel>
                        <FormControl
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup controlId="pseudo">
                        <ControlLabel><p class="field_name">Pseudo</p></ControlLabel>
                        <FormControl
                            type="email"
                            value={this.state.pseudo}
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

                    <FormGroup controlId="repeatPassword">
                        <ControlLabel><p class="field_name">Repeat password</p></ControlLabel>
                        <FormControl
                            value={this.state.repeatPassword}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    
                    <Button
                        bsStyle="primary"
                        disabled={!this.props.validateFormFct(this.state.email, this.state.password)}
                        type="submit"
                    >Register</Button>
                </Form>
            </div>
            </>
        );
    }
}