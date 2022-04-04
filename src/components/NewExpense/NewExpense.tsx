import React from "react";
import NewExpenseForm from "./ExpenseForm";

function NewExpense() {
  return (
    <div className="  p-4 m-8 w-1/2 max-w-full rounded-xl text-center bg-indigo-500 shadow-lg shadow-indigo-500/50">
      <NewExpenseForm />
    </div>
  );
}

export default NewExpense;
