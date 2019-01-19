import React from 'react';
import HousemateList from '../../components/housemate/HousemateList';

const HousemateObject = [
    {
        name: 'Stevy'
    },
    {
        name: 'Thomas'
    },
    {
        name: 'Joffrey'
    }
];

export default class Housemates extends React.Component {

    deleteHousemate = (e) => {
        alert('delete');
    }

    updateHousemate = (e) => {
        alert('update');
    }

    render() {
        return(
            <>
                <h1>Housemates</h1>
        
                <HousemateList
                    items={HousemateObject}
                    onDelete={this.deleteHousemate}
                    onUpdate={this.updateHousemate}
                />
            </>
        );
    }
}
