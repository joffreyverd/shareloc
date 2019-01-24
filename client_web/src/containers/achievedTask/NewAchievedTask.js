import React, { Component } from 'react';
import Logo from '../../components/Logo';
import { Button, DropdownButton, MenuItem, FormGroup, FormControl, ControlLabel, Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class NewAchievedTask extends Component {
    state = {
        choosenTask: 'Choisir',
        name: '',
        date: ''
    };

    createAchievedTask(name) {
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

                <h1 className='main-title'>Accomplir une tâche</h1>

                <div className='submission-form'>
                    <Form horizontal onSubmit={this.handleSubmit}>

                        <FormGroup controlId='text'>
                            <ControlLabel>Tâche</ControlLabel>
                                <DropdownButton title={this.state.choosenTask}>
                                    <MenuItem eventKey="1">Tâches 1 - x pts</MenuItem>
                                    <MenuItem eventKey="2">Tâches 2 - x pts</MenuItem>
                                    <MenuItem eventKey="3">Tâches 3 - x pts</MenuItem>
                                </DropdownButton>
                        </FormGroup>

                        <FormGroup controlId='date'>
                            <ControlLabel>Date</ControlLabel>
                            <FormControl
                                type='date'
                                value={this.state.date}
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

export default withRouter(NewAchievedTask);
