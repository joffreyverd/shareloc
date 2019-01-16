import React from 'react';

export default ({ name, onDelete, onUpdate }) => (
    <li>
        <div>{name}</div>
        <div onClick={onDelete}>delete</div>
    </li>
);

