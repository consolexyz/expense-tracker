import React from "react";
import './ExpenseDate.css';

class ExpenseDate extends React.Component{
    render(){

        const month = this.props.date.toLocaleString('en-us', {month: 'long'});
        const day = this.props.date.toLocaleString('en-us', {day: '2-digit'});
        const year = this.props.date.getFullYear();

        return(
            <div>
                <div className = "expense-date__month" >{month}</div>
                <div className = "expense-date__year">{year}</div>
                <div className = "expense-date__day" >{day}</div>
            </div>
        )
    }
}


export default ExpenseDate