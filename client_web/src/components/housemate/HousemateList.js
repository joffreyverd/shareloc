import React from 'react';
import {Link} from "react-router-dom";
import {Button, Glyphicon} from 'react-bootstrap';
import HousemateListItem from './HousemateListItem';

export default ({ items = [], onDelete }) => (
        
        <div className="card">

            <div className='card-identity'>
                <h2 className='card-name'>Membres</h2>
                <img src='/img/team.png' className='icon'/>
            </div>

            <div className='card-identity'>
                <p className='description'>Voici la liste des membres de votre collocation.</p>
            </div>

            <ul>
                {items.map(item => <HousemateListItem {...item} onDelete={onDelete} />)}
            </ul>

            <Link to="/newHousemateView"className='add-item-icon'>
                <Button>
                    <Glyphicon glyph='plus'/>
                </Button>
            </Link>

        </div>
);
