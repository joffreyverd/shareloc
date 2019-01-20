import React from 'react';
import AchievedTaskListItem from './AchievedTaskListItem';

export default ({ items = [] }) => (

    <div className='card'>

        <div className='card-identity'>
            <h2 className='card-name'>Travail accompli ?</h2>
        </div>

        <div className='card-identity'>
            <p className='description'>Validez ou refusez ces tâches accomplies par vos collocataires.</p>
        </div>

        <ul>
            {items.map(item => <AchievedTaskListItem {...item} />)}
        </ul>

    </div>

);
