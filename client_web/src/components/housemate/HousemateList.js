import React from 'react';
import {Link} from "react-router-dom";
import {Button, Glyphicon} from 'react-bootstrap';
import HousemateListItem from './HousemateListItem';

export default ({ items = [], onDelete }) => (
        
        <div className="card">

            <div className='card-identity'>
                <h2 className='card-name'>Membres</h2>
                <img src='/src/ressources/img/first.png'/>
            </div>

            <ul>
                {items.map(item => <HousemateListItem {...item} onDelete={onDelete} />)}
            </ul>

            <Link to="/newHousemateView">
                <Button>
                    <Glyphicon glyph='plus'/>
                </Button>
            </Link>

        </div>
);
