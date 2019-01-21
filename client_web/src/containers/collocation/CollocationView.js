import React from 'react';
import '../../css/collocation.css';
import Logo from '../../components/Logo';
import HousemateList from '../../components/housemate/HousemateList';
import TaskList from '../../components/task/TaskList';
import UnapprouvedTaskList from '../../components/task/ProposalList';
import AchievedTaskList from '../../components/achievedTask/AchievedTaskList'
import Scoring from '../../components/scoring/ScoringList';
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
        name: 'Etendre le linge',
        score: 10
    },
    {
        name: 'Laver les WC',
        score: 40
    }
];

const ScoringObject = [
    {
        name: 'Stevy',
        score: 127
    },
    {
        name: 'Thomas',
        score: 115
    },
    {
        name: 'Benjamin',
        score: 91
    },
    {
        name: 'Joffrey',
        score: 60
    }
];

const AchievedObject = [
    {
        name: 'Stevy',
        task: 'Faire la vaisselle',
        date: '14/01/2018'
    },
    {
        name: 'Joffrey',
        task: 'Faire la vaisselle',
        date: '18/01/2018'
    }
];

const DashboardObject = [
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

    acceptUnapprouvedTask = (e) => {
        alert('accept');
    }

    refuseUnapprouvedTask = (e) => {
        alert('refuse');
    }

    acceptAchievedTask = (e) => {
        alert('accept');
    }

    refuseAchievedTask = (e) => {
        alert('refuse');
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { history } = this.props;
        history.push('/collocationView');
    }

    render() {
        return(
            <>
                <Logo/>

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
                </div>

                <UnapprouvedTaskList
                    items={ProposalObject}
                    onAccept={this.acceptUnapprouvedTask}
                    onRefuse={this.refuseUnapprouvedTask}
                />
                
                <AchievedTaskList
                    items={AchievedObject}
                    onAccept={this.acceptAchievedTask}
                    onRefuse={this.refuseAchievedTask}
                />

                <div className='dashboard-component'>
                    <Dashboard
                        items={DashboardObject}
                    />
                    
                    <Scoring
                        items={ScoringObject}
                    />
                </div>
            </>
        );
    }
}
