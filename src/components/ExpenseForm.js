import React,{useCallback} from 'react';
import {useState} from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const ExpenseForm = ({expense,onSubmit}) => {
    const description = useFormInput(expense ? expense.description : '');
    const amount = useFormInput(expense ? expense.amount : '');
    const note = useFormInput(expense ? expense.note : '');
    const [createdAt,setCreatedAt] = useState(expense ? moment(expense.createdAt) : moment());
    const [calenderFocused,setCalenderFocused] = useState(false);
    const [error, setError] = useState('');

    const onDateChange = useCallback((createdAt) => {
        if(createdAt){
            setCreatedAt(createdAt);
        }
    },[setCreatedAt]);

    const onFocusChange = useCallback(({focused}) => {
        setCalenderFocused(focused);
    },[setCalenderFocused]);

    const submit = useCallback((e) => {
        e.preventDefault();
        if(!description.value && !amount.value){
            setError('Please provide description and amount');
        }
        else if(!description.value){
            setError('Please provide description');
        }else if(!amount.value){
            setError('Please provide amount');
        }else{
            setError('');
            onSubmit({
                description: description.value,
                amount: parseFloat(amount.value),
                createdAt: createdAt.valueOf(),
                note: note.value
            });
        }
    },[description.value,amount.value,createdAt,note.value]);

    return (
      <React.Fragment>
          {error && <p>{error}</p>}
         <form className="form" onSubmit={submit}>
             <input type="text" placeholder="description" {...description} autoFocus className="text-input" />
             <input type="number" placeholder="Amount"className="text-input" {...amount} step=".01"/>
             <SingleDatePicker
                date={createdAt}
                onDateChange={onDateChange}
                focused={calenderFocused}
                onFocusChange={onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => {return false}}
             />
             <textarea placeholder="Note for your expenses (optional)" className="textarea" {...note}/>
             <button className="button">{expense? "Edit Expense": "Add Expense"}</button>
         </form>
      </React.Fragment>
    );
};

const useFormInput = (initialValue) => {
    const [value,setValue] = useState(initialValue);

    const handleOnChange = useCallback((e) => {
        setValue(e.target.value);
    },[setValue]);

    return {
        value,
        onChange: handleOnChange
    };
};


export default (ExpenseForm);