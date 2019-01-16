import React from 'react';
import ProposalListItem from './ProposalListItem';

export default ({ items = [], onDelete, onUpdate }) => (
    
    <div>

        <h3>Liste des propositions</h3>

        <ul>
            {items.map(item => <ProposalListItem {...item} onDelete={onDelete} onUpdate={onUpdate} />)}
        </ul>

    </div>
);
