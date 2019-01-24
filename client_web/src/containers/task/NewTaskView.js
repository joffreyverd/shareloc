import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Logo from '../../components/Logo';

class NewTask extends Component {
    state = {
        name: '',
        score: ''
    };

    createTask(name, score) {
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
        history.push('/collocationView');
    }
    
    render() {
        return (
            <>
                <Logo/>

                <h1 className='main-title'>Créer une tâche</h1>

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

                        <FormGroup controlId='score'>
                            <ControlLabel>Points</ControlLabel>
                            <FormControl
                                type='score'
                                value={this.state.score}
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

export default withRouter(NewTask);
