import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Signin.css";

export default class Signin extends Component {
    state = {
        email: "",
        password: "",
    };
    
    render() {
        return (
            <>
            <div className="Login">
                <form onSubmit={this.handleSubmit}>

                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>

                    <Button
                        block
                        bsSize="large"
                        disabled={!this.props.validateFormFct(this.state.email, this.state.password)}
                        type="submit"
                    >Login</Button>
                </form>
            </div>
            </>
        );
    }
}
