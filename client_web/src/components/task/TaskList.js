import React from 'react';
import TaskListItem from './TaskListItem';

export default ({ items = [], onDelete, onUpdate }) => (
    
    <div className='card'>

        <h2 className='card-name'>Tâches</h2>

        <ul>
            {items.map(item => <TaskListItem {...item} onDelete={onDelete} onUpdate={onUpdate} />)}
        </ul>

    </div>
);
