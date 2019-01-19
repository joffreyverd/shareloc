import React from 'react';
import {Link} from "react-router-dom";
import {Button, Glyphicon} from 'react-bootstrap';
import '../../ressources/css/collocation.css';
import HousemateList from '../../components/housemate/HousemateList';
import TaskList from '../../components/task/TaskList';
import UnapprouvedTaskList from '../../components/task/ProposalList';
import Scoring from '../../components/achievedTask/AchievedTaskList';
import Dashboard from '../../components/dashboard/myDashboard';

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

const ProposalObject = [
    {
        name: 'Etendre le linge'
    },
    {
        name: 'Laver les WC'
    }
];

const scoringObject = [
    {
        name: 'Stevy',
        score: '127 pts'
    },
    {
        name: 'Thomas',
        score: '115 pts'
    },
    {
        name: 'Benjamin',
        score: '91 pts'
    },
    {
        name: 'Joffrey',
        score: '60 pts'
    }
];

const dashboardObject = [
    {
        task: 'Faire la vaisselle',
        number: 6,
        total: 15
    },
    {
        task: 'Passer l\'aspirateur',
        number: 3,
        total: 45
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
                <div className='logo'>
                    <img src='/img/logo.png'/>
                    <p>ShareLoc</p>
                </div>

                <h1 className='main-title'>Ma collocation</h1>

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
                        items={ProposalObject}
                        onDelete={this.deleteUnapprouvedTask}
                    />
                </div>

                <div className='dashboard-component'>
                    <Scoring
                        items={scoringObject}
                    />

                    <Dashboard
                        items={dashboardObject}
                    />
                </div>
            </>
        );
    }
}
