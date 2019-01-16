import React from 'react';
import {Link} from "react-router-dom";

export default ({ name, onDelete }) => (

    <li>
        <div>{name}</div>
        <Link to="/taskView">update</Link>
        <div onClick={onDelete}>delete</div>

    </li>
);
