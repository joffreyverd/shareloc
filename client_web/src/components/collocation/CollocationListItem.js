import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Glyphicon} from 'react-bootstrap';

export default ({ id, username, isAdmin, onDelete }) => (

    <li className='list-item'>
        <h3 className='item-name'>{username}</h3>
        
        <div className='icons'>

            <Link to='/collocationView'>
                <Button>
                    <Glyphicon glyph='eye-open'/>
                </Button>
            </Link>

            {isAdmin ?
            <Button onClick={() => onDelete(id)}>
                <Glyphicon glyph='trash'/>
            </Button> : ''
            }

        </div>
    </li>
);
