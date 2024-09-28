import React,{useState} from "react";

import './Expenseform.css';

const Expenseform=(props)=>{

    const[enteredTitle,setEnteredTitle]=useState('');
    const[enteredAmount,setEnteredAmount]=useState('');
    const[enteredDate,setEnteredDate]=useState('');

    const titleChangehandler=(event)=>{
        setEnteredTitle(event.target.value);
    };
    const amountChangehandler=(event)=>{
        setEnteredAmount(event.target.value);
    };
    const dateChangehandler=(event)=>{
        setEnteredDate(event.target.value);
    };

    const submithandler=(event)=>{
        event.preventDefault();

        const  expensedata={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }

        props.onSaveExpenseData(expensedata);
        console.log(expensedata);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return(
        <form onSubmit={submithandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} placeholder="Enter title" onChange={titleChangehandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} placeholder="Enter Amount" onChange={amountChangehandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangehandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default Expenseform;