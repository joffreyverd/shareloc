import React from 'react';

export default ({ task, number, total }) => (

    <li className='list-item'>

        <h3 className='dashboard-item-name-title'>{task}</h3>

        <p className='dashboard-item-name'>{number}x</p>

        <p className='dashboard-item-name'>{total} pts</p>

    </li>
);
