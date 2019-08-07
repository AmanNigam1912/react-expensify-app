//Expenses Reducer
const expensesReducerDefaultState = []
export default (state = expensesReducerDefaultState, action) => {
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