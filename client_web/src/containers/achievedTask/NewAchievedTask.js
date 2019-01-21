import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class NewAchievedTask extends Component {
    state = {
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
        history.push('/newAchievedTask');
    }
    
    render() {
        return (
            <>

                <div className='logo'>
                    <img src='/img/logo.png' alt='logo'/>
                    <p>ShareLoc</p>
                </div>

                <h1 className='main-title'>Accomplir une tâche</h1>

                <div className='submission-form'>
                    <Form horizontal onSubmit={this.handleSubmit}>

                        <FormGroup controlId='text'>
                            <ControlLabel>Tâche</ControlLabel>
                            <FormControl
                                type='text'
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup controlId='text'>
                            <ControlLabel>Date</ControlLabel>
                            <FormControl
                                type='text'
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
