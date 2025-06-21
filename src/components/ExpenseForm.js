import { useEffect, useState } from "react";

function ExpenseForm({ addExpense, updateExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (updateExpense) {
      setTitle(updateExpense.title);
      setAmount(updateExpense.amount);
    }
  }, [updateExpense]);

 const handleSubmit = (e) => {
  e.preventDefault();

  if (!title.trim() || !amount.trim()) return;

  addExpense({ id: Date.now(), title, amount });
  setTitle("");
  setAmount("");
};



  return (
    <form onSubmit={handleSubmit}>
      <h3 className="ex">Expense Tracker</h3>
      <div className="expense-Form"> 
       <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required />


      <div className="amount-addbtn"> 
       <input className="amount"
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required /> 
        
      <button className="add-Btn" type="submit"> ADD </button>
      </div> 
      </div>
    </form>
  );
}

export default ExpenseForm;
