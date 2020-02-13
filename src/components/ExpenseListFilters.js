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
    return (
      <div>
          <input type="text" value={props.filters.text} onChange={(e) => {
              props.setTextFilter(e.target.value);
          }}/>
          <select
            value={props.filters.sortBy}
            onChange={(e) => {
                if(e.target.value === 'date'){
                    props.sortByDate();
                }else{
                    props.sortByAmount()
                }
            }}
          >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
          </select>
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