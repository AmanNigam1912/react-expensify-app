import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export const AddExpensePage = (props) => (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Add Expense</h1>    
            </div>
        </div>
        <div className="content-container">
            <ExpenseForm 
                //when form gets submitted with valid data
                //we get that data back. expense object back with all properties on it
                //like description, amount, createdAt, note
                onSubmit={(expense) => {
                    props.dispatch(startAddExpense(expense));
                    //.history is available from dev tools in chrome
                    //react tab--> search for AddExpensePage --> click on it
                    //on RHS se props like dispatch, history, location, match
                    //history has method push
                    //push helps to programatically change pages
                    //it takes the path you want to switch to using route
                    //prevents full page refresh using browsing routing
                    props.history.push('/');
                }}
            />
        </div>
    </div>
);

export default connect()(AddExpensePage);

// export class AddExpensePage extends React.Component {
//     onSubmit = (expense) => {
//         this.props.startAddExpense(expense);
//         this.props.history.push('/');
//     };
//     render () {
//         return (
//             <div>
//                 <h1>Add Expense</h1>
//                 <ExpenseForm 
//                     onSubmit={this.onSubmit}
//                 />
//             </div>
//         );
//     }
// }

// const mapDispatchToProps = (dispatch) => ({
//     startAddExpense: (expense) => dispatch(startAddExpense(expense))
// });

// export default connect(undefined, mapDispatchToProps)(AddExpensePage);