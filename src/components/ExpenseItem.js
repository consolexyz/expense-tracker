import React from "react";
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";

class ExpenseItem extends React.Component{
    render(){
    
        return(
            <div className = 'expense-item' >
                    <ExpenseDate date= {this.props.date} />
                <div className = '.expense-item__description '>
                    <h2>{this.props.title} </h2>
                </div>
                <div className = 'expense-item__price'> {this.props.amount} </div>
            </div>
        )
    }
}

export default ExpenseItem