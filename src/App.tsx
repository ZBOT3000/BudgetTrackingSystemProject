import React from "react";
import Expenses from "./components/Expense/Expenses";
import { NewExpense } from "./components/NewExpense";
import "../src/index.css";

const App = () => {
  const expenses = [
    {
      id: "1",
      exdate: new Date(2022, 3, 22),
      title: "Car Insurance",
      price: 400,
    },
    {
      id: "2",
      exdate: new Date(2022, 7, 22),
      title: "Groceries",
      price: 300,
    },
    {
      id: "3",
      exdate: new Date(2022, 10, 22),
      title: "Entertaiment",
      price: 200,
    },
  ];

  return (
    <div>
      <h2>Let's get started</h2>
      <div className="justify-center">
        <NewExpense />
        <Expenses item={expenses} />
      </div>
    </div>
  );
};

export default App;
