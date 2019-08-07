import moment from 'moment';

//timestamps (in milliseconds)
//timestamp 0 = January 1st 1970 (unix epoch)...+ve numbers are going to come afterwards and -ve number before
//33400 is 33.4 seconds after January 1st 1970
//10 is 10 milliseconds after January 1st 1970
//-203 will be a date very late in 1969

//Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        //use query method of moment like isBefore, isSame,etc. they return either true or false
        //const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const createdAtMoment = moment(expense.createdAt);
        //isSameOrBefore 2nd argument is based on day
        //If both startDateMatch and endDateMatch are true they will be kept otherwise they will go away
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true ;
        //const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
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