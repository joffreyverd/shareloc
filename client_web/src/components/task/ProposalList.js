import React from 'react';
import {Link} from "react-router-dom";
import {Button, Glyphicon} from 'react-bootstrap';
import ProposalListItem from './ProposalListItem';

export default ({ items = [], onDelete }) => (
    
    <div className="card">

        <h2 className='card-name'>Propositions</h2>

        <ul>
            {items.map(item => <ProposalListItem {...item} onDelete={onDelete} />)}
        </ul>

        <Link to='/newTaskView'>
            <Button>
                <Glyphicon glyph='plus'/>
            </Button>
        </Link>

    </div>
);
