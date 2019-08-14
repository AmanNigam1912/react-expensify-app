//importing react as we are using jsx
import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { removeExpense } from '../actions/expenses';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>
            {numeral(amount / 100).format('$0,0.00')}
            -
            {moment(createdAt).format('MMMM Do, YYYY')}        
        </p>
        {/*<button onClick={(e) => {
            dispatch(removeExpense({ id }));
        }}>Remove</button>*/}
    </div>
);

//not required to connect to state as we don't need anything from the store
//dispatch is provided by the spread operator {...expense} from ExpenseList component
//export default connect()(ExpenseListItem);
export default ExpenseListItem;