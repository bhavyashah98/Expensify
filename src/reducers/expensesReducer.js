import {expenseActions} from "../actions/expenseActions";
//immutability-helper

/*
    state: {
        expenses,
        filters
    }
 */
export const expensesReducerDefaultState = [];

export const getExpenses = (state) => state.expenses;

export default (state = expensesReducerDefaultState, {type,payload}) => {
    switch (type) {
        case expenseActions.addExpense:
            return [
                ...state,
                payload.expense
            ];
        case expenseActions.removeExpense:
            return state.filter(({id}) => id !== payload.id);
        case expenseActions.editExpense:
            return state.map((expense) => {
                if(expense.id === payload.id){
                    return {
                        ...expense,
                        ...payload.updates
                    }
                }else{
                    return expense;
                }
            });
        default:
            return state
    }
};

//action constant

