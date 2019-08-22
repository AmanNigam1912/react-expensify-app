//importing react as we are using jsx
import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { removeExpense } from '../actions/expenses';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
        <Link className="list-item" to={`/edit/${id}`}>
            <div>
                <h3 className="list-item__title">{description}</h3>
                <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
            </div>
            <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')}</h3>
        </Link>        
        /*<button onClick={(e) => {
            dispatch(removeExpense({ id }));
        }}>Remove</button>*/
);

//not required to connect to state as we don't need anything from the store
//dispatch is provided by the spread operator {...expense} from ExpenseList component
//export default connect()(ExpenseListItem);
export default ExpenseListItem;