import React from "react";

export function ButtonFilter(props) {

  let listButtonTitle = ["All", "Active", "Completed"];

  const handleClickBtn = (item, e) => {
    props.setTitleBtn(item);
  };

  const myList = listButtonTitle.map((item) => (
    <button
      disabled={props.numberTask === 0}
      key={item}
      className="show"
      onClick={(e) => handleClickBtn(item, e)}
    >
      {item}
    </button>
  ));

  return (
    <p className="end">
      <span>{props.numberTask} item left</span>
      <span>{myList}</span>
    </p>
  );
}
