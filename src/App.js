
import React from "react";
import ExpenseItem from "./components/ExpenseItem";
import ExpenseData from "./components/ExpenseData";
import NewExpense from "./components/NewExpense";

class App extends React.Component{
  render(){

    const expense = ExpenseData.map( expense => <ExpenseItem key = {expense.id} title ={expense.title}  date ={expense.date} amount ={expense.amount}   />)
    return(
      <div>
        <NewExpense />
        {expense}
      </div>
    )
  }
}

export default App;
