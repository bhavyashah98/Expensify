import React from 'react';
import ExpenseForm from "./ExpenseForm";
import {connect} from 'react-redux';
import {addExpense} from "../actions/expenses";

const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={(expense) => {
            props.addExpense(expense);
            props.history.push('/')
        }}/>
    </div>
);

const matchDispatchToProps = (dispatch,props) => {
    return {
        addExpense: (expense) => dispatch(addExpense(expense))
    }
}
export default connect(null,matchDispatchToProps)(AddExpensePage);