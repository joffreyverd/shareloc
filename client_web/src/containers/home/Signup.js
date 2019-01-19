import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Form } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import "../../ressources/css/signup.css";

class Signup extends Component {
    state = {
        email: '',
        pseudo: '',
        password: '',
        repeatPassword: '',
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
            <>
            <div>
                <Form horizontal onSubmit={this.handleSubmit}>
                    <FormGroup controlId='email'>
                        <ControlLabel><p className='field_name'>Email</p></ControlLabel>
                        <FormControl
                            type='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup controlId='pseudo'>
                        <ControlLabel><p className='field_name'>Pseudo</p></ControlLabel>
                        <FormControl
                            value={this.state.pseudo}
                            onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup controlId='password'>
                        <ControlLabel><p className='field_name'>Password</p></ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type='password'
                        />
                    </FormGroup>

                    <FormGroup controlId='repeatPassword'>
                        <ControlLabel><p>Repeat password</p></ControlLabel>
                        <FormControl
                            value={this.state.repeatPassword}
                            onChange={this.handleChange}
                            type='password'
                        />
                    </FormGroup>
                    
                    <Button
                        bsStyle='primary'
                        disabled={!this.props.validateFormFct(this.state.email, this.state.password)}
                        type='submit'
                    >Register</Button>
                </Form>
            </div>
            </>
        );
    }
}

export default withRouter(Signup);
