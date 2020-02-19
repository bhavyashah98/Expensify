import {createStore, combineReducers} from "redux";
import expensesReducer from "../reducers/expensesReducer";
import filtersReducer from "../reducers/filtersReducer";
import {loadState, saveState} from "../models/localstorage";
import throttle from 'lodash/throttle';

/*
*  state: {
*   expenses: {...},
*   filters: {...},
*  }
* */

export default () => {
    const persistedState = loadState();
    const expenseApp = combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    });
    const store = createStore(expenseApp,persistedState);

    store.subscribe(throttle(() => {
        saveState({
            expenses: store.getState().expenses
        })
    },1000));
    return store;
}
