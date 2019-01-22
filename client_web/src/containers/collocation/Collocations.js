import React from 'react';
import {Link} from 'react-router-dom';
import { getMethod, deleteMethod } from '../../components/httpMethods';
import { checkStatus } from '../../components/Utils';
import {Button, Glyphicon} from 'react-bootstrap';
import CollocationList from '../../components/collocation/CollocationList';
import Logo from '../../components/Logo';

export default class Collocations extends React.Component {
    state = {
        userName: 'Joffrey',
        isCollocationAdmin: true,
        CollocationsObject: []
    }

    componentDidMount() {
        //get the CollocationsObject
        getMethod('http://jsonplaceholder.typicode.com/users')
        .then(checkStatus)
        .then((res) => res.json())
        .then((data) => {
            this.setState({ 
                CollocationsObject: data
            });
        })
        .catch(() => this.setState({ 
            CollocationsObject: null
        }));
    }

    deleteCollocation = (e) => {
        deleteMethod('lol');
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { history } = this.props;
        history.push('/housemates');
    }

    render() {
        return(
            <>
                <Logo/>
                
                <h1 className='main-title'>Mes espaces</h1>
                
                <div className='card'>
                    <CollocationList
                        items={this.state.CollocationsObject}
                        isAdmin={this.state.isCollocationAdmin}
                        onDelete={this.deleteCollocation}
                        onUpdate={this.updateCollocation}
                    />

                    {this.state.isCollocationAdmin ?
                    <Link to='/newCollocation' className='add-item-icon'>
                        <Button>
                            <Glyphicon glyph='plus'/>
                        </Button>
                    </Link> : ''
                    }

                </div>


            </>
        );
    }
}
