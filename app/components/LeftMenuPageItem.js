import React from 'react'
import {Link} from 'react-router-dom';

const LeftMenuPageItem = ({ details }) => {
    return (
        <li className="c-list_item" id={details.id} name={details.name} href={details.href}>
            <Link to={details.href}>{details.name}</Link>          
        </li>
    )
}

export default LeftMenuPageItem;
