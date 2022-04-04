import React from "react";
import Card from "../../Card";
import ExpenseItem from "../ExpenseItem";

const Expenses = (props: any) => {
  return (
    <Card className=" p-4 m-8 w-6/12 ">
      <ExpenseItem
        exdate={props.item[0].exdate}
        title={props.item[0].title}
        price={props.item[0].price}
      />

      <ExpenseItem
        exdate={props.item[1].exdate}
        title={props.item[1].title}
        price={props.item[1].price}
      />

      <ExpenseItem
        exdate={props.item[2].exdate}
        title={props.item[2].title}
        price={props.item[2].price}
      />
    </Card>
  );
};

export default Expenses;
