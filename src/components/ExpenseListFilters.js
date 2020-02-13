import React from 'react';
import { connect } from 'react-redux';
import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from "../actions/filters";
import {useState} from 'react';
import {DateRangePicker} from "react-dates";

const ExpenseListFilters = (props) => {
    const [calenderFocused,setCalenderFocused] = useState(null);
    const onDatesChange = ({startDate,endDate}) => {
        props.setStartDate(startDate);
        props.setEndDate(endDate);
    };
    const onFocusChange = (calenderFocused) => {
        setCalenderFocused(calenderFocused);
    };
    const onSortChange = (e) => {
        if (e.target.value === 'date') {
            props.sortByDate();
        } else if (e.target.value === 'amount') {
            props.sortByAmount();
        }
    };
    return (
        <div className="content-container">
            <div className="input-group">
                <div className="input-group__item">
                    <input
                        type="text"
                        className="text-input"
                        placeholder="Search expenses"
                        value={props.filters.text}
                        onChange={(e) => {
                            props.setTextFilter(e.target.value);
                        }}
                    />
                </div>
                <div className="input-group__item">
                    <select
                        className="select"
                        value={props.filters.sortBy}
                        onChange={onSortChange}>
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </select>
                </div>
                <div className="input-group__item">
                    <DateRangePicker
                        startDate={props.filters.startDate}
                        endDate={props.filters.endDate}
                        onDatesChange={onDatesChange}
                        focusedInput={calenderFocused}
                        onFocusChange={onFocusChange}
                        showClearDates={true}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
  return {
      filters: state.filters
  }
};

const mapDispatchToProps = (dispatch,props) => {
    return {
        setTextFilter: (text) => dispatch(setTextFilter(text)),
        sortByAmount: () => dispatch(sortByAmount()),
        sortByDate: () => dispatch(sortByDate()),
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters);