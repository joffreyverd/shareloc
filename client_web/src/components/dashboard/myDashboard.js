import React from 'react';
import DashboardItem from './DashboardItem';

export default ({ items = [] }) => (
    
    <div className='card-full-width'>

        <div className='card-identity'>
            <h2 className='card-name'>Mes accomplissements</h2>
            <img src='/src/ressources/img/first.png'/>
        </div>

        <ul>
            {items.map(item => <DashboardItem {...item} />)}
        </ul>

    </div>
);
