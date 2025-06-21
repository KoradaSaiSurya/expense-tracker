import React, { useState } from "react";

const ExpenseItem = ({ expense, deleteExpense, updateExpense }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(expense.title);

const handleUpdate = () => {
  updateExpense(expense.id, title);
  setIsEditing(false);
};

return (
  <div className="title">
    {isEditing ? (
      <>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={handleUpdate}>Save</button>
      </>
    ) : (
     <>
        <span>{expense.title} <span  className="rupees"> - ₹  {expense.amount}</span></span>
        <div className="action-Btns">
          <button className="edit-Btn" onClick={() => setIsEditing(true)}>✏️</button>
          <button className="delete-Btn" onClick={() => deleteExpense(expense.id)}>🗑️</button>
        </div>
     </>

    )}
    
  </div>
);

};

export default ExpenseItem;