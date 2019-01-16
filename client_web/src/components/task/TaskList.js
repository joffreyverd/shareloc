import React from 'react';
import {Link} from "react-router-dom";
import TaskListItem from './TaskListItem';

export default ({ items = [], onDelete, onUpdate }) => (
    
    <div>

        <h2>Liste des tâches</h2>

        <ul>
            {items.map(item => <TaskListItem {...item} onDelete={onDelete} onUpdate={onUpdate} />)}
        </ul>
        
        <Link to="/newTaskView">Ajouter une tâche</Link>

    </div>
);
