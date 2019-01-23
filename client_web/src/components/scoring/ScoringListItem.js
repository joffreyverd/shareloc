import React from 'react';

export default ({ username, id }) => (

    <li className='list-item'>
        
        <img src='/img/first.png' width='30px' alt='first'/>

        <h3 className='scoring-item-name'>{username}</h3>

        <p className='scoring-item-name'>{id} pts</p>

    </li>
);
