import React,{useCallback} from 'react';
import ExpenseForm from "./ExpenseForm";
import {connect} from 'react-redux';
import {addExpense} from "../actions/expenseActions";

const AddExpensePage = ({addExpense,history}) => {

    const onAddExpense = useCallback((expense)=> {
        addExpense(expense);
        history.push('/');
    },[addExpense,history]);

    return (
        <React.Fragment>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Add Expense</h1>
                </div>
            </div>
            <div className="content-container">
                <ExpenseForm
                    onSubmit={onAddExpense}
                />
            </div>
        </React.Fragment>
    );
};

export default connect(null,{addExpense})(AddExpensePage);