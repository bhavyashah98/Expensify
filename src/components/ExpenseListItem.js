import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = (props) => (
    <Link className="list-item" to={`/edit/${props.id}`}>
        <div>
            <h3 className="list-item__title">{props.description}</h3>
            <span className="list-item__sub-title">{moment(props.createdAt).format('MMMM Do, YYYY')}</span>
        </div>
        <h3 className="list-item__data">{props.amount}</h3>
    </Link>
);

export default (ExpenseListItem);