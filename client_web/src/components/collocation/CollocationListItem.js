import React from 'react';
import {Link} from "react-router-dom";
import {Button, Glyphicon} from 'react-bootstrap';

export default ({ name, onDelete }) => (

    <li className='list-item'>
        <h3 className='item-name'>{name}</h3>
        
        <div>
            <Link to="/collocationView">
                <Button>
                    <Glyphicon glyph='pencil'/>
                </Button>
            </Link>
            <Button onClick={onDelete}>
                <Glyphicon glyph='trash'/>
            </Button>
        </div>
    </li>
);
