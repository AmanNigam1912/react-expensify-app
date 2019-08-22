import uuid from 'uuid';
import database from '../firebase/firebase';

//ADD_EXPENSE
//all three will be named exports
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

//the type: 'ADD_EXPENSE' changes redux store
//startAddExpense will start that process, it will dispatch addExpense and hence change redux store
export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        //destructuring
        const  {
            //default values
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0 
        } = expenseData;
        const expense = { description, note, amount, createdAt };

        //then case gets called with a reference or ref
        database.ref('expenses').push(expense).then((ref) => {
            //to change the redux store we need to dispatch otherwise it will never change
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

//REMOVE_EXPENSE
export const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});