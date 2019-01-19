import React from 'react';
import TaskList from '../../components/task/TaskList';
import UnapprouvedTaskList from '../../components/task/ProposalList';

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

export default class Tasks extends React.Component {

    deleteTask = (e) => {
        alert('delete');
    }

    updateTask = (e) => {
        alert('update');
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { history } = this.props;
        history.push('/tasks');
    }

    render() {
        return(
            <>
                <h1>Tâches</h1>
        
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
            </>
        );
    }
}
