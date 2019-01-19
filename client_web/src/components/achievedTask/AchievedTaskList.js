import React from 'react';
import AchievedTaskListItem from './AchievedTaskListItem';

export default ({ items = [], onDelete }) => (
    
    <div className='card-full-width'>

        <div className='card-identity'>
            <h2 className='card-name'>Scoring</h2>
            <img src='/img/scoring.png' className='icon'/>
        </div>

        <ul>
            {items.map(item => <AchievedTaskListItem {...item} onDelete={onDelete} />)}
        </ul>

    </div>
);