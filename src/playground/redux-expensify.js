//cobineReducders help to combine multiple reducers to create a single store
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


//Action functions
//ADD_EXPENSE
const addExpense = (
    { 
        //default values
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//REMOVE_EXPENSE
const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

//SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

//SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

//Expenses Reducer
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            //push will change the action but we want to read from them
            //not to be used here
            //state.push(action.expense);
            //array's concat method doesn't change the length of the array
            //but adds the element to the array
            //return state.concat(action.expense);

            //use spread operator
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            //filter doesn't change the array it returns a new array with changes done
            return state.filter(({ id }) => {
                //if true the item will be kept
                //if false item will be filtered or removed
                return id !== action.id;
            });
        case 'EDIT_EXPENSE':
            return state.map ((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        //next line will override the properties of expense with those mentioned in updates
                        ...action.updates
                    }
                } else {
                    return expense;
                };
            })  ; 
        default:
            return state;
    }
};

//Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }; 
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }                
        default:
            return state;
    }
};

//timestamps (in milliseconds)
//timestamp 0 = January 1st 1970 (unix epoch)...+ve numbers are going to come afterwards and -ve number before
//33400 is 33.4 seconds after January 1st 1970
//10 is 10 milliseconds after January 1st 1970
//-203 will be a date very late in 1969

//Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            // 1 means b will come first in the list and a next
            //so will be with -1, a will come first
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if(sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

//Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

//dispatch an action
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

//store.dispatch(setTextFilter('e'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
//store.dispatch(setEndDate(999));

const demoState = {
    expenses: [{
        id: 'oigvhjbkncjkghh',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 48000, //in cents
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};


//example of object spread operator
// const user = {
//     name: 'Jen',
//     age: 24
// };

// //inside of object spread out object
// console.log({
//     ...user,
//     location: 'Boston',
//     age: 27
// });