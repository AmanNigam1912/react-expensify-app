import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            //when form gets submitted with valid data
            //we get that data back. expense object back with all properties on it
            //like description, amount, createdAt, note
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense));
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
);

export default connect()(AddExpensePage);