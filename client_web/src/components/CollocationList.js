import React from 'react';
import CollocationListItem from './CollocationListItem';

export default ({ items = [], onDelete, onUpdate }) => (
    
    <ul>
        {items.map(item => <CollocationListItem {...item} onDelete={onDelete} onUpdate={onUpdate} />)}
    </ul>
);
