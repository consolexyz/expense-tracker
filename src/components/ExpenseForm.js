import React, { useState } from "react";
import './ExpenseForm.css';


export default  function ExpenseFrom(){

const [enteredTitle, setEnteredTitle] = useState('');
const [enteredAmount,setEnteredAmount] = useState('');
const [enteredDate, setEnteredDate]  = useState('');

const titleChangeHandeler = (event) => {
    setEnteredTitle(event.target.value)
}

const amountChangeHandeler = (event) => {
    setEnteredAmount(event.target.value)
}
 const dateChangeHandeler = (event) => {
     setEnteredDate(event.target.value)
 }

 const submitHandeler = (event) =>{
     event.preventDefault()

     const newExpenseData = {
    title: enteredTitle,
     amount:enteredAmount,
      date : new Date(enteredDate)
 }
 console.log(newExpenseData);
     setEnteredTitle('');
     setEnteredAmount('');
     setEnteredDate('');
 }
    return(
        <form onSubmit = {submitHandeler}>
        <div className='new-expense-controls'>
          <div className='new-expense-control'>
            <label>Title</label>
            <input type='text' 
            value ={enteredTitle}
            onChange={titleChangeHandeler} />
          </div>
          <div className='new-expense-control'>
            <label>Amount</label>
            <input type='number'
             min='0.01' step='0.01'
             value = {enteredAmount}
             onChange ={amountChangeHandeler} />
          </div>
          <div className='new-expense-control'>
            <label>Date</label>
            <input type='date' 
            min='2019-01-01' 
            max='2022-12-31'
            value = {enteredDate}
             onChange ={dateChangeHandeler}  />
          </div>
        </div>
        <div className='new-expense-actions'>
          <button type='submit'>Add Expense</button>
        </div>
      </form>
    )
}