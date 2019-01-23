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
        //get the HousemateObject
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

        //get the TaskObject
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

        //get the ProposalObject
        getMethod('http://jsonplaceholder.typicode.com/users')
        .then(checkStatus)
        .then((res) => res.json())
        .then((data) => {
            this.setState({ 
                ProposalObject: data
            });
            console.log(data);
        })
        .catch(() => this.setState({ 
            ProposalObject: null
        }));

        //get the AchievedObject
        getMethod('http://jsonplaceholder.typicode.com/users')
        .then(checkStatus)
        .then((res) => res.json())
        .then((data) => {
            this.setState({ 
                AchievedObject: data
            });
        })
        .catch(() => this.setState({ 
            AchievedObject: null
        }));

        //get the AchievedObject
        getMethod('http://jsonplaceholder.typicode.com/users')
        .then(checkStatus)
        .then((res) => res.json())
        .then((data) => {
            this.setState({ 
                ScoringObject: data
            });
        })
        .catch(() => this.setState({ 
            ScoringObject: null
        }));

        //get the AchievedObject
        getMethod('http://jsonplaceholder.typicode.com/users')
        .then(checkStatus)
        .then((res) => res.json())
        .then((data) => {
            this.setState({ 
                DashboardObject: data
            });
        })
        .catch(() => this.setState({ 
            DashboardObject: null
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
                    items={this.state.ProposalObject}
                    onAccept={this.acceptUnapprouvedTask}
                    onRefuse={this.refuseUnapprouvedTask}
                />
                
                <AchievedTaskList
                    items={this.state.AchievedObject}
                    onAccept={this.acceptAchievedTask}
                    onRefuse={this.refuseAchievedTask}
                />

                <div className='dashboard-component'>
                    <Dashboard items={this.state.DashboardObject}/>
                    <Scoring items={this.state.ScoringObject}/>
                </div>
            </>
        );
    }
}
