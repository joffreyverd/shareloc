import React, { Component } from 'react';
import Signin from './Signin.js';
import Signup from './Signup.js';
import Logo from '../../components/Logo';

export default class Home extends Component {
    state = {
            option: false,
        };

    validateForm(email, password) {
        return email.length > 0 && password.length > 0;
    }

    render() {
        return (
            <div className='body-wrapper'>

                <Logo/>

                <div className='register_modal'>
                    <div className='flex_buttons'>
                        <p id='register_button' 
                            className={this.state.option === true ? 'active' : ''} 
                            onClick={() => this.setState({option: false})}>Inscription</p>
                        <p id='login_button'
                        className={this.state.option === true ? '' : 'active'} 
                        onClick={() => this.setState({option: true})}>Connexion</p>
                    </div>
                    {this.state.option ?
                        <Signin validateFormFct={this.validateForm}/> : <Signup validateFormFct={this.validateForm}/>
                        
                    }
                </div>  
            </div>
            

        );
    }
}
