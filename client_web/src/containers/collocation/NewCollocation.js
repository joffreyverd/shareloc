import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Form } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import "../../ressources/css/forms.css";

class NewCollocation extends Component {
    state = {
        name: ''
    };

    createCollocation(name) {
        alert('lol');
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { history } = this.props;
        history.push('/newCollocation');
    }
    
    render() {
        return (
            <>

                <div className='logo'>
                    <img src='/img/logo.png'/>
                    <p>ShareLoc</p>
                </div>

                <h1 className='main-title'>Créer une collocation</h1>

                <div className='submission-form'>
                    <Form horizontal onSubmit={this.handleSubmit}>

                        <FormGroup controlId='text'>
                            <ControlLabel>Nom</ControlLabel>
                            <FormControl
                                type='text'
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        
                        <Button
                            bsStyle='primary'
                            type='submit'
                        >Ajouter</Button>
                    </Form>
                </div>

            </>
        );
    }
}

export default withRouter(NewCollocation);
