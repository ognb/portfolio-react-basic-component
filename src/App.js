import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e0",
    title: "car insurance1",
    amount: "50",
    date: new Date(2021, 0, 1),
  },
  {
    id: "e1",
    title: "car insurance2",
    amount: "14",
    date: new Date(2021, 1, 1),
  },
  {
    id: "e2",
    title: "tilte2",
    amount: "13",
    date: new Date(2021, 2, 2),
  },
  {
    id: "e3",
    title: "tilte1",
    amount: "30",
    date: new Date(2021, 3, 3),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses([expense, ...expenses]);
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
