import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from "./ExpenseForm";
import {editExpense, removeExpense} from "../actions/expenses";

const EditExpensePage = (props) => (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Edit Expense</h1>
            </div>
        </div>
        <div className="content-container">
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.editExpense(props.expense.id,expense);
                    props.history.push('/');
                }}
            />
            <button className="button button--secondary" onClick={() => {
                props.removeExpense(props.expense.id);
                props.history.push('/');
            }}>Remove Expense</button>
        </div>
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