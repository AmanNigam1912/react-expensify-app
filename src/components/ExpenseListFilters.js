import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

//we need state hence we use class based component
class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    //called with an object
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };
    render() {
        //this component not only reads from redux store but also write to it as well
        return (
            <div>
                {/* onChange takes a func and when input changes, func gets fired*/}
                <input 
                    type="text" 
                    //text in props.filters.text is coming from filters reducer--> filtersReducerDefaultState
                    //since we changed from stateless functional component to class based component
                    //we need to use this.props everywhere
                    value={this.props.filters.text} 
                    onChange={(e) => {
                        //next line will append to whatever value that it currently has and will change the results accordingly
                        //like bill is shown so we can append e or any other letter to it 
                        //so it will be bille in the input box
                        //in dev tools of browser under React toolbar if we keep going inside and finaaly 
                        //reach ExpenseListFilters tag we have access to dispatch as well along with filters object which is provide in mapStateToProps func
                        //dispatch is same as the dispatch we access on the store
                        //setTextFilter is what we need 
                        //e.target.value is what we are currently print to the screen
                        this.props.dispatch(setTextFilter(e.target.value));
                    }}
                />
                {/* select tag is used to create drop down list*/}
                <select 
                //setting up value, onChange() are known as controlled input by JavaScript
                    value={this.props.filters.sortBy} 
                    onChange={(e) => {
                        e.target.value === 'date' ? this.props.dispatch(sortByDate()) : this.props.dispatch(sortByAmount())              
                    }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDateId="MyDatePickerStart"
                    endDateId="MyDatePickerEnd"
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />    
            </div>
        );        
    }

}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

//connect ExpenseListFilters to store 
export default connect(mapStateToProps)(ExpenseListFilters);