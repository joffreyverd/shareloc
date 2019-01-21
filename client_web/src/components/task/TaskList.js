import React from 'react';
import TaskListItem from './TaskListItem';

export default ({ items = [], onDelete, onUpdate }) => (
    
    <div className='card'>

        <div className='card-identity'>
            <h2 className='card-name'>Tâches</h2>
            <img src='/img/task.png' className='icon' alt='task'/>
        </div>

        <div className='card-identity'>
                <p className='description'>Les tâches votées par tous les membres.</p>
        </div>

        <ul>
            {items.map(item => <TaskListItem {...item} onDelete={onDelete} onUpdate={onUpdate} />)}
        </ul>

    </div>
);
