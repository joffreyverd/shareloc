import React, { Component } from 'react';
import Signin from "./Signin.js";
import Signup from "./Signup.js";
import "../../ressources/css/Home.css";

export default class Home extends Component {
    state = {
            option: false,
        };

    validateForm(email, password) {
        return email.length > 0 && password.length > 0;
    }

    render() {
        return (
            <>
            <div class="register_modal">
                    <div class="flex_buttons">
                        <p id="register_button" onClick={() => this.setState({option: false})}>Register</p>
                        <p id="login_button" onClick={() => this.setState({option: true})}>Login</p>
                    </div>
                    {this.state.option ?
                        <Signin validateFormFct={this.validateForm}/> : <Signup validateFormFct={this.validateForm}/>
                        
                    }
            </div>  
            </>
        );
    }
}
