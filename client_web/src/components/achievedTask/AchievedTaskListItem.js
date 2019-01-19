import React from 'react';

export default ({ name, score }) => (

    <li className='list-item'>
        
        <img src='/src/ressources/img/first.png' alt='lol'/>

        <h3 className='item-name'>{name}</h3>

        <p className='item-name'>{score}</p>

    </li>
);
