import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses'

const EditExpensePage = (props) => {
    return (
        <div>
            {/* in dev tools the :id value given in url say 99 is present in match->params->id:"99" 
            this makes the app dynamic
            Editing the expense with the id of {props.match.params.id}*/}
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.match.params.id, expense));
                    props.history.push('/');
                }}
            />
            <button onClick={(e) =>{
                props.dispatch(removeExpense({ id: props.expense.id }));
                props.history.push('/');
            }}>Remove</button>
        </div>
    );
};

//give component the current expense object
//use some current props passed into the HOC
//we can use them to calculate the props that we want to add on  
const mapStateToProps = (state, props) => {
    return {
        //find allows us to search for single item
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        })        
    };
};

export default connect(mapStateToProps)(EditExpensePage);