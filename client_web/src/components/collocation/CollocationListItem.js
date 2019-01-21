import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Glyphicon} from 'react-bootstrap';

export default ({ name, onDelete }) => (

    <li className='list-item'>
        <h3 className='item-name'>{name}</h3>
        
        <div className='icons'>
            <Link to='/collocationView'>
                <Button>
                    <Glyphicon glyph='eye-open'/>
                </Button>
            </Link>
            <Button onClick={onDelete}>
                <Glyphicon glyph='trash'/>
            </Button>
        </div>
    </li>
);
