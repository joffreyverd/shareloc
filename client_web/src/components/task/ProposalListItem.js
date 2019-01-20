import React from 'react';
import {Button, Glyphicon} from 'react-bootstrap';

export default ({ name, score, onDelete }) => (

    <li className='list-item'>

        <h3 className='item-name'>{name}</h3>

        <p className='item-name'>{score} pts</p>

        <Button onClick={onDelete}>
            <Glyphicon glyph='trash'/>
        </Button>
        
    </li>
);
