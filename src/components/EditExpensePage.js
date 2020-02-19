import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import ExpenseForm from "./ExpenseForm";
import {editExpense, removeExpense} from "../actions/expenseActions";
import {getExpenses} from "../reducers/expensesReducer";

const EditExpensePage = ({editExpense,history,removeExpense,expense}) => {

    const onEditExpense = useCallback((exp) => {
        editExpense(expense.id,exp);
        history.push('/');
    },[editExpense,history]);

    const onRemoveExpense= useCallback(() => {
        removeExpense({id: expense.id});
        history.push('/');
    },[removeExpense,history]);

    return (
        <React.Fragment>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit Expense</h1>
                </div>
            </div>
            <div className="content-container">
                <ExpenseForm
                    expense={expense}
                    onSubmit={onEditExpense}
                />
                <button className="button button--secondary" onClick={onRemoveExpense}>Remove Expense</button>
            </div>
        </React.Fragment>
    );
};

const matchStateToProps = (state,props) => {
    return {
        expense: getExpenses(state).find((expense) => {
            return expense.id === (props.match.params.id);
        })
    }
};

export default connect(matchStateToProps,{editExpense,removeExpense})(EditExpensePage);