import React,{useCallback} from 'react';
import { connect } from 'react-redux';
import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from "../actions/filterActions";
import {useState} from 'react';
import {DateRangePicker} from "react-dates";
import {getFilters} from "../reducers/filtersReducer";

const ExpenseListFilters = ({setTextFilter,setStartDate,setEndDate,sortByDate,sortByAmount,filters}) => {
    const [calenderFocused,setCalenderFocused] = useState(null);
    const onDatesChange = useCallback(({startDate,endDate}) => {
        setStartDate(startDate);
        setEndDate(endDate);
    },[setStartDate,setEndDate]);

    const onFocusChange = useCallback((calenderFocused) => {
        setCalenderFocused(calenderFocused);
    },[setCalenderFocused]);

    const onTextChangeFilter = useCallback((e) => {
        setTextFilter(e.target.value);
    },[setTextFilter]);

    const onSortChange = useCallback((e) => {
        if (e.target.value === 'date') {
            sortByDate();
        } else if (e.target.value === 'amount') {
            sortByAmount();
        }
    },[sortByDate,sortByAmount]);

    return (
        <div className="content-container">
            <div className="input-group">
                <div className="input-group__item">
                    <input
                        type="text"
                        className="text-input"
                        placeholder="Search expenses"
                        value={filters.text}
                        onChange={onTextChangeFilter}
                    />
                </div>
                <div className="input-group__item">
                    <select
                        className="select"
                        value={filters.sortBy}
                        onChange={onSortChange}>
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </select>
                </div>
                <div className="input-group__item">
                    <DateRangePicker
                        startDate={filters.startDate}
                        endDate={filters.endDate}
                        onDatesChange={onDatesChange}
                        focusedInput={calenderFocused}
                        onFocusChange={onFocusChange}
                        showClearDates
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
      filters: getFilters(state)
  }
};

export default connect(mapStateToProps,{setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate})(ExpenseListFilters);