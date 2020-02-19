import uuid from 'uuid';

export const expenseActions = {
    addExpense: 'ADD_EXPENSE',
    removeExpense: 'REMOVE_EXPENSE',
    editExpense: 'EDIT_EXPENSE'
};

export const addExpense = (
    {
        description= '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: expenseActions.addExpense,
    payload: {
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
});

export const removeExpense = ({id} = {}) => ({
    type: expenseActions.removeExpense,
    payload: {
        id
    }
});

export const editExpense = (id,updates) => ({
    type: expenseActions.editExpense,
    payload: {
        id,
        updates
    }
});