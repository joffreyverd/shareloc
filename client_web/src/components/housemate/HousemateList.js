import React from 'react';
import {Link} from "react-router-dom";
import HousemateListItem from './HousemateListItem';

export default ({ items = [], onDelete }) => (
        
        <div>

            <h2>Liste des collocataires</h2>

            <ul>
            {items.map(item => <HousemateListItem {...item} onDelete={onDelete} />)}
            </ul>

            <Link to="/newHousemateView">Ajouter un collocataire</Link>

        </div>
);
