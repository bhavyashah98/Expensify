export const filterActions = {
    setTextFilter: 'SET_TEXT_FILTER',
    sortByDate: 'SORT_BY_DATE',
    sortByAmount: 'SORT_BY_AMOUNT',
    setStartDate: 'SET_START_DATE',
    setEndDate: 'SET_END_DATE'
};

//try to keep action shape as
// {
//     type: 'ACTION_TYPE',
//     payload: {},
// }
export const setTextFilter = (text = '') => ({
    type: filterActions.setTextFilter,
    payload: {
        text
    }
});

export const sortByDate = () => ({
    type: filterActions.sortByDate,
});

export const sortByAmount = () => ({
    type: filterActions.sortByAmount,
});

export const setStartDate = (startDate) => ({
    type: filterActions.setStartDate,
    payload: {
        startDate
    }
});

export const setEndDate = (endDate) => ({
    type: filterActions.setEndDate,
    payload:{
        endDate
    }
});