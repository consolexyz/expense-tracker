
import React from "react";
import ExpenseItem from "./components/ExpenseItem";
import ExpenseData from "./components/ExpenseData";

class App extends React.Component{
  render(){

    const expense = ExpenseData.map( expense => <ExpenseItem key = {expense.id} title ={expense.title}  date ={expense.date} amount ={expense.amount}   />)
    return(
      <div>
        {expense}
      </div>
    )
  }
}

export default App;
