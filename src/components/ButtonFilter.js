import React, { useState } from "react";

export function ButtonFilter(props) {

  let listButtonTitle = [
    {
      title: "All",
      isClicked: true
    },
    {
      title: "Active",
      isClicked: false
    },
    {
      title: "Completed",
      isClicked: false
    }
  ];

  const [listButtonsState, setListButtonState] = useState(listButtonTitle);

  const handleClickBtn = (item, e) => {
    props.setTitleBtn(item.title);
    let list = [...listButtonsState];
    for (var i = 0; i < list.length; i++) {
      if (list[i].title === item.title) {
        list[i].isClicked = true;
      } else {
        list[i].isClicked = false;
      }
    }
    setListButtonState(list)
  };

  const myList = listButtonsState.map((item) => (
    <button
      className={item.isClicked ? 'show button-active': 'show'} 
      key={item.title}
      onClick={(e) => handleClickBtn(item, e)}
    >
      {item.title}
    </button>
  ));

  return (
    <p className="end">
      <span>{props.numberTask} item left</span>
      <span>{myList}</span>
    </p>
  );
}
