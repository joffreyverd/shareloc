import React from 'react';
import {Button, Glyphicon} from 'react-bootstrap';

export default ({ username, onDelete }) => (

    <li className='list-item'>
        
        <h3 className='item-name'>{username}</h3>

        <Button onClick={onDelete}>
            <Glyphicon glyph='trash'/>
        </Button>

    </li>
);
