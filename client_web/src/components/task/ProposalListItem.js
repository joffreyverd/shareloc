import React from 'react';
import {Button, Glyphicon} from 'react-bootstrap';

export default ({ name, score, onAccept, onRefuse }) => (

    <li className='list-item'>

        <h3 className='proposal-item-name-title'>{name}</h3>

        <p className='proposal-item-name'>{score} pts</p>

        <div>
            <Button onClick={onAccept}>
                <Glyphicon glyph='ok' className='accept-icon'/>
            </Button>

            <Button onClick={onRefuse}>
                <Glyphicon glyph='remove' className='refuse-icon'/>
            </Button>
        </div>
        
    </li>
);
