import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../utils/filteredExpenses";
import {getExpenses} from "../reducers/expensesReducer";
import {getFilters} from "../reducers/filtersReducer";

const ExpenseList = ({expenses}) => (
    <div className="content-container">
        <div className="list-header">
            <div>Expense</div>
            <div>Amount</div>
        </div>
        <div className="list-body">
            {
                expenses.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No expenses</span>
                    </div>
                ) : (
                    expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id} {...expense} />;
                    })
                )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
  return {
      expenses: selectExpenses(getExpenses(state),getFilters(state))
  }
};

export default connect(mapStateToProps)(ExpenseList);

