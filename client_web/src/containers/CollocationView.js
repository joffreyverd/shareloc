import React from 'react';
import HousemateList from '../components/HousemateList';

const HousemateObject = [
    {
        name: 'Stevy'
    },
    {
        name: 'Thomas'
    },
    {
        name: 'Benjamin'
    },
    {
        name: 'Joffrey'
    }
];

export default class CollocationView extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();
        const { history } = this.props;
        history.push('/collocationView');
    }

    render() {
        return(
            <>
                <h1>Collocation View</h1>
                <HousemateList
                    items={HousemateObject}
                    onDelete={this.deleteHousemate}
                    onUpdate={this.updateHousemate}
                />
            </>
        );
    }
}
