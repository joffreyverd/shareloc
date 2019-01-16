import React from 'react';
import {Link} from "react-router-dom";
import HousemateList from '../../components/housemate/HousemateList';
import TaskList from '../../components/task/TaskList';
import UnapprouvedTaskList from '../../components/task/ProposalList';

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

const TaskObject = [
    {
        name: 'Faire la vaisselle'
    },
    {
        name: 'Passer l\'aspirateur'
    }
];

const UnapprouvedTaskObject = [
    {
        name: 'Manger du caca'
    },
    {
        name: 'Croquer l\'apocalypse à pleines dents'
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

                <TaskList
                    items={TaskObject}
                    onDelete={this.deleteTask}
                    onUpdate={this.updateTask}
                />
                <UnapprouvedTaskList
                    items={UnapprouvedTaskObject}
                    onDelete={this.deleteUnapprouvedTask}
                    onUpdate={this.updateUnapprouvedTask}
                />

                <Link to="/newTaskView">Ajouter une tâche</Link>

            </>
        );
    }
}
