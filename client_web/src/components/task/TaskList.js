import React from 'react';
import TaskListItem from './TaskListItem';

export default ({ items = [], onDelete, onUpdate }) => (
    
    <div className='card'>

        <div className='card-identity'>
            <h2 className='card-name'>Tâches</h2>
            <img src='/img/task.png' className='icon'/>
        </div>

        <ul>
            {items.map(item => <TaskListItem {...item} onDelete={onDelete} onUpdate={onUpdate} />)}
        </ul>

    </div>
);
