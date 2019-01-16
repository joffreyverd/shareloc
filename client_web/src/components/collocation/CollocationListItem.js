import React from 'react';
import {Link} from "react-router-dom";

export default ({ name, onDelete }) => (

    <li>
        <div>{name}</div>
        <Link to="/collocationView">update</Link>
        <div onClick={onDelete}>delete</div>

    </li>
);
