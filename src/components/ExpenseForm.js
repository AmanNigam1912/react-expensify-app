//This expense form page will be reused in AddExpensepage and EditExpensePage

import React from 'react';
import { throws } from 'assert';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
//for react-dates latest version (now 20.1.0) and above, necessary to import the lib in next line
import 'react-dates/initialize';
//css related to react-dates
import 'react-dates/lib/css/_datepicker.css'

//const date = new date();
//get back an instance of moment. If no argument provided in moment()
//now will refer to current point in time
const now = moment();
//using now.format() will print the formatted version of now variable
// console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
    //when edit expense is viewed we only want to show the current values the 
    //expense stores for each field like desc, amount, note, date
    //define state in constructor function to access the props
    constructor(props) {
        super(props);

        /* to track the change to all of these input, use 
        local state component, only when user submits the form we will do sth with that info
        We will send it to redux either to create the expense or edit it */
        this.state = {
            //only description is what they need to add 
            description: props.expense ? props.expense.description: '',
            note:  props.expense ? props.expense.note: '',
            //amount is in cents, so /100 to convert to $ and toString to convert to string from number
            amount: props.expense ? (props.expense.amount / 100).toString() :'',
            //if true, create instance of moment at a specific point in time
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }
    
    onDescriptionChange = (e) => {
        const description = e.target.value;
        //destructuring description
        this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note })); 
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        //!amount will allow the user to clear value after highlighting it completely
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            //  ^\d{1,}(\.\d{0,2})?$
            //the regular expression above means that accepts as many digits between 0-9 it wants
            // takes a . after that and digits with 2 decimal places
            //it also not allows to have . at first by \d{1,} . {1,} means till infinity
            this.setState(() => ({ amount }));
        }
    };
    //this is called with a moment. cretaedAt is initialized with a moment
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({  error: 'Please provide description and amount.' }));
        } else {
            this.setState(() => ({ error: '' }));
            //child component communicates with the parent component
            //this is the parent component which passes the function with all the properties and gets called in child i.e AddExpensePage
            this.props.onSubmit({
                description: this.state.description,
                //amount is in text, so will format to number
                //parseFloat with base 10
                //*100 to get amount in cents
                amount: parseFloat(this.state.amount, 10) * 100,
                //this.state.createdAt is not a timestamp but a moment object
                //.valueOf() will get in timestamp
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };
    render() {
        return (
                <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <input 
                        type="text"
                        //placeholder is used to show sth in input when nothing is typed as yet
                        placeholder="Description"
                        //when we visit that page, automatically puts the focus on the input
                        autoFocus
                        className="text-input"
                        value={this.state.description} //only read's input
                        onChange={this.onDescriptionChange} //will check for any changes done
                    />
                    <input 
                        type="text"
                        placeholder="Amount"
                        className="text-input"
                        //can autoFocus only on one input at a time
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        // date is a moment obj, to show user what is the current date 
                        date={this.state.createdAt}
                        // onDateChange is called when someone picks a date from the calendar 
                        onDateChange={this.onDateChange}
                        // same as above two 
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        //to display num of months. default is 2
                        numberOfMonths={1}
                        //this will make any day available to us be it in past or future
                        isOutsideRange={() => false}
                    />
                    {/* <textarea> tag defines a multi-line text input control. */}
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        className="textarea"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <div>
                        <button className="button">Save Expense</button>    
                    </div>
                </form>
        )
    }
}