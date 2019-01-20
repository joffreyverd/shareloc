import React from 'react';

export default ({ task, number, total }) => (

    <li className='list-item'>

        <h3 className='item-name'>{task}</h3>

        <p className='item-name'>{number}x</p>

        <p className='item-name'>{total} pts</p>

    </li>
);
