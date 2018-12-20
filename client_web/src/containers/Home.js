import React, { Component } from 'react';
import Signin from "./Signin.js";
import Signup from "./Signup.js";
import "./Home.css";

export default class Login extends Component {
    state = {
            option: true,
        };

    validateForm(email, password) {
        return email.length > 0 && password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }
    render() {
        return (
            <>
            <div class="access">
                    <div class="flex_buttons">
                        <p id="register_button">Register</p>
                        <p id="login_button">Login</p>
                    </div>
                    {this.state.option ?
                        <Signin validateFormFct={this.validateForm}/> : <Signup/>
                    }
            </div>  
            </>
        );
    }
}
