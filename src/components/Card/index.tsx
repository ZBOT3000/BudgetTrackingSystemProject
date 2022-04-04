import React from "react";

const Card = (props: any) => {
  const classes = "rounded-2xl shadow-xl shadow-indigo-500" + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
