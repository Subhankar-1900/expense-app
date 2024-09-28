import './App.css';
import React ,{useState} from 'react';

import Expenses from './components/Expenses/Expenses';

import Newexpense from './components/NewExpenses/Newexpense';

let Dummy_Expenses=[
    {
        id:'e1',
        title:'School Fees',
        amount:250,
        date: new Date(2024,1,1)
    },
    {
        id:'e2',
        title:'Books Fees',
        amount:350,
        date: new Date(2024,1,2)
    },
    {
        id:'e3',
        title:'Mess Fees',
        amount:450,
        date: new Date(2024,1,3)
    },
    {
        id:'e4',
        title:'Food Fees',
        amount:550,
        date: new Date(2024,1,4)
    }
];

const App=()=>{

    const[expenses,setExpenses]=useState(Dummy_Expenses)

    
    const addExpenseHandler=(expense)=>{
        const upadtedExpense=[expense,...expenses];
        setExpenses(upadtedExpense);
    }

    return (
        <div>
            <Newexpense onAddExpense={addExpenseHandler}/>
            <Expenses item={expenses}/>
        </div>
    );
}

export default App;