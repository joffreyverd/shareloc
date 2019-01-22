import React from 'react';
import CollocationListItem from './CollocationListItem';

export default ({ items = [], isAdmin, onDelete, onUpdate }) => (

    <ul className='collocation-list'>
        {items.map(item => <CollocationListItem {...item} isAdmin={isAdmin} onDelete={onDelete} onUpdate={onUpdate} />)}
    </ul>
);
