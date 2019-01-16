import React from 'react';
import HousemateList from '../../components/housemate/HousemateList';
import ServiceList from '../../components/task/TaskList';

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

const ServiceObject = [
    {
        name: 'Faire la vaisselle'
    },
    {
        name: 'Passer l\'aspirateur'
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

                <ServiceList
                    items={ServiceObject}
                    onDelete={this.deleteService}
                    onUpdate={this.updateService}
                />
            </>
        );
    }
}
