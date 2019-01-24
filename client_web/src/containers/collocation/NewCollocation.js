import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Logo from '../../components/Logo';

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
        history.push('/collocations');
    }
    
    render() {
        return (
            <>
                <Logo/>

                <h1 className='main-title'>Créer une collocation</h1>

                <div className='submission-form'>
                    <Form horizontal onSubmit={this.handleSubmit}>

                        <FormGroup controlId='name'>
                            <ControlLabel>Nom</ControlLabel>
                            <FormControl
                                type='name'
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
