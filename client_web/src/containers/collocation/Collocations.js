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

    updateCollocation = (e) => {
        alert('update');
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { history } = this.props;
        history.push('/housemates');
    }

    render() {
        return(
            <>
                <h1 className='main-title'>Mes espaces</h1>
                <div className='card-full-width'>
                    <CollocationList
                        items={CollocationsObject}
                        onDelete={this.deleteCollocation}
                        onUpdate={this.updateCollocation}
                    />
                </div>

                <Link to='/newCollocation' className='add-button'>
                    <Button>
                        <Glyphicon glyph='plus'/>
                    </Button>
                </Link>

            </>
        );
    }
}
