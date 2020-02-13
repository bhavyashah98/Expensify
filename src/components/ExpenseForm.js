import React from 'react';
import {useState} from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const ExpenseForm = (props) => {
    const description = useFormInput(props.expense ? props.expense.description : '');
    const amount = useFormInput(props.expense ? props.expense.amount : '');
    const note = useFormInput(props.expense ? props.expense.note : '');
    const [createdAt,setCreatedAt] = useState(props.expense ? moment(props.expense.createdAt) : moment());
    const [calenderFocused,setCalenderFocused] = useState(false);
    const [error, setError] = useState('');
    const onDateChange = (createdAt) => {
        if(createdAt){
            setCreatedAt(createdAt);
        }
    };
    const onFocusChange = ({focused}) => {
        setCalenderFocused(focused);
    };

    const onSubmit = (e) => {
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
            props.onSubmit({
                description: description.value,
                amount: amount.value,
                createdAt: createdAt.valueOf(),
                note: note.value
            });
        }
    };
    return (
      <div>
          {error && <p>{error}</p>}
         <form onSubmit={onSubmit}>
             <input type="text" placeholder="description" {...description}/>
             <input type="number" placeholder="Amount" {...amount} step=".01"/>
             <SingleDatePicker
                date={createdAt}
                onDateChange={onDateChange}
                focused={calenderFocused}
                onFocusChange={onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => {return false}}
             />
             <textarea placeholder="Note for your expenses (optional)" {...note}/>
             <button>Add Expense</button>
         </form>
      </div>
    );
};

const useFormInput = (initialValue) => {
    const [value,setValue] = useState(initialValue);

    const handleOnChange = (e) => {
        setValue(e.target.value);
    };

    return {
        value,
        onChange: handleOnChange
    };
};


export default (ExpenseForm);