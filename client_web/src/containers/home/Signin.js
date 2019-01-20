import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Form } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import "../../ressources/css/signin.css";

class Signin extends Component {
    state = {
        email: '',
        password: '',
    };

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { history } = this.props;
        history.push('/collocations');
    }
    
    render() {
        return (
            <div className='login'>
                <Form horizontal onSubmit={this.handleSubmit}>

                    <FormGroup controlId='email'>
                        <ControlLabel>Pseudo</ControlLabel>
                        <FormControl
                            type='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup controlId='password'>
                        <ControlLabel><p>Mot de passe</p></ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type='password'
                        />
                    </FormGroup>
                    
                    <Button
                        bsStyle='primary'
                        disabled={!this.props.validateFormFct(this.state.email, this.state.password)}
                        type='submit'
                    >Go !</Button>
                </Form>
            </div>
        );
    }
}

export default withRouter(Signin);
