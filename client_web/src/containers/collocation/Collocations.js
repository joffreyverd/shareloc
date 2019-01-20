import React from 'react';
import {Link} from "react-router-dom";
import {Button, Glyphicon} from 'react-bootstrap';
import CollocationList from '../../components/collocation/CollocationList';

const CollocationsObject = [
    {
        name: 'Résidence Clinchard'
    },
    {
        name: 'Maison Dettwiller'
    }
];

export default class Collocations extends React.Component {

    deleteCollocation = (e) => {
        alert('delete');
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { history } = this.props;
        history.push('/housemates');
    }

    render() {
        return(
            <>
                <div className='logo'>
                    <img src='/img/logo.png'/>
                    <p>ShareLoc</p>
                </div>
                
                <h1 className='main-title'>Mes espaces</h1>
                <div className='card'>
                    <CollocationList
                        items={CollocationsObject}
                        onDelete={this.deleteCollocation}
                        onUpdate={this.updateCollocation}
                    />

                    <Link to='/newCollocation' className='add-item-icon'>
                        <Button>
                            <Glyphicon glyph='plus'/>
                        </Button>
                    </Link>
                </div>


            </>
        );
    }
}
