import moment from 'moment';
import {filterActions} from "../actions/filterActions";

/*
    state: {
        expenses
        filters
    }
 */

export const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
};

export const getFilters = (state) => state.filters;

export default (state = filtersReducerDefaultState, {type,payload}) => {
    switch (type) {
        case filterActions.setTextFilter:
            return {
                ...state,
                text: payload.text
            };
        case filterActions.sortByAmount:
            return {
                ...state,
                sortBy: 'amount'
            };
        case filterActions.sortByDate:
            return {
                ...state,
                sortBy: 'date'
            };
        case filterActions.setStartDate:
            return {
                ...state,
                startDate: payload.startDate
            };
        case filterActions.setEndDate:
            return {
                ...state,
                endDate: payload.endDate
            };
        default:
            return state;
    }
}