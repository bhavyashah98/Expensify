import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from "./ExpenseForm";
import {editExpense, removeExpense} from "../actions/expenses";

const EditExpensePage = (props) => (
    <div>
        <ExpenseForm expense={props.expense} onSubmit={(expense) => {
            props.editExpense(props.expense.id,expense);
            props.history.push('/');
        }}/>
        <button onClick={() => {
            props.removeExpense(props.expense.id);
            props.history.push('/');
        }}>Remove</button>
    </div>
);

const matchStateToProps = (state,props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === (props.match.params.id);
        })
    }
};

const matchDispatchToProps = (dispatch,props) => {
    return {
        editExpense: (id,updates) => dispatch(editExpense(id,updates)),
        removeExpense: (id) => dispatch(removeExpense({id}))
    }
};
export default connect(matchStateToProps,matchDispatchToProps)(EditExpensePage);