import React from 'react';
import CollocationList from '../components/CollocationList';

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

    render() {
        return(
            <>
                <h1>Collocations</h1>
        
                <CollocationList
                    items={CollocationsObject}
                    onDelete={this.deleteCollocation}
                    onUpdate={this.updateCollocation}
                />
            </>
        );
    }
}
