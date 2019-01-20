import React from 'react';

export default ({ name, task, date }) => (

    <li className='list-item'>

        <h3 className='item-name'>{name}</h3>

        <p className='item-name'>{task}</p>

        <p className='item-name'>{date}</p>

    </li>
);
