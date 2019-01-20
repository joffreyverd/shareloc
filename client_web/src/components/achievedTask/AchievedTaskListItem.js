import React from 'react';
import {Button, Glyphicon} from 'react-bootstrap';

export default ({ name, task, date, onAccept, onRefuse }) => (

    <li className='list-item'>

        <h3 className='achieved-item-name-title'>{name}</h3>

        <p className='achieved-item-name-title'>{task}</p>

        <p className='achieved-item-name'>{date}</p>

        <p className='achieved-item-name'>2/4</p>

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
