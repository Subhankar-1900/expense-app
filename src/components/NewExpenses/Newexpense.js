import React from "react";
import './Newexpense.css';
import Expenseform from "./Expenseform";

const Newexpense=(props)=>{

    const saveExpensedatahandler=(enteredExpenseData)=>{
        const expenseData={...enteredExpenseData,id:Math.random().toString()}

        props.onAddExpense(expenseData);
        
        console.log(expenseData);
    };
    
    return(
        <div className="new-expense">
            <Expenseform onSaveExpenseData={saveExpensedatahandler}/>
        </div>
    );
}

export default Newexpense;
