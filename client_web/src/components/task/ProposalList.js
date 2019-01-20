import React from 'react';
import {Link} from "react-router-dom";
import {Button, Glyphicon} from 'react-bootstrap';
import ProposalListItem from './ProposalListItem';

export default ({ items = [], onDelete }) => (
    
    <div className="card">

        <div className='card-identity'>
            <h2 className='card-name'>Voter une tâche</h2>
        </div>

        <div className='card-identity'>
            <p className='description'>Acceptez ou refusez ces propositions pour en faire des tâches.</p>
        </div>

        <ul>
            {items.map(item => <ProposalListItem {...item} onDelete={onDelete} />)}
        </ul>

        <Link to='/newTaskView' className='add-item-icon'>
            <Button>
                <Glyphicon glyph='plus'/>
            </Button>
        </Link>

    </div>
);
