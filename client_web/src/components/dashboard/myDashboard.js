import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Glyphicon} from 'react-bootstrap';
import DashboardItem from './DashboardItem';

export default ({ items = [] }) => (
    
    <div className='card'>

        <div className='card-identity'>
            <h2 className='card-name'>Mon activité</h2>
            <img src='/img/done.png' className='icon' alt='done'/>
        </div>

        <div className='card-identity'>
            <p className='description'>Les tâches que vous avez réalisé et validées par les autres membres.</p>
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
