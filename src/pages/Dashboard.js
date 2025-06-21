import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import Total from "../components/Total";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [expenses, setExpenses] = useState([])
  
  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem(`expenses_${user.username}`)) || [];
    setExpenses(savedExpenses);
  }, [user]);

  const saveExpenses = (newExpense) => {
    setExpenses(newExpense);
    localStorage.setItem(`expenses_${user.username}`, JSON.stringify(newExpense));
  };

  const addExpense = (expense) => {
    const newExpense = [...expenses, expense];
    saveExpenses(newExpense);
  };

  const deleteExpense = (id) => {
    const newExpense = expenses.filter((expense) => expense.id !== id);
    saveExpenses(newExpense);
  };

  const updateExpense = (id, updatedTitle ) => {
  const newExpense = expenses.map((expense) =>
    expense.id === id ? { ...expense, title: updatedTitle } : expense
  );
  saveExpenses(newExpense);
};


  const handleLogout = () => {
    // logout();
    navigate("/login");
  };


  return (
    <div className="dashboard-Container">
      <div className="dashboard-Form">
      <h2>Welcome, <span style={{color:"#4a90e2"}}> {user.username} </span></h2>
     
      <ExpenseForm addExpense={addExpense} updateExpense={updateExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} updateExpense={updateExpense} />
      <Total expenses={expenses} />
       <button className="logout" onClick={handleLogout}>Logout</button>
    </div>
    </div>
  );
}

export default Dashboard;
