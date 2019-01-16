import React from 'react';
import {Link} from "react-router-dom";
import HousemateListItem from './HousemateListItem';

export default ({ items = [], onDelete }) => (
        <div>
            <ul>
            {items.map(item => <HousemateListItem {...item} onDelete={onDelete} />)}
            </ul>
            <Link to="/newHousemateView">Add a housemate</Link>
        </div>
);
