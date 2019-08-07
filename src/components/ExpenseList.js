import React from 'react';
//connect your component to the redux store
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

//Regular unconnected component
//this doesn't need to care about store.subscribe() and store.getState()
//taken care by connect of react-redux
const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {/* map use array of something and gives us array of something else 
        we are inserting an array of objects and returning an array of instances of array list item */}
        {
            props.expenses.map((expense) => {
                //the spread operator will be passed as argument to the ExpenseListItem func call where it is destructured
                return <ExpenseListItem key={expense.id} {...expense}/>
            }) 
        }
    </div>
);

//a function that maps the store state to component props or things we want from the store
// this will run automatically when the store changes
//hence getting the fresh values in the component like ExpenseList
const mapStateToProps = (state) => {
    return {
        //ConnectedExpenseList have access to the the expenses property and 
        //can be used in ExpenseList above via props
        //expenses: state.expenses,
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

//get back a function we created earlier
//connect the unconnedted component 'ExpenseList' using a func defined above 'mapStateToProps'
//store.subscribe and store.getState() are done by rect-redux connect functon
export default connect(mapStateToProps)(ExpenseList);