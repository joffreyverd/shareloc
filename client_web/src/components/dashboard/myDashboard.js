import React from 'react';
import DashboardItem from './DashboardItem';

export default ({ items = [] }) => (
    
    <div className='card-full-width'>

        <div className='card-identity'>
            <h2 className='card-name'>Accompli</h2>
            <img src='/img/done.png' className='icon'/>
        </div>

        <ul>
            {items.map(item => <DashboardItem {...item} />)}
        </ul>

    </div>
);
