import React, { useState } from "react";

const NewExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const TitleHandler = (event: any) => {
    setEnteredTitle(event.target.value);
  };

  const AmountHandler = (event: any) => {
    setEnteredAmount(event.target.value);
  };

  const DateHandler = (event: any) => {
    setEnteredDate(event.target.value);
  };

  const Output = () => {
    console.log("Title: ", enteredTitle);
    console.log("Amount: ", enteredAmount);
    console.log("Date: ", enteredDate);
  };

  return (
    <div className="flex flex-wrap gap-4 mb-4 text-left ">
      <div>
        <label className=" font-bold mb-2 block text-white">Title</label>
        <input
          className=" font-light p-2 rounded-2xl border-2 border-indigo-600 w-80 max-w-full"
          type="text"
          onChange={TitleHandler}
        />
      </div>
      <div>
        <label className=" font-bold mb-2 block text-white">Amount</label>
        <input
          className=" font-light p-2 rounded-2xl border-2 border-indigo-600 w-80 max-w-full"
          type="number"
          min="0.01"
          step="0.01"
          onChange={AmountHandler}
        />
      </div>
      <div>
        <label className=" font-light mb-2 block text-white">Date</label>
        <input
          className=" font-light p-2 rounded-2xl border-2 border-indigo-600 w-80 max-w-full"
          type="date"
          min="2018-01-01"
          max="2022-12-31"
          onChange={DateHandler}
        />
      </div>
      <div>
        <button
          type="submit"
          className="text-right rounded-2xl m-7 ml-2 bg-white hover:bg-violet-600 hover:text-white active:bg-violet-700  focus:outline-none focus:ring focus:ring-violet-300 cursor-pointer p-2 border-2 bg-white text-black rounded-xl mr-4"
          onClick={Output}
        >
          Add New Expense
        </button>
      </div>
    </div>
  );
};

export default NewExpenseForm;
