import React from 'react';
import {Link} from 'react-router-dom';
import api from '../../components/httpMethods';
import {Button, Glyphicon} from 'react-bootstrap';
import CollocationList from '../../components/collocation/CollocationList';
import Logo from '../../components/Logo';

export default class Collocations extends React.Component {
    state = {
        userName: 'Joffrey',
        isCollocationAdmin: true,
        collocations: []
    }

    componentDidMount() {
        //get the collocationsObject
        api.get('/users').then(collocations => {
            this.setState({ collocations });
        });
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const { history } = this.props;
        history.push('/housemates');
    }

    deleteCollocation = (id) => {        
        //api.delete('/users').then(() => {
            this.setState({
                collocations: this.state.collocations.filter(collocationsElement => collocationsElement.id !== id)
            });
        //});
    }

    render() {
        const { collocations, isCollocationAdmin } = this.state;

        console.log(collocations);

        return(
            <>
                <Logo/>
                
                <h1 className='main-title'>Mes espaces</h1>
                
                <div className='card'>
                    <CollocationList
                        items={collocations}
                        isAdmin={isCollocationAdmin}
                        onDelete={this.deleteCollocation}
                        onUpdate={this.updateCollocation}
                    />

                    {isCollocationAdmin &&
                    <Link to='/newCollocation' className='add-item-icon'>
                        <Button>
                            <Glyphicon glyph='plus'/>
                        </Button>
                    </Link>
                    }

                </div>
            </>
        );
    }
}
