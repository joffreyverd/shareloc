import React from 'react';
import {Link} from "react-router-dom";
import {Button, Glyphicon} from 'react-bootstrap';
import DashboardItem from './DashboardItem';

export default ({ items = [] }) => (
    
    <div className='card-full-width'>

        <div className='card-identity'>
            <h2 className='card-name'>Accompli</h2>
            <img src='/img/done.png' className='icon'/>
        </div>

        <Link to='/newAchievedTask' className='add-item-icon'>
            <Button>
                <Glyphicon glyph='plus'/>
            </Button>
        </Link>

        <ul>
            {items.map(item => <DashboardItem {...item} />)}
        </ul>

    </div>
);
