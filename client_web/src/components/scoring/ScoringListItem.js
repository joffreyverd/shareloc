import React from 'react';

export default ({ name, score }) => (

    <li className='list-item'>
        
        <img src='/img/first.png' width='30px' alt='lol'/>

        <h3 className='item-name'>{name}</h3>

        <p className='item-name'>{score} pts</p>

    </li>
);
