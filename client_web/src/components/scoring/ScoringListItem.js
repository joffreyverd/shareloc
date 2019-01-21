import React from 'react';

export default ({ name, score }) => (

    <li className='list-item'>
        
        <img src='/img/first.png' width='30px' alt='first'/>

        <h3 className='scoring-item-name'>{name}</h3>

        <p className='scoring-item-name'>{score} pts</p>

    </li>
);
