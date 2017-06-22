import React from 'react'
import {Link} from 'react-router';

const LeftMenuPageItem = ({details}) => {
        return (
            <li className="c-list_item" id={details.id}>
                <Link to={details.href}>
                    <strong>{details.name}</strong>
                </Link>
            </li>
        )}

export default LeftMenuPageItem;
