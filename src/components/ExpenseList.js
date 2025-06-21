import React from "react";
import ExpenseItem from "./ExpenseItem";


const ExpenseList =({ expenses, deleteExpense, updateExpense }) => {
  return (
    <div className="expense-List"> 
    {expenses.map((expense) => (
        <ExpenseItem 
          key={expense.id}
          expense={expense}
          deleteExpense={deleteExpense}
          updateExpense={updateExpense}
        />
      ))}
      </div> 
  );
}

export default ExpenseList;
