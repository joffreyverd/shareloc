import React from 'react';
import '../../css/collocation.css';
import { getMethod, putMethod, deleteMethod } from '../../components/httpMethods';
import { checkStatus } from '../../components/Utils';
import Logo from '../../components/Logo';
import HousemateList from '../../components/housemate/HousemateList';
import TaskList from '../../components/task/TaskList';
import UnapprouvedTaskList from '../../components/task/ProposalList';
import AchievedTaskList from '../../components/achievedTask/AchievedTaskList'
import Scoring from '../../components/scoring/ScoringList';
import Dashboard from '../../components/dashboard/myDashboard';

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
    state = {
        collocationName: 'Ma collocation',
        isCollocationAdmin: true,
        HousemateObject: [],
        TaskObject: [],
        AchievedObject: [],
        ProposalObject: [],
        DashboardObject: [],
        ScoringObject: []
    }

    /*
    **************************** GENERAL METHODS ****************************
    */

    componentDidMount() {
        getMethod('http://jsonplaceholder.typicode.com/users')
        .then(checkStatus)
        .then((res) => res.json())
        .then((data) => {
            this.setState({ 
                HousemateObject: data
            });
        })
        .catch(() => this.setState({ 
            HousemateObject: null
        }));

        getMethod('http://jsonplaceholder.typicode.com/users')
        .then(checkStatus)
        .then((res) => res.json())
        .then((data) => {
            this.setState({ 
                TaskObject: data
            });
        })
        .catch(() => this.setState({ 
            TaskObject: null
        }));
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { history } = this.props;
        history.push('/collocationView');
    }

    /*
     **************************** HOUSEMATE METHODS ****************************
     */

    deleteHousemate = (e) => {
        deleteMethod('lol');
    }

    deleteTask = (e) => {
        deleteMethod('lol');
    }

    /*
     **************************** PROPOSAL METHODS ****************************
     */

    acceptUnapprouvedTask = (e) => {
        putMethod('lol');
    }

    refuseUnapprouvedTask = (e) => {
        putMethod('lol');
    }

    /*
     **************************** ACHIEVED TASKS METHODS ****************************
     */

    acceptAchievedTask = (e) => {
        putMethod('lol');
    }

    refuseAchievedTask = (e) => {
        putMethod('lol');
    }

    render() {
        return(
            <>
                <Logo/>

                <h1 className='main-title'>{this.state.collocationName}</h1>

                <div className='collocations_components'>
                    <HousemateList
                        items={this.state.HousemateObject}
                        isAdmin={this.state.isCollocationAdmin}
                        onDelete={this.deleteHousemate}
                    />

                    <TaskList
                        items={this.state.TaskObject}
                        isAdmin={this.state.isCollocationAdmin}
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
