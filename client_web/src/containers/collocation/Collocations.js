import React from 'react';
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
                <h1>Espaces de vie</h1>
                <div className='card'>
                    <CollocationList
                        items={CollocationsObject}
                        onDelete={this.deleteCollocation}
                        onUpdate={this.updateCollocation}
                    />
                </div>

            </>
        );
    }
}
