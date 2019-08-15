export default (expenses) => {
            //expenses is an array of objects
            //convert it into array of numbers
            //reducing it to a single total amount number
            return expenses
                .map((expense) => expense.amount)
                .reduce((sum, value) => sum + value, 0);
};