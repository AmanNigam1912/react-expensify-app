import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// store.dispatch(addExpense({ description: 'Water bill', amount: 4500, createdAt: 150}));
// store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 48000, createdAt: 50 }));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000);

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

// console.log(store.getState());

//Provider provides store to all components that make up our application
//so we do not manually pass the store around
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

//ReactDOM.render(<AppRouter />, document.getElementById('app'));
ReactDOM.render(jsx, document.getElementById('app'));