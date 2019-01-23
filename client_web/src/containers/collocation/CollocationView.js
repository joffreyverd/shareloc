import React from 'react';
import '../../css/collocation.css';
import api from '../../components/httpMethods';
import Logo from '../../components/Logo';
import HousemateList from '../../components/housemate/HousemateList';
import TaskList from '../../components/task/TaskList';
import UnapprouvedTaskList from '../../components/task/ProposalList';
import AchievedTaskList from '../../components/achievedTask/AchievedTaskList'
import Scoring from '../../components/scoring/ScoringList';
import Dashboard from '../../components/dashboard/myDashboard';

export default class CollocationView extends React.Component {
    state = {
        collocationName: 'Ma collocation',
        isCollocationAdmin: true,
        housemate: [],
        task: [],
        achieved: [],
        proposal: [],
        dashboard: [],
        scoring: []
    }

    /*
    **************************** GENERAL METHODS ****************************
    */

    componentDidMount() {
        //get the housemate
        api.get('/users').then(housemate => {
            this.setState({ housemate });
        });

        //get the task
        api.get('/users').then(task => {
            this.setState({ task });
        });

        //get the proposal
        api.get('/users').then(proposal => {
            this.setState({ proposal });
        });

        //get the achieved
        api.get('/users').then(achieved => {
            this.setState({ achieved });
        });

        //get the scoring
        api.get('/users').then(scoring => {
            this.setState({ scoring });
        });

        //get the dashboard
        api.get('/users').then(dashboard => {
            this.setState({ dashboard });
        });
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
        api.delete('/users').then(
            console.log('Supprimer element du tableau')
        )
    }

    deleteTask = (e) => {
        api.delete('/users').then(
            console.log('Supprimer element du tableau')
        )
    }

    /*
     **************************** PROPOSAL METHODS ****************************
     */

    acceptUnapprouvedTask = (e) => {
        api.put('/users').then(
            console.log('Supprimer element du tableau')
        )
    }

    refuseUnapprouvedTask = (e) => {
        api.put('/users').then(
            console.log('Supprimer element du tableau')
        )
    }

    /*
     **************************** ACHIEVED TASKS METHODS ****************************
     */

    acceptAchievedTask = (e) => {
        api.put('/users').then(
            console.log('Supprimer element du tableau')
        )
    }

    refuseAchievedTask = (e) => {
        api.put('/users').then(
            console.log('Supprimer element du tableau')
        )
    }

    render() {
        const { housemate, task, proposal, achieved, dashboard, scoring } = this.state

        return(
            <>
                <Logo/>

                <h1 className='main-title'>{this.state.collocationName}</h1>

                <div className='collocations_components'>
                    <HousemateList
                        items={housemate}
                        isAdmin={this.state.isCollocationAdmin}
                        onDelete={this.deleteHousemate}
                    />

                    <TaskList
                        items={task}
                        isAdmin={this.state.isCollocationAdmin}
                        onDelete={this.deleteTask}
                    />
                </div>

                <UnapprouvedTaskList
                    items={proposal}
                    onAccept={this.acceptUnapprouvedTask}
                    onRefuse={this.refuseUnapprouvedTask}
                />
                
                <AchievedTaskList
                    items={achieved}
                    onAccept={this.acceptAchievedTask}
                    onRefuse={this.refuseAchievedTask}
                />

                <div className='dashboard-component'>
                    <Dashboard items={dashboard}/>
                    <Scoring items={scoring}/>
                </div>
            </>
        );
    }
}
