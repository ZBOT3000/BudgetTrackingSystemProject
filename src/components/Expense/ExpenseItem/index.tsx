import React, { useState } from "react";
import ExpenseDate from "../ExpenseDate";
import Card from "../../Card";

const ExpenseItem = (props: any) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Switch up");
  };

  return (
    <Card className="bg-indigo-500 shadow-lg shadow-indigo-500/50 p-2 m-4 rounded-lg bg-indigo-700 text-white">
      <div className="flex justify-between items-center ">
        <ExpenseDate exdate={props.exdate} />
        <h2 className="text-2xl">{title}</h2>
        <div>
          <div className="text-base font-light text-indigo-700 bg-white rounded-lg p-2  px-7 border  hover:border-indigo-500/100  ">
            R{props.price}
          </div>
          <button onClick={clickHandler}>Update</button>
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
