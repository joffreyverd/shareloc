import React from 'react';
import {Link} from "react-router-dom";
import {Button, Glyphicon} from 'react-bootstrap';
import ProposalListItem from './ProposalListItem';

export default ({ items = [], onDelete }) => (
    
    <div className="card">

        <div className='card-identity'>
            <h2 className='card-name'>En vote</h2>
            <img src='/img/proposal.png' className='icon'/>
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
