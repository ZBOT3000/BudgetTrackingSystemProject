import React from "react";

const ExpenseDate = (props: any) => {
  const day = props.exdate.toLocaleString("en-US", { day: "2-digit" });
  const month = props.exdate.toLocaleString("en-US", { month: "long" });
  const year = props.exdate.getFullYear();

  return (
    <div className="flex flex-col w-24 h-24 border-2 border-indigo-600 bg-white rounded-xl items-center justify-center">
      <div className="text-3xl font-bold text-indigo-700">{day}</div>
      <div className="text-s font-bold text-indigo-700"> {month} </div>
      <div className=" text-indigo-700"> {year}</div>
    </div>
  );
};

export default ExpenseDate;
