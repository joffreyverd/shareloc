import React from 'react';
import ScoringListItem from './ScoringListItem';

export default ({ items = [], onDelete }) => (
    
    <div className='card'>

        <div className='card-identity'>
            <h2 className='card-name'>Classement</h2>
            <img src='/img/scoring.png' className='icon' alt='scoring'/>
        </div>

        <div className='card-identity'>
            <p className='description'>Les plus grands contributeurs sont présents ici.</p>
        </div>

        <ul>
            {items.map(item => <ScoringListItem {...item} onDelete={onDelete} />)}
        </ul>

    </div>
);
