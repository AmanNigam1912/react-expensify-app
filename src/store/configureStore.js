//applyMiddleware required to add redux-thunk
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expenses'; 
import filtersReducer from '../reducers/filters';
//allows us to create async actions
//do async stuff like firebase data call
//use dispatch to change redux store
import thunk from 'redux-thunk'; 

//used to preserve the functionality of devtools and not to lose them
//if devtools exists, use it else use compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};
