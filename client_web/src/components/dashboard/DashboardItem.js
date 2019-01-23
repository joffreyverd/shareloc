import React from 'react';

export default ({ username, id }) => (

    <li className='list-item'>

        <h3 className='dashboard-item-name-title'>{username}</h3>

        <p className='dashboard-item-name'>{id}x</p>

        <p className='dashboard-item-name'>{id} pts</p>

    </li>
);
