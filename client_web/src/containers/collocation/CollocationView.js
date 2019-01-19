import React from 'react';
import {Link} from "react-router-dom";
import '../../ressources/css/collocation.css';
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
        name: 'Etendre le linge'
    },
    {
        name: 'Croquer l\'apocalypse à pleines dents'
    }
];

export default class CollocationView extends React.Component {

    deleteHousemate = (e) => {
        alert('delete');
    }

    deleteTask = (e) => {
        alert('delete');
    }

    deleteUnapprouvedTask = (e) => {
        alert('delete');
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { history } = this.props;
        history.push('/collocationView');
    }

    render() {
        return(
            <>
                <h1 className='main-title'>Nom de la collocation</h1>

                <div className='collocations_components'>
                    <HousemateList
                        items={HousemateObject}
                        onDelete={this.deleteHousemate}
                    />

                    <TaskList
                        items={TaskObject}
                        onDelete={this.deleteTask}
                    />
                    
                    <UnapprouvedTaskList
                        items={UnapprouvedTaskObject}
                        onDelete={this.deleteUnapprouvedTask}
                    />
                </div>

                <div className='options'>
                    <Link to="/newAchievedTask">J'ai accompli une tâche :)</Link>
                </div>

            </>
        );
    }
}
