//createStore is called once to create the store
//store will track the changing data over time
import { createStore } from 'redux';

//Action generators: functions that return action objects

// const incrementCount = () => {
//     return {
//         type: 'INCREMENT'
//     };
// };

//use shorthand
//use default payload ad an empty object so that when no argument is passes we
//still access a property of empty object rather than 
//property of an undefined object
const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    //incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

//Reducers

// createStore expect a function as argum
//argum to function is state i.e. the current state. Similar to setState
// this.setState((prevState) => {
//     return prevState;
// });
//initially no state, so start with default an obj with count=0
//2nd argum is the action coming from dispatch
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            //const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy
            };
        //required action comes here    
        case 'SET':
            return {
                count: action.count
            };    
        case 'RESET':
            return {
                count: 0
            };         
        default:
            return state;        
    }
};

const store = createStore(countReducer);

//this func gets called every single time the store changes
// store.subscribe(() => {
//     //getState() return a current state obj
// console.log(store.getState());
// });

//to unsubscribe from store changes
const unsubscribe = store.subscribe(() => {
    //getState() return a current state obj
    console.log(store.getState());
});

//ACTIONS
//to change the value of a store we use Actions
//Actions is an object that gets sent to the store
//obj describes the type of action we would like to take
//actions like increment decrement, reset 
//to change store overtime

//to send action object to store
// store.dispatch(
// //action object
// {
//     //type in capitals as it is a convention in redux for action type names
//     //if multiple word type use _ to separate them
//     type: 'INCREMENT',
//     //dynamic information passed inside action object
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }))

// unsubscribe();

// store.dispatch({
//     type: 'INCREMENT'
// });

store.dispatch(incrementCount());

// store.dispatch({
//     type: 'RESET'
// });

store.dispatch(resetCount());

// store.dispatch({
//     type: 'DECREMENT'
// });

store.dispatch(decrementCount());

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

store.dispatch(decrementCount({ decrementBy: 10 }));

//actions for required type, use it directly rather than checking them if they exists
// store.dispatch({
//     type: 'SET',
//     count: 101
// });

store.dispatch(setCount({ count: 101 }));